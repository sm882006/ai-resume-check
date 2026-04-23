import { motion } from 'framer-motion'
import { ArrowRight, Upload, CheckCircle2, Sparkles } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* <motion.div
        className="hero-badge"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Sparkles size={16} /> Powered by GPT-4 AI
      </motion.div> */}

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Your Resume, <br />
        <span className="gradient-text">Analyzed by AI</span>
      </motion.h1>

      <motion.p
        className="hero-desc"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Get instant AI-powered feedback on your resume. Beat ATS systems, improve your score, and land your dream job 5x faster.
      </motion.p>

      <motion.div
        className="hero-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button whileHover={{ scale: 1.05 }} className="btn-primary-lg">
          Analyze Resume Free <ArrowRight size={18} />
        </motion.button>
        <button className="btn-outline">Watch Demo</button>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="floating-card card-1">
          <Upload size={24} />
          <div>
            <h4>Resume.pdf</h4>
            <p>Analyzing...</p>
          </div>
        </div>

        <div className="hero-dashboard">
          <div className="dashboard-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="dashboard-content">
            <div className="score-circle">
              <motion.div
                className="score-value"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: 'spring' }}
              >
                92
              </motion.div>
              <p>ATS Score</p>
            </div>
            <div className="score-bars">
              {[
                { label: 'Keywords', val: 95 },
                { label: 'Format', val: 88 },
                { label: 'Skills', val: 91 }
              ].map((b, i) => (
                <div key={b.label} className="bar-item">
                  <div className="bar-label">
                    <span>{b.label}</span><span>{b.val}%</span>
                  </div>
                  <div className="bar-track">
                    <motion.div
                      className="bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${b.val}%` }}
                      transition={{ delay: 1.2 + i * 0.2, duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="floating-card card-2">
          <CheckCircle2 size={24} color="#10b981" />
          <div>
            <h4>AI Approved</h4>
            <p>Ready to Apply</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}