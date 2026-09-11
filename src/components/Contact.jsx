import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-card-wrapper">
          <div className="contact-header">
            <p className="section-label dark-label">GET IN TOUCH</p>
            <h2 className="contact-title">Have a technical problem worth solving?</h2>
            <p className="contact-subtitle">
              Whether you're interested in collaborative AI research, defence technology, autonomous systems, or full-stack software development, feel free to reach out.
            </p>
          </div>

          <div className="contact-methods-grid">
            <a href="mailto:sharathkudachi30@gmail.com" className="contact-method-card">
              <div className="method-icon">
                <Mail size={22} />
              </div>
              <div className="method-info">
                <span className="method-label">Direct Email</span>
                <span className="method-value">sharathkudachi30@gmail.com</span>
              </div>
              <ArrowUpRight size={18} className="arrow-icon" />
            </a>

            <a href="https://github.com/sharathkudachi" target="_blank" rel="noopener noreferrer" className="contact-method-card">
              <div className="method-icon">
                <Github size={22} />
              </div>
              <div className="method-info">
                <span className="method-label">GitHub Repositories</span>
                <span className="method-value">github.com/sharathkudachi</span>
              </div>
              <ArrowUpRight size={18} className="arrow-icon" />
            </a>

            <a href="https://www.linkedin.com/in/sharath-y-kudachi-37438b314/" target="_blank" rel="noopener noreferrer" className="contact-method-card">
              <div className="method-icon">
                <Linkedin size={22} />
              </div>
              <div className="method-info">
                <span className="method-label">LinkedIn Profile</span>
                <span className="method-value">Sharath Y Kudachi</span>
              </div>
              <ArrowUpRight size={18} className="arrow-icon" />
            </a>

            <div className="contact-method-card no-hover">
              <div className="method-icon">
                <MapPin size={22} />
              </div>
              <div className="method-info">
                <span className="method-label">Location</span>
                <span className="method-value">Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Footer */}
        <footer className="footer-bar">
          <div className="footer-brand">
            <span className="footer-initials">SK</span>
            <span>Sharath Y Kudachi</span>
          </div>

          <p className="footer-copyright">
            © {currentYear} Sharath Y Kudachi. Built with React &amp; Framer Motion.
          </p>

          <div className="footer-links">
            <a href="https://github.com/sharathkudachi" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/sharath-y-kudachi-37438b314/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:sharathkudachi30@gmail.com">Email</a>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Contact
