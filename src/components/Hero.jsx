import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Download, Eye } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = 'Computer Science Student | AI & Defence Tech Enthusiast'
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(false)
      }
    }
  }, [text, isTyping])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    // Create a link to the resume file in the public folder
    const link = document.createElement('a')
    link.href = '/sharath-portfolio/Sharath-Resume.pdf'
    link.download = 'Sharath-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="hero">
      {/* Animated Grid Background */}
      <div className="grid-background">
        <div className="grid-lines"></div>
      </div>

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sharath Y Kudachi
          </motion.h1>

          <motion.div
            className="hero-tagline-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="hero-tagline">
              {text}
              <span className="cursor">|</span>
            </p>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            I am a passionate Computer Science student at BMSIT driven by curiosity, 
            innovation, and problem-solving. I enjoy building real-world systems like 
            maritime surveillance platforms and AI-powered applications. Constantly 
            learning, experimenting, and pushing my limits to grow as a software engineer.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <motion.button
              className="btn btn-primary"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye size={20} />
              View Projects
            </motion.button>

            <motion.button
              className="btn btn-secondary"
              onClick={downloadResume}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="floating-element element-1"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="floating-element element-2"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  )
}

export default Hero
