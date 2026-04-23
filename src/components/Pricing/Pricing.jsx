import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { pricing } from '../../data/constants'
import './Pricing.css'

export default function Pricing() {
  return (
    <section id="pricing">
      <h2 className="section-title" data-aos="fade-up">Simple Pricing</h2>
      <p className="section-subtitle" data-aos="fade-up">Choose the perfect plan for your career goals</p>

      <div className="pricing-grid">
        {pricing.map((p, i) => (
          <motion.div
            key={i}
            className={`pricing-card ${p.popular ? 'popular' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            {p.popular && <div className="popular-badge">Most Popular</div>}
            <h3>{p.name}</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">{p.price}</span>
              <span className="period">/mo</span>
            </div>
            <ul>
              {p.features.map((f, j) => (
                <li key={j}><Check size={16} /> {f}</li>
              ))}
            </ul>
            <button className={p.popular ? 'btn-primary-lg' : 'btn-outline'}>
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}