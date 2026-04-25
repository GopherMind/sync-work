import { motion } from 'framer-motion';
import { FileText, Clock, TrendingUp } from 'lucide-react';
import type { Proposal } from '../../../types/profileTypes';

interface StatsCardsProps {
  proposals: Proposal[];
}

const StatsCards = ({ proposals }: StatsCardsProps) => {
  const pendingCount = proposals.filter(p => p.status === 'pending').length;
  const acceptedCount = proposals.filter(p => p.status === 'accepted').length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm">Total Proposals</span>
          <FileText className="w-5 h-5 text-orange-400" />
        </div>
        <p className="text-3xl font-bold text-white">{proposals.length}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm">Pending</span>
          <Clock className="w-5 h-5 text-yellow-400" />
        </div>
        <p className="text-3xl font-bold text-white">{pendingCount}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm">Accepted</span>
          <TrendingUp className="w-5 h-5 text-green-400" />
        </div>
        <p className="text-3xl font-bold text-white">{acceptedCount}</p>
      </motion.div>
    </div>
  );
};

export default StatsCards;
