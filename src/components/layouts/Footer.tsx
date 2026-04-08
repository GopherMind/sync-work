import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail, MapPin, Zap } from 'lucide-react'

const Footer = () => {
  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'How it Works', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'FAQ', href: '#' }
  ]

  const socials = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ]

  return (
    <footer className="relative bg-[#0d0d0d] border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                syncWork
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting top freelancers with ambitious projects. Real-time collaboration, seamless contracts.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} className="text-orange-400" />
                <span>hello@syncwork.kg</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-orange-400" />
                <span>Bishkek, Kyrgyzstan</span>
              </div>
            </div>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500/30 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5">
          <p className="text-center text-gray-500 text-sm">
            © 2026 Sync Work. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
