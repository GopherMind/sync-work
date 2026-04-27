import { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';
import axiosInstance from '../../../api/api';
import TaskProposalsGroup from './TaskProposalsGroup';

interface TaskProposal {
  id: string;
  user_id: string;
  cover_letter: string;
  status: 'pending' | 'accepted' | 'rejected';
}

interface TaskWithProposals {
  task_id: string;
  proposals: TaskProposal[];
}

const TaskProposals = () => {
  const [taskProposals, setTaskProposals] = useState<TaskWithProposals[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  const fetchProposals = async () => {
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
      const { data } = await axiosInstance.get('/proposal/task', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTaskProposals(data);
    } catch (error) {
      console.error('Failed to fetch proposals:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProposals();
  }, []);

  const handleAccept = async (proposalId: string) => {
    setProcessingId(proposalId);
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
      await axiosInstance.post(`/proposal/accept/${proposalId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      await fetchProposals();
    } catch (error) {
      console.error('Failed to accept proposal:', error);
    } finally {
      setProcessingId(null);
    }
  };

  const handleDeny = async (proposalId: string) => {
    setProcessingId(proposalId);
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
      await axiosInstance.post(`/proposal/deny/${proposalId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      await fetchProposals();
    } catch (error) {
      console.error('Failed to deny proposal:', error);
    } finally {
      setProcessingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (taskProposals.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400">No proposals received yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {taskProposals.map((taskData, taskIndex) => (
        <TaskProposalsGroup
          key={taskData.task_id}
          taskData={taskData}
          taskIndex={taskIndex}
          processingId={processingId}
          onAccept={handleAccept}
          onDeny={handleDeny}
        />
      ))}
    </div>
  );
};

export default TaskProposals;
