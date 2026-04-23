import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <motion.div
        className="cta-box"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2>Ready to Land Your Dream Job?</h2>
        <p>Join 500,000+ professionals who've transformed their careers with Mock AI</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary-lg"
        >
          Start Free Analysis <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </section>
  )
}