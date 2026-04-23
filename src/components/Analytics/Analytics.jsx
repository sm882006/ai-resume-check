import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Clock } from 'lucide-react'
import './Analytics.css'

const stats = [
  { icon: Users, val: '500K+', label: 'Active Users' },
  { icon: TrendingUp, val: '95%', label: 'Success Rate' },
  { icon: Award, val: '4.9/5', label: 'User Rating' },
  { icon: Clock, val: '10s', label: 'Average Analysis' }
]

export default function Analytics() {
  return (
    <section className="analytics">
      <div className="analytics-grid">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="stat-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <s.icon className="stat-icon" />
            <h3>{s.val}</h3>
            <p>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}