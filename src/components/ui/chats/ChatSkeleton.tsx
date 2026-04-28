import { motion } from 'framer-motion';

const ChatSkeleton = () => {
  return (
    <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6 animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/5 rounded-lg" />
          <div>
            <div className="h-5 w-40 bg-white/5 rounded mb-2" />
            <div className="h-4 w-32 bg-white/5 rounded" />
          </div>
        </div>
        <div className="h-7 w-20 bg-white/5 rounded-full" />
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div className="h-4 w-36 bg-white/5 rounded" />
        <div className="h-4 w-24 bg-white/5 rounded" />
      </div>
    </div>
  );
};

export default ChatSkeleton;
