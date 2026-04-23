import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '../../data/constants'
import './FAQ.css'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq">
      <h2 className="section-title" data-aos="fade-up">Frequently Asked Questions</h2>
      <p className="section-subtitle" data-aos="fade-up">Got questions? We've got answers</p>

      <div className="faq-container">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{f.q}</span>
              {open === i ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="faq-a"
                >
                  <p>{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}