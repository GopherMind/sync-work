import { motion } from 'framer-motion';
import ProposalItem from './ProposalItem';

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

interface TaskProposalsGroupProps {
  taskData: TaskWithProposals;
  taskIndex: number;
  processingId: string | null;
  onAccept: (id: string) => void;
  onDeny: (id: string) => void;
}

const TaskProposalsGroup = ({ taskData, taskIndex, processingId, onAccept, onDeny }: TaskProposalsGroupProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: taskIndex * 0.1 }}
      className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6"
    >
      <h3 className="text-white font-semibold mb-4">
        Task ID: {taskData.task_id}
      </h3>

      <div className="space-y-4">
        {taskData.proposals.map((proposal, proposalIndex) => (
          <ProposalItem
            key={proposal.id}
            proposal={proposal}
            index={proposalIndex}
            isProcessing={processingId === proposal.id}
            onAccept={onAccept}
            onDeny={onDeny}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TaskProposalsGroup;
