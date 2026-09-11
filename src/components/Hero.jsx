import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Shield, Cpu, Compass, Code } from 'lucide-react'
import './Hero.css'

const baseUrl = import.meta.env.BASE_URL

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        {/* Left: Hero Introduction & Actions */}
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-dot"></span>
            COMPUTER SCIENCE ENGINEER
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Sharath Y Kudachi
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building intelligent software, data-driven systems, and autonomous technologies for real-world problems.
          </motion.p>

          <motion.p
            className="hero-bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Computer Science student at BMSIT specializing in AI/ML software engineering, RAG-backed ocean data platforms, real-time spatial surveillance, and fault-tolerant embedded UAV recovery systems.
          </motion.p>

          <motion.div
            className="hero-pillars"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="pillar-tag"><Cpu size={14} /> AI / ML</span>
            <span className="pillar-tag"><Code size={14} /> Full Stack</span>
            <span className="pillar-tag"><Compass size={14} /> Autonomous Systems</span>
            <span className="pillar-tag"><Shield size={14} /> Defence Technology</span>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button className="btn btn-primary" onClick={scrollToProjects}>
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </button>

            <a
              href={`${baseUrl}Sharath-Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              download="Sharath-Resume.pdf"
              className="btn btn-secondary"
            >
              <Download size={18} />
              <span>View Resume</span>
            </a>

            <div className="hero-social-buttons">
              <a
                href="https://github.com/sharathkudachi"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-icon-btn"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sharath-y-kudachi-37438b314/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Small, Polished Circular Portrait */}
        <motion.div
          className="hero-avatar-wrapper"
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-avatar-halo" />
          <div className="hero-avatar-ring">
            <img
              src={`${baseUrl}picture.png`}
              alt="Sharath Y Kudachi — Computer Science Engineer"
              className="hero-avatar-img"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
