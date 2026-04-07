import type { Order } from '../types/orderTypes'

export const ordersData: Order[] = [
  {
    id: '1',
    title: 'E-commerce Dashboard with Analytics',
    price: 45000,
    currency: 'KGS',
    clientName: 'Aibek Toktomushev',
    stack: ['React', 'TypeScript', 'Tailwind', 'Supabase']
  },
  {
    id: '2',
    title: 'Real-time Chat Application',
    price: 850,
    currency: 'USD',
    clientName: 'Nurlan Asanov',
    stack: ['Go', 'WebSocket', 'PostgreSQL', 'Redis']
  },
  {
    id: '3',
    title: 'Mobile Banking App UI/UX',
    price: 65000,
    currency: 'KGS',
    clientName: 'Dinara Sultanova',
    stack: ['Figma', 'React Native', 'Framer']
  },
  {
    id: '4',
    title: 'AI-Powered Content Generator',
    price: 1200,
    currency: 'USD',
    clientName: 'Timur Bekmurzaev',
    stack: ['Python', 'FastAPI', 'OpenAI', 'Docker']
  },
  {
    id: '5',
    title: 'Logistics Tracking System',
    price: 95000,
    currency: 'KGS',
    clientName: 'Azamat Kadyrov',
    stack: ['Vue', 'Node.js', 'MongoDB', 'Mapbox']
  },
  {
    id: '6',
    title: 'Crypto Trading Bot',
    price: 2500,
    currency: 'USD',
    clientName: 'Eldar Osmonov',
    stack: ['Rust', 'Binance API', 'TradingView']
  }
]
