import { Zap, Shield, Star, Globe, Award, Layers } from 'lucide-react'
import type { advantagesType } from '../../types/advantages.types'

const advantages: advantagesType[] = [
  {
    id: 1,
    icon: Zap,
    label: '01',
    title: 'Fast-Track Hiring',
    description: 'Post a project and get qualified proposals within minutes, not days.',
  },
  {
    id: 2,
    icon: Shield,
    label: '02',
    title: 'Real-time Collaboration',
    description: 'Stay in sync with built-in instant messaging and file sharing tools.',
  },
  {
    id: 3,
    icon: Star,
    label: '03',
    title: 'Secure Milestone Payments',
    description: 'Your funds are protected. Release payment only when the work is done.',
  },
  {
    id: 4,
    icon: Globe,
    label: '04',
    title: 'Verified Talent Pool',
    description: 'Work with top-tier professionals vetted through our rating and review system.',
  },
  {
    id: 5,
    icon: Award,
    label: '05',
    title: 'Seamless Workflow',
    description: 'Manage tasks, deadlines, and communications all in one centralized dashboard.',
  },
  {
    id: 6,
    icon: Layers,
    label: '06',
    title: 'Flexible Integration',
    description: 'REST API, webhooks, SDKs for 12 platforms. Plug into any stack in hours, not days.',
  },
]

export default advantages