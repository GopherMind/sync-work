import { motion } from 'framer-motion'
import { Code2, Database, Palette, Cpu, Cloud, Zap } from 'lucide-react'

const techIcons: Record<string, any> = {
  React: Code2,
  TypeScript: Code2,
  Tailwind: Palette,
  Supabase: Database,
  Go: Cpu,
  WebSocket: Zap,
  PostgreSQL: Database,
  Redis: Database,
  Figma: Palette,
  'React Native': Code2,
  Framer: Palette,
  Python: Cpu,
  FastAPI: Zap,
  OpenAI: Cloud,
  Docker: Cloud,
  Vue: Code2,
  'Node.js': Cpu,
  MongoDB: Database,
  Mapbox: Cloud,
  Rust: Cpu,
  'Binance API': Zap,
  TradingView: Palette
}

interface TechStackCardProps {
  stack: string[]
}

const TechStackCard = ({ stack }: TechStackCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/50 via-orange-500 to-orange-500/50" />
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <Code2 className="text-orange-400" size={24} />
          <h3 className="text-white text-xl font-bold">Tech Stack</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {stack.map((tech, idx) => {
            const Icon = techIcons[tech] || Code2
            return (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl text-sm text-gray-300 font-medium hover:border-orange-500/50 hover:bg-orange-500/5 transition-all cursor-default"
              >
                <Icon size={18} className="text-orange-400/80 group-hover:text-orange-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">{tech}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default TechStackCard
