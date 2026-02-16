import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Shield, Rocket, Code2 } from 'lucide-react'
import './About.css'

const interests = [
  { icon: Cpu, title: 'Artificial Intelligence', color: '#00d4ff' },
  { icon: Shield, title: 'Defence Technology', color: '#00ffff' },
  { icon: Rocket, title: 'Autonomous Systems', color: '#00d4ff' },
  { icon: Code2, title: 'Software Engineering', color: '#00ffff' },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>

<motion.p
  className="about-text"
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : {}}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  I'm a Computer Science student at <span className="highlight">BMS Institute of Technology and Management (BMSIT)</span>, 
  driven by a strong passion for building intelligent and impactful software systems. My core interests lie in 
  <span className="highlight"> Artificial Intelligence</span>, <span className="highlight">Defence Technology</span>, 
  and <span className="highlight">Autonomous Systems</span>, where I aim to design solutions that solve meaningful real-world problems.
</motion.p>

<motion.p
  className="about-text"
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : {}}
  transition={{ delay: 0.4, duration: 0.6 }}
>
  I enjoy transforming ideas into scalable applications — from maritime surveillance platforms 
  and anomaly detection systems to AI-powered healthcare solutions. My approach combines 
  structured problem-solving, clean and maintainable code practices, and continuous learning 
  to stay aligned with evolving technologies.
</motion.p>

<motion.p
  className="about-text"
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : {}}
  transition={{ delay: 0.6, duration: 0.6 }}
>
  Beyond academics, I serve as the <span className="highlight">Founder & Vice President of Astra Club</span> 
  at BMSIT, where I lead innovation-driven initiatives and collaborative technical projects. 
  I strongly believe in combining leadership, teamwork, and technical excellence to create 
  solutions that make a lasting impact.
</motion.p>


          <div className="interests-grid">
            {interests.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="interest-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 0 30px ${item.color}40`
                  }}
                >
                  <div className="interest-icon" style={{ color: item.color }}>
                    <Icon size={32} />
                  </div>
                  <h3 className="interest-title">{item.title}</h3>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
