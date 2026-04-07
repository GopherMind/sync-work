import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  role: 'Freelancer' | 'Client'
  text: string
  avatar: string
}

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Айгерим Бекова',
    role: 'Freelancer',
    text: 'SyncWork изменил мою карьеру. Нашла 3 крупных проекта за первый месяц. Платформа интуитивная, оплата моментальная.',
    avatar: 'AB'
  },
  {
    id: '2',
    name: 'Марат Жумабаев',
    role: 'Client',
    text: 'Искал Go-разработчика 2 недели на других платформах. Здесь нашел за 3 часа. Качество работы превзошло ожидания.',
    avatar: 'MZ'
  },
  {
    id: '3',
    name: 'Жанна Токтогулова',
    role: 'Freelancer',
    text: 'Работаю удаленно из Иссык-Куля. SyncWork дал доступ к международным проектам. Заработок вырос в 4 раза.',
    avatar: 'ZT'
  }
]

const Testimonials = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            What People <span className="text-orange-400">Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real stories from our community of freelancers and clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: i * 0.15
              }}
              whileHover={{ y: -4 }}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 overflow-hidden group"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(255,106,0,0.1) 0%, transparent 60%)'
                }}
              />

              <div className="relative z-10">
                <Quote className="text-orange-400 mb-4" size={32} strokeWidth={1.5} />

                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-orange-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
