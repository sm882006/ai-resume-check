import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/constants'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h2 className="section-title" data-aos="fade-up">Loved by Job Seekers</h2>
      <p className="section-subtitle" data-aos="fade-up">Join thousands who landed their dream jobs</p>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="testimonial-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="stars">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} fill="#fbbf24" color="#fbbf24" />
              ))}
            </div>
            <p className="quote">"{t.text}"</p>
            <div className="author">
              <div className="avatar">{t.avatar}</div>
              <div>
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}