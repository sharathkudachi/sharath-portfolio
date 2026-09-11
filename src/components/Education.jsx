import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'
import './Education.css'

const educationHistory = [
  {
    degree: 'Bachelor of Engineering — Computer Science and Engineering',
    institution: 'BMS Institute of Technology and Management',
    location: 'Bengaluru, Karnataka',
    duration: '2023 — 2027',
    score: '9.03 CGPA',
    highlight: 'Active Student Leader (Founder & VP, ASTRA Club) & Autonomous Systems Research Contributor',
    icon: GraduationCap
  },
  {
    degree: 'Class XII (Computer Science)',
    institution: 'Sri Maruthi PU College',
    location: 'Karnataka',
    duration: '2022 — 2023',
    score: 'Percentage: 94.6%',
    highlight: 'Academic distinction in PCMC (Physics, Chemistry, Mathematics & Computer Science)',
    icon: Award
  },
  {
    degree: 'Class X (SSLC)',
    institution: 'Anugraha High School',
    location: 'Karnataka',
    duration: '2020 — 2021',
    score: 'Percentage: 79.3%',
    highlight: 'Foundational secondary school education',
    icon: Award
  }
]

const Education = () => {
  return (
    <section className="section education" id="education">
      <div className="container">
        <div className="section-header">
          <p className="section-label">ACADEMIC FOUNDATION</p>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            Formal Computer Science &amp; Engineering degree education and academic record.
          </p>
        </div>

        <div className="education-timeline">
          {educationHistory.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                className="timeline-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-badge">
                  <Icon size={22} />
                </div>

                <div className="timeline-content">
                  <div className="timeline-header-row">
                    <div>
                      <h3 className="degree-title">{item.degree}</h3>
                      <h4 className="institution-name">{item.institution} <span className="loc-tag">• {item.location}</span></h4>
                    </div>

                    <div className="score-badge">
                      <span>{item.score}</span>
                    </div>
                  </div>

                  <p className="timeline-highlight">{item.highlight}</p>

                  <div className="timeline-meta">
                    <span className="duration-tag"><Calendar size={14} /> {item.duration}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
