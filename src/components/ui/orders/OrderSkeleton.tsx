import { motion } from 'framer-motion'

const OrderSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative bg-[#1a1a1a] border border-white/5 rounded-xl p-6 overflow-hidden"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 blur-md">
          <div className="w-8 h-8 rounded-full bg-orange-500/20" />
          <div className="h-4 w-24 bg-white/10 rounded" />
        </div>
        <div className="h-6 w-20 bg-orange-500/30 rounded blur-md" />
      </div>

      <div className="mb-6 blur-md">
        <div className="h-6 w-3/4 bg-white/15 rounded mb-2" />
        <div className="h-4 w-1/2 bg-white/10 rounded" />
      </div>

      <div className="flex gap-2 blur-md">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-8 w-16 bg-white/10 rounded-lg" />
        ))}
      </div>
    </motion.div>
  )
}

export default OrderSkeleton
