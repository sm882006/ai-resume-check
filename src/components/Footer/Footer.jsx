import { Sparkles, Twitter, Linkedin, Github } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <Sparkles /> Mock AI
          </div>
          <p>AI-powered resume analysis to help you land your dream job faster.</p>
          <div className="socials">
            <Twitter /> <Linkedin /> <Github />
          </div>
        </div>

        <div>
          <h4>Product</h4>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">API</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>

        <div>
          <h4>Legal</h4>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Mock AI. All rights reserved.</p>
      </div>
    </footer>
  )
}