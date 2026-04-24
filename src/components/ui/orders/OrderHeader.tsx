import { motion } from 'framer-motion'
import { User, Sparkles } from 'lucide-react'

interface OrderHeaderProps {
  clientName: string
  budget: number
  title: string
  description: string
}

const OrderHeader = ({ clientName, budget, title, description }: OrderHeaderProps) => {
  return (
    <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#151515] border border-white/10 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5" />
      <div className="relative p-6 sm:p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm"
            >
              <User className="text-orange-400" size={28} />
            </motion.div>
            <div>
              <h3 className="text-white font-bold text-lg">{clientName}</h3>
              <p className="text-gray-400 text-sm flex items-center gap-1">
                <Sparkles size={14} className="text-orange-400" />
                Verified Client
              </p>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-right bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-xl px-6 py-3"
          >
            <div className="text-orange-400 font-bold text-3xl tracking-tight">
              ${budget.toLocaleString()}
            </div>
            <p className="text-gray-400 text-xs font-medium mt-1">Project Budget</p>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-base leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </div>
  )
}

export default OrderHeader
