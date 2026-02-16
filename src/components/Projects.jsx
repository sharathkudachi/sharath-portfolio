import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    title: 'OCEAN-RISK-VESSEL-MONITORING-SYSTEM (ORVMS)',
    description: 'Real-time vessel tracking system for India\'s 200-NM maritime defense boundary using Streamlit, Folium, and anomaly detection.',
    liveLink: 'https://sharathkudachi.github.io/OCEAN-RISK-VESSEL-MONITORING-SYSTEM-ORVMS-/',
    githubLink: 'https://github.com/sharathkudachi/OCEAN-RISK-VESSEL-MONITORING-SYSTEM-ORVMS-',
    tags: ['Streamlit', 'Folium', 'Python', 'Maritime Tech']
  },
  {
    title: 'AI Healthcare Management Platform',
    description: 'Web-based healthcare management system with AI-based symptom analysis and interactive dashboard.',
    liveLink: 'https://sharathkudachi.github.io/healthcare/',
    githubLink: 'https://github.com/sharathkudachi/healthcare',
    tags: ['AI', 'Healthcare', 'Web Development', 'Dashboard']
  },
  {
    title: 'Argo Base FloatChat AI',
    description: 'AI model for oceanographic dataset analysis with predictive modeling and visualization.',
    githubLink: 'https://github.com/sharathkudachi',
    tags: ['AI', 'Data Analysis', 'Oceanography', 'Visualization']
  }
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section projects" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="View Live"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="View Code"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
