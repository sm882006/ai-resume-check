import { motion } from 'framer-motion'
import { steps } from '../../data/constants'
import './HowItWorks.css'

export default function HowItWorks() {
  return (
    <section id="howitworks">
      <h2 className="section-title" data-aos="fade-up">How It Works</h2>
      <p className="section-subtitle" data-aos="fade-up">Get your resume optimized in 4 simple steps</p>

      <div className="steps-container">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="step-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="step-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            {i < steps.length - 1 && <div className="step-line"></div>}
          </motion.div>
        ))}
      </div>
    </section>
  )
}