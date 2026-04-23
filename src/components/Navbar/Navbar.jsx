import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Menu, X } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        <motion.div className="logo" whileHover={{ scale: 1.05 }}>
          <Sparkles className="logo-icon" />
          <span>Mock AI</span>
        </motion.div>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {['Features', 'How it Works', 'Pricing', 'FAQ'].map((item, i) => (
            <motion.li key={item} whileHover={{ y: -2 }}>
              <a href={`#${item.toLowerCase().replace(/\s/g, '')}`}>{item}</a>
            </motion.li>
          ))}
        </ul>

        <div className="nav-buttons">
          <button className="btn-ghost">Sign In</button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Get Started
          </motion.button>
        </div>

        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </motion.nav>
  )
}