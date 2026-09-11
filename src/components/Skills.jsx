import { motion } from 'framer-motion'
import { Code2, Layout, Brain, Database, Wrench, Compass } from 'lucide-react'
import './Skills.css'

const skillGroups = [
  {
    category: 'Programming Languages',
    icon: Code2,
    skills: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL']
  },
  {
    category: 'Web Technologies',
    icon: Layout,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'REST APIs', 'Leaflet.js', 'Three.js']
  },
  {
    category: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'Vector Databases', 'PostGIS']
  },
  {
    category: 'AI & Data Engineering',
    icon: Brain,
    skills: ['Machine Learning', 'Predictive Modeling', 'Anomaly Detection', 'NLP', 'RAG', 'Data Processing', 'Data Visualization', 'Feature Engineering']
  },
  {
    category: 'Autonomous Systems & Robotics',
    icon: Compass,
    skills: ['Autonomous Navigation', 'Path Planning (A*, RRT, RRT*, PSO, APF)', 'Sensor Fusion', 'Visual-Inertial Odometry (VIO)', 'Flight Control']
  },
  {
    category: 'Tools & Technologies',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Streamlit', 'Folium', 'ROS', 'PX4', 'Gazebo', 'MATLAB', 'OpenCV', 'SolidWorks', 'Pandas', 'NumPy', 'Xarray', 'NetCDF4']
  }
]

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-label">TECHNICAL COMPETENCIES</p>
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <p className="section-description">
            Technical skills directly derived from academic coursework, engineering projects, research, and production implementations.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.category}
                className="skill-category-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    <Icon size={20} />
                  </div>
                  <h3 className="category-title">{group.category}</h3>
                </div>

                <div className="skills-pill-list">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
