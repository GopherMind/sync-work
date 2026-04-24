import { motion } from 'framer-motion'
import { TrendingUp, Award, Calendar, Clock, Users } from 'lucide-react'

interface OrderSidebarProps {
  level?: string
  duration?: string
  workTimeInWeek?: number
  proposals?: number
  status: string
}

const OrderSidebar = ({ level, duration, workTimeInWeek, proposals, status }: OrderSidebarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="space-y-6"
    >
      <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 space-y-4">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <TrendingUp className="text-orange-400" size={20} />
          Project Details
        </h3>

        {level && (
          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/30 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <Award className="text-orange-400" size={18} />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Experience Level</p>
                <p className="text-white font-semibold capitalize">{level}</p>
              </div>
            </div>
          </motion.div>
        )}

        {duration && (
          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/30 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <Calendar className="text-purple-400" size={18} />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Duration</p>
                <p className="text-white font-semibold">{duration}</p>
              </div>
            </div>
          </motion.div>
        )}

        {workTimeInWeek !== undefined && (
          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/30 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Clock className="text-blue-400" size={18} />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Time Commitment</p>
                <p className="text-white font-semibold">{workTimeInWeek}h/week</p>
              </div>
            </div>
          </motion.div>
        )}

        {proposals !== undefined && (
          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/30 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Users className="text-green-400" size={18} />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Active Proposals</p>
                <p className="text-white font-semibold">{proposals}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 font-bold text-sm uppercase tracking-wider">
            {status}
          </span>
        </div>
        <p className="text-gray-400 text-sm">This project is actively accepting proposals</p>
      </motion.div>
    </motion.div>
  )
}

export default OrderSidebar
