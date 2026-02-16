import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Code2 } from 'lucide-react'
import './Contact.css'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sharathkudachi30@gmail.com',
    link: 'mailto:sharathkudachi30@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6362679843',
    link: 'tel:+916362679843'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, Karnataka',
    link: null
  }
]

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    link: 'https://github.com/sharathkudachi/',
    color: '#00d4ff'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sharath-y-kudachi-37438b314/',
    color: '#00ffff'
  },
  {
    icon: Code2,
    label: 'LeetCode',
    link: 'https://leetcode.com/u/tnj6dL8PVP/',
    color: '#00d4ff'
  }
]

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section contact" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="contact-intro"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <div className="contact-content">
          <div className="contact-info-grid">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  className="contact-info-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)' }}
                >
                  <div className="contact-icon">
                    <Icon size={28} />
                  </div>
                  <div className="contact-details">
                    <p className="contact-label">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="contact-value">
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact-value">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="social-links-container"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h3 className="social-title">Social Links</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 30px ${social.color}60`
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ borderColor: social.color }}
                  >
                    <Icon size={28} style={{ color: social.color }} />
                    <span>{social.label}</span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p>© 2025 Sharath Y Kudachi. Built with React & Framer Motion.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
