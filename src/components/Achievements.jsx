import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Award, Star } from 'lucide-react'
import './Achievements.css'

const achievements = [
  {
    icon: Trophy,
    title: '2nd Prize – CSE Hackathon, BMSIT',
    description: 'InCSEption 8-Hour Internal Hackathon',
    color: '#00d4ff'
  },
  {
  icon: Star,
  title: 'Founder & Vice President – Astra Club, BMSIT',
  description: 'Founded and leading Astra Club at BMSIT, driving innovation, technical initiatives, and collaborative student development activities.',
  color: '#00ffff'
},
  {
    icon: Award,
    title: 'Active Coding Participant',
    description: 'Regular participant in coding contests & hackathons',
    color: '#00d4ff'
  }
]

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section achievements" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 15px 40px ${achievement.color}40`
                }}
              >
                <div className="achievement-icon" style={{ color: achievement.color }}>
                  <Icon size={48} />
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                <div 
                  className="achievement-glow" 
                  style={{ background: `radial-gradient(circle, ${achievement.color}40, transparent 70%)` }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements
