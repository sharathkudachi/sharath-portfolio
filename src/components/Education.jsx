import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award } from 'lucide-react'
import './Education.css'

const educationData = [
  {
    degree: 'Bachelor of Engineering – Computer Science',
    institution: 'BMS Institute of Technology and Management',
    duration: '2023 – 2027',
    score: 'CGPA: 9',
    icon: GraduationCap
  },
  {
    degree: '12th Grade',
    institution: 'Sri Maruthi PU College',
    duration: '2021 – 2023',
    score: 'Percentage: 94.6%',
    icon: Award
  },
  {
    degree: '10th Grade',
    institution: 'Anugraha High School',
    duration: '2021',
    score: 'Percentage: 79.3%',
    icon: Award
  }
]

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section education" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="timeline">
          {educationData.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="timeline-icon">
                  <Icon size={24} />
                </div>
                <motion.div
                  className="timeline-content"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)'
                  }}
                >
                  <h3 className="timeline-degree">{item.degree}</h3>
                  <p className="timeline-institution">{item.institution}</p>
                  <div className="timeline-details">
                    <span className="timeline-duration">{item.duration}</span>
                    <span className="timeline-score">{item.score}</span>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
