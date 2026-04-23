import { Brain, FileSearch, Target, Zap, BarChart3, Shield } from 'lucide-react'

export const features = [
  { icon: Brain, title: 'AI-Powered Analysis', desc: 'Advanced GPT models analyze your resume in seconds for maximum impact.' },
  { icon: FileSearch, title: 'ATS Optimization', desc: 'Beat applicant tracking systems with keyword-rich, formatted resumes.' },
  { icon: Target, title: 'Job Match Score', desc: 'Get precise matching scores for any job description instantly.' },
  { icon: Zap, title: 'Instant Feedback', desc: 'Real-time suggestions to improve your resume as you edit.' },
  { icon: BarChart3, title: 'Detailed Analytics', desc: 'Comprehensive reports on strengths, weaknesses & improvements.' },
  { icon: Shield, title: 'Privacy First', desc: 'Your data stays encrypted and private. Never shared with third parties.' }
]

export const steps = [
  { num: '01', title: 'Upload Resume', desc: 'Drop your resume in PDF, DOCX, or TXT format.' },
  { num: '02', title: 'AI Analyzes', desc: 'Our AI scans every detail in under 10 seconds.' },
  { num: '03', title: 'Get Insights', desc: 'Receive actionable feedback with scoring.' },
  { num: '04', title: 'Land Your Job', desc: 'Apply with confidence and get hired faster.' }
]

export const pricing = [
  { name: 'Free', price: '0', features: ['3 Resume Scans', 'Basic ATS Check', 'Email Support'], popular: false },
  { name: 'Pro', price: '19', features: ['Unlimited Scans', 'Advanced AI Analysis', 'Job Match Score', 'Priority Support', 'Cover Letter Gen'], popular: true },
  { name: 'Enterprise', price: '49', features: ['Everything in Pro', 'Team Management', 'API Access', 'Custom Integration', 'Dedicated Manager'], popular: false }
]

export const testimonials = [
  { name: 'Sarah Chen', role: 'Software Engineer @Google', text: 'Mock AI helped me land my dream job at Google. The ATS insights were game-changing!', avatar: 'SC' },
  { name: 'James Wilson', role: 'Product Manager @Meta', text: 'I got 5x more interview calls after optimizing with Mock AI. Absolutely brilliant tool.', avatar: 'JW' },
  { name: 'Priya Sharma', role: 'Data Scientist @Amazon', text: 'The AI suggestions were spot-on. Worth every penny of the Pro plan!', avatar: 'PS' }
]

export const faqs = [
  { q: 'How accurate is the AI analysis?', a: 'Our AI achieves 95%+ accuracy using GPT-4 trained on millions of successful resumes.' },
  { q: 'Is my data safe?', a: 'Yes! We use bank-grade encryption and never share your data with third parties.' },
  { q: 'Can I cancel anytime?', a: 'Absolutely. You can cancel or upgrade your subscription anytime from your dashboard.' },
  { q: 'What file formats are supported?', a: 'We support PDF, DOCX, DOC, and TXT formats for uploading resumes.' }
]