import type { Order } from '../types/orderTypes'

export const ordersData: Order[] = [
  {
    id: '1',
    title: 'E-commerce Dashboard with Analytics',
    price: 850,
    currency: 'USD',
    clientName: 'Michael Thompson',
    stack: ['React', 'TypeScript', 'Tailwind', 'Supabase']
  },
  {
    id: '2',
    title: 'Real-time Chat Application',
    price: 850,
    currency: 'USD',
    clientName: 'David Anderson',
    stack: ['Go', 'WebSocket', 'PostgreSQL', 'Redis']
  },
  {
    id: '3',
    title: 'Mobile Banking App UI/UX',
    price: 1200,
    currency: 'USD',
    clientName: 'Sarah Martinez',
    stack: ['Figma', 'React Native', 'Framer']
  },
  {
    id: '4',
    title: 'AI-Powered Content Generator',
    price: 1200,
    currency: 'USD',
    clientName: 'James Wilson',
    stack: ['Python', 'FastAPI', 'OpenAI', 'Docker']
  },
  {
    id: '5',
    title: 'Logistics Tracking System',
    price: 1800,
    currency: 'USD',
    clientName: 'Robert Johnson',
    stack: ['Vue', 'Node.js', 'MongoDB', 'Mapbox']
  },
  {
    id: '6',
    title: 'Crypto Trading Bot',
    price: 2500,
    currency: 'USD',
    clientName: 'Christopher Davis',
    stack: ['Rust', 'Binance API', 'TradingView']
  }
]
