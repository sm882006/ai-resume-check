import { motion } from 'framer-motion'
import { features } from '../../data/constants'
import './Features.css'

export default function Features() {
  return (
    <section id="features">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Powerful Features
      </motion.h2>
      <p className="section-subtitle" data-aos="fade-up">
        Everything you need to create the perfect resume and land your dream job
      </p>

      <div className="features-grid">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="feature-icon">
              <f.icon size={28} />
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}