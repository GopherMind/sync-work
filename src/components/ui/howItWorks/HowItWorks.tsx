import { motion } from 'framer-motion'
import { FilePlus, Users, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Post a Task',
    description: 'Describe your project, budget, and timeline. Takes just 2 minutes.',
    icon: FilePlus
  },
  {
    number: '02',
    title: 'Choose a Pro',
    description: 'Get proposals from verified specialists. Pick the best one.',
    icon: Users
  },
  {
    number: '03',
    title: 'Close the Deal',
    description: 'Work through the platform. Payment after results.',
    icon: CheckCircle
  }
]

const HowItWorks = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            How It <span className="text-orange-400">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three simple steps to start your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: i * 0.15
                }}
                className="relative"
              >
                <div className="relative bg-[#1a1a1a] border border-white/5 rounded-xl p-8 hover:border-orange-500/30 transition-all duration-300">
                  <div
                    className="absolute top-4 right-4 text-[80px] font-bold text-orange-500/10 leading-none select-none"
                    style={{ fontFamily: 'monospace' }}
                  >
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center mb-6">
                      <Icon size={28} className="text-white" strokeWidth={2} />
                    </div>

                    <h3 className="text-white text-2xl font-bold mb-3 tracking-tight">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
