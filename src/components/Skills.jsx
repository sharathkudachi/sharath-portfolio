import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Skills.css'

const skillCategories = [
  {
    title: 'Core Languages',
    skills: ['Python', 'Java', 'C', 'C++', 'JavaScript']
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'React']
  },
  {
    title: 'Database',
    skills: ['SQLite']
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Streamlit', 'OpenAI API', 'Swing', 'Folium']
  },
  {
    title: 'Areas of Interest',
    skills: [
      'Artificial Intelligence',
      'Machine Learning',
      'Defence Technology',
      'Autonomous Systems',
      'Software Engineering',
      'Algorithms & Data Structures',
      'Maritime & Surveillance Systems'
    ]
  }
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4 
                    }}
                    whileHover={{ 
                      scale: 1.08,
                      boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
                      borderColor: 'var(--neon-blue)'
                    }}
                  >
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
