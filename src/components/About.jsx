import { motion } from 'framer-motion'
import { Cpu, Shield, Compass, Code, Award, Users, BookOpen } from 'lucide-react'
import './About.css'

const technicalFocuses = [
  {
    icon: Cpu,
    title: 'AI & Data Intelligence',
    description: 'Developing RAG engines, vector search pipelines, and multi-provider LLM integrations for domain-specific telemetry analysis.'
  },
  {
    icon: Shield,
    title: 'Maritime & Defence Tech',
    description: 'Building real-time vessel monitoring (ORVMS), EEZ intrusion detection, CPA/TCPA collision risk metrics, and tactical intelligence systems.'
  },
  {
    icon: Compass,
    title: 'Autonomous UAV Systems',
    description: 'Investigating fault detection, trajectory optimization in GPS-denied environments, and hardware-decoupled emergency parachute recovery.'
  },
  {
    icon: Code,
    title: 'Full Stack Engineering',
    description: 'Architecting modular web applications using Python (FastAPI), React, Express, Node.js, and spatial web rendering (Leaflet, Three.js).'
  }
]

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-label">BACKGROUND &amp; PHILOSOPHY</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Computer Science Engineer focused on building software that solves complex real-world challenges in ocean data, defence intelligence, and emergency autonomy.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Narrative Column */}
          <div className="about-narrative">
            <p className="about-paragraph">
              I am a Computer Science and Engineering student at <span className="highlight-text">BMS Institute of Technology and Management (BMSIT)</span>, Bengaluru. My engineering philosophy revolves around building robust, mathematically grounded, and production-ready applications rather than superficial prototypes.
            </p>

            <p className="about-paragraph">
              My technical journey spans across <span className="highlight-text">Artificial Intelligence</span>, <span className="highlight-text">Full Stack Architecture</span>, <span className="highlight-text">Geospatial Analytics</span>, and <span className="highlight-text">Autonomous Hardware-Software Systems</span>. Whether engineering an oceanographic RAG platform (Argo FloatChat) analyzing global float casts, or developing real-time AIS vessel telemetry risk calculators, I focus on system reliability, clean abstraction, and high signal-to-noise user experiences.
            </p>

            <div className="leadership-box">
              <div className="leadership-header">
                <Users size={20} className="leadership-icon" />
                <div>
                  <h4 className="leadership-title">Founder &amp; Vice President — Astra Club</h4>
                  <span className="leadership-org">BMS Institute of Technology &amp; Management</span>
                </div>
              </div>
              <p className="leadership-text">
                Founded and actively lead Astra Club at BMSIT, fostering a collaborative technical ecosystem where students design, build, and deploy real-world software, hackathon entries, and research prototypes.
              </p>
            </div>
          </div>

          {/* Quick Technical Highlights Sidebar */}
          <div className="about-stats-column">
            <div className="stat-card">
              <div className="stat-icon"><BookOpen size={22} /></div>
              <div className="stat-info">
                <span className="stat-title">Institution</span>
                <span className="stat-value">BMSIT &amp; M, Bengaluru</span>
                <span className="stat-sub">B.E. Computer Science (2023–2027)</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon"><Award size={22} /></div>
              <div className="stat-info">
                <span className="stat-title">Core Focus</span>
                <span className="stat-value">Autonomous Systems &amp; AI</span>
                <span className="stat-sub">VIO, Sensor Fusion &amp; RAG Systems</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon"><Shield size={22} /></div>
              <div className="stat-info">
                <span className="stat-title">Domain Expertise</span>
                <span className="stat-value">Defence &amp; Maritime</span>
                <span className="stat-sub">AIS Telemetry &amp; Geo-Surveillance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Focus Cards */}
        <div className="focus-cards-grid">
          {technicalFocuses.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                className="focus-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="focus-icon">
                  <Icon size={24} />
                </div>
                <h3 className="focus-title">{item.title}</h3>
                <p className="focus-description">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
