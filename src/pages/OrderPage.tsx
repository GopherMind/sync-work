import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import OrderHeader from '../components/ui/orders/OrderHeader'
import TechStackCard from '../components/ui/orders/TechStackCard'
import ProposalForm from '../components/ui/orders/ProposalForm'
import OrderSidebar from '../components/ui/orders/OrderSidebar'
import axiosInstance from '../api/api'
import type { Order } from '../types/orderTypes'
import { toast } from 'sonner'

const OrderPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await axiosInstance.get(`/tasks/getTask/${id}`)
        setOrder(data)
      } catch (error) {
        toast.error('Failed to load order')
        navigate('/works')
      } finally {
        setLoading(false)
      }
    }
    fetchOrder()
  }, [id, navigate])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
        </div>
        <Footer />
      </div>
    )
  }

  if (!order) return null

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex flex-col relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-150 h-150 bg-orange-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-125 h-125 bg-purple-500/20 rounded-full blur-[120px]"
        />
      </div>

      <Header />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.button
            onClick={() => navigate('/works')}
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:text-orange-400 transition-colors" />
            <span>Back to Orders</span>
          </motion.button>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <OrderHeader
                clientName={order.profiles.name}
                budget={order.budget}
                title={order.title}
                description={order.description}
              />

              <TechStackCard stack={order.stack} />

              <ProposalForm orderId={order.id} />
            </div>

            <OrderSidebar
              level={order.level}
              duration={order.duration}
              workTimeInWeek={order.work_time_in_week}
              proposals={order.proposals}
              status={order.status}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default OrderPage
