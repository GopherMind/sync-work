import { motion } from 'framer-motion';
import type { Proposal } from '../../../types/profileTypes';

interface ProposalCardProps {
  proposal: Proposal;
  index: number;
}

const ProposalCard = ({ proposal, index }: ProposalCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'accepted': return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'rejected': return 'bg-red-500/10 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6 hover:border-orange-500/30 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-white font-semibold">Cover Letter</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(proposal.status)}`}>
              {proposal.status}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#0d0d0d] border border-white/5 rounded-lg p-4">
        <p className="text-gray-300 text-sm leading-relaxed">{proposal.cover_letter}</p>
      </div>
    </motion.div>
  );
};

export default ProposalCard;
