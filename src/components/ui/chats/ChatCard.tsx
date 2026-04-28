import { motion } from 'framer-motion';
import { MessageSquare, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Chat } from '../../../types/chatTypes';

interface ChatCardProps {
  chat: Chat;
  index: number;
}

const ChatCard = ({ chat, index }: ChatCardProps) => {
  const { chats } = chat;
  const isActive = chats.status === 'active';

  const truncateDescription = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/chat/${chats.id}`}>
        <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 group">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-amber-500/30 transition-all">
                <MessageSquare className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg group-hover:text-orange-400 transition-colors">
                  {chats.tasks.title}
                </h3>
              </div>
            </div>

            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
              isActive
                ? 'bg-green-500/10 text-green-400'
                : 'bg-gray-500/10 text-gray-400'
            }`}>
              {isActive ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <Clock className="w-4 h-4" />
              )}
              <span className="text-xs font-medium capitalize">{chats.status}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 mb-4">
            <p className="text-gray-400 text-sm leading-relaxed">
              {truncateDescription(chats.tasks.description, 150)}
            </p>
          </div>

          <div className="flex items-center justify-end">
            <motion.div
              className="text-orange-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ x: 5 }}
            >
              Open Chat →
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ChatCard;
