import { motion } from 'framer-motion';
import { Check, X, Loader2 } from 'lucide-react';

interface TaskProposal {
  id: string;
  user_id: string;
  cover_letter: string;
  status: 'pending' | 'accepted' | 'rejected';
}

interface ProposalItemProps {
  proposal: TaskProposal;
  index: number;
  isProcessing: boolean;
  onAccept: (id: string) => void;
  onDeny: (id: string) => void;
}

const ProposalItem = ({ proposal, index, isProcessing, onAccept, onDeny }: ProposalItemProps) => {
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
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-[#0d0d0d] border border-white/5 rounded-lg p-4"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gray-400 text-sm">
              User ID: {proposal.user_id}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(proposal.status)}`}>
              {proposal.status}
            </span>
          </div>
        </div>

        {proposal.status === 'pending' && (
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onAccept(proposal.id)}
              disabled={isProcessing}
              className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Check className="w-4 h-4" />
              )}
              <span className="text-sm font-medium">Accept</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onDeny(proposal.id)}
              disabled={isProcessing}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <X className="w-4 h-4" />
              )}
              <span className="text-sm font-medium">Deny</span>
            </motion.button>
          </div>
        )}
      </div>

      <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-4">
        <p className="text-gray-300 text-sm leading-relaxed">
          {proposal.cover_letter}
        </p>
      </div>
    </motion.div>
  );
};

export default ProposalItem;
