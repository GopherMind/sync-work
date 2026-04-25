import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Calendar, FileText } from 'lucide-react';
import type { Task } from '../../../types/profileTypes';

interface TaskCardProps {
  task: Task;
  index: number;
}

const TaskCard = ({ task, index }: TaskCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6 hover:border-orange-500/30 transition-all cursor-pointer"
      onClick={() => window.location.href = `/order/${task.id}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg mb-2">{task.title}</h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">{task.description}</p>

          <div className="flex flex-wrap gap-2 mb-3">
            {task.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-full border border-orange-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-green-400" />
          <span className="text-white font-semibold">${task.budget}</span>
        </div>
        {task.level && (
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span>{task.level}</span>
          </div>
        )}
        {task.duration && (
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span>{task.duration}</span>
          </div>
        )}
        {task.proposals !== undefined && (
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-orange-400" />
            <span>{task.proposals} proposals</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TaskCard;
