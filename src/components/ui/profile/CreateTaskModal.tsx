import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus } from 'lucide-react';
import axiosInstance from '../../../api/api';
import { toast } from 'sonner';

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const CreateTaskModal = ({ isOpen, onClose, onSuccess }: CreateTaskModalProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    level: 'middle' as 'junior' | 'middle' | 'senior',
    work_time_in_week: '',
    duration: '1 month' as '1 month' | 'less than 1 month' | '1-3 month' | '3-6 month' | 'more than 6 month'
  });
  const [stack, setStack] = useState<string[]>([]);
  const [stackInput, setStackInput] = useState('');
  const [loading, setLoading] = useState(false);

  const addStackItem = () => {
    const trimmed = stackInput.trim();
    if (trimmed && !stack.includes(trimmed)) {
      setStack([...stack, trimmed]);
      setStackInput('');
    }
  };

  const removeStackItem = (item: string) => {
    setStack(stack.filter(s => s !== item));
  };

  const handleStackKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addStackItem();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.title.length > 100) {
      toast.error('Title must be less than 100 characters');
      return;
    }

    if (formData.description.length > 2000) {
      toast.error('Description must be less than 2000 characters');
      return;
    }

    const workTime = Number(formData.work_time_in_week);
    if (workTime < 1 || workTime > 120) {
      toast.error('Work time must be between 1 and 120 hours');
      return;
    }

    if (stack.length === 0) {
      toast.error('Please add at least one technology to the stack');
      return;
    }

    setLoading(true);
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
      await axiosInstance.post('/tasks/createTask', {
        title: formData.title,
        description: formData.description,
        budget: Number(formData.budget),
        stack: stack,
        level: formData.level,
        work_time_in_week: workTime,
        duration: formData.duration
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      toast.success('Task created successfully!');
      setFormData({
        title: '',
        description: '',
        budget: '',
        level: 'middle',
        work_time_in_week: '',
        duration: '1 month'
      });
      setStack([]);
      setStackInput('');
      onSuccess();
      onClose();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to create task');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Create New Task</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors"
                  placeholder="Enter task title"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.title.length}/100</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  maxLength={2000}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors min-h-[120px]"
                  placeholder="Describe your task in detail"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.description.length}/2000</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget ($) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors"
                    placeholder="500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Work Time (hrs/week) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="120"
                    value={formData.work_time_in_week}
                    onChange={(e) => setFormData({ ...formData, work_time_in_week: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors"
                    placeholder="20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tech Stack <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={stackInput}
                    onChange={(e) => setStackInput(e.target.value)}
                    onKeyDown={handleStackKeyDown}
                    className="flex-1 px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors"
                    placeholder="Type technology and press Enter"
                  />
                  <button
                    type="button"
                    onClick={addStackItem}
                    className="px-4 py-3 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-lg hover:bg-orange-500/20 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                {stack.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {stack.map((item) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 text-orange-400 text-sm rounded-full border border-orange-500/30"
                      >
                        <span>{item}</span>
                        <button
                          type="button"
                          onClick={() => removeStackItem(item)}
                          className="hover:text-orange-300 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Level <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value as any })}
                    className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors"
                  >
                    <option value="junior">Junior</option>
                    <option value="middle">Middle</option>
                    <option value="senior">Senior</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Duration <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value as any })}
                    className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors"
                  >
                    <option value="less than 1 month">Less than 1 month</option>
                    <option value="1 month">1 month</option>
                    <option value="1-3 month">1-3 months</option>
                    <option value="3-6 month">3-6 months</option>
                    <option value="more than 6 month">More than 6 months</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-white/10 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Plus className="w-5 h-5" />
                      Create Task
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CreateTaskModal;
