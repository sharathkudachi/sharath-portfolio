import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Info, X, Layers, CheckCircle2, Cpu, Shield, Globe, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import './Projects.css'

const baseUrl = import.meta.env.BASE_URL

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject])

  const openModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <p className="section-label">ENGINEERING CASE STUDIES</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            Production software platforms, autonomous systems simulations, and defence data architectures. Each project highlights real-world problem statements, verified engineering decisions, and live operational deployments.
          </p>
        </div>

        {/* Alternating Case Studies Stream */}
        <div className="case-studies-stream">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0 // Even index: text left, odd index: text right (image left)
            const isFirst = index === 0

            return (
              <motion.article
                key={project.id}
                className={`case-study-item ${isReversed ? 'case-study-reversed' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: 0.05 }}
              >
                {/* Project Info Column */}
                <div className="case-study-info">
                  <div className="case-study-meta-top">
                    <span className="case-study-num">{project.number}</span>
                    <span className="case-study-category">{project.category}</span>
                  </div>

                  <h3 className="case-study-title">{project.title}</h3>

                  <p className="case-study-desc">{project.description}</p>

                  {/* Key Capabilities */}
                  <div className="case-study-capabilities">
                    <h4 className="capabilities-label">Key Implementation Capabilities</h4>
                    <ul className="capabilities-list">
                      {project.capabilities.map((cap, i) => (
                        <li key={i} className="capability-item">
                          <CheckCircle2 size={16} className="cap-check-icon" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="case-study-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag tag-tech">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="case-study-actions">
                    {project.hasLiveDemo ? (
                      <>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm btn-live-cta"
                          aria-label={`Launch live demo of ${project.title}`}
                        >
                          <Globe size={16} />
                          <span>Live Demo</span>
                          <ArrowUpRight size={15} className="btn-arrow-icon" />
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                          aria-label={`View ${project.title} repository on GitHub`}
                        >
                          <Github size={16} />
                          <span>GitHub</span>
                        </a>
                      </>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                        aria-label={`View ${project.title} repository on GitHub`}
                      >
                        <Github size={16} />
                        <span>GitHub Repository</span>
                        <ArrowUpRight size={15} className="btn-arrow-icon" />
                      </a>
                    )}

                    <button
                      className="btn btn-outline btn-sm btn-view-details"
                      onClick={() => openModal(project)}
                      aria-label={`View technical architecture details for ${project.title}`}
                    >
                      <Info size={16} />
                      <span>Technical Architecture</span>
                    </button>
                  </div>
                </div>

                {/* Project Screenshot / Visual Frame Column */}
                <div className="case-study-visual">
                  <div className="browser-mockup-frame">
                    {/* Browser Window Chrome */}
                    <div className="mockup-header">
                      <div className="mockup-dots">
                        <span className="dot dot-red"></span>
                        <span className="dot dot-yellow"></span>
                        <span className="dot dot-green"></span>
                      </div>
                      <div className="mockup-url-bar">
                        {project.hasLiveDemo ? (
                          <span className="mockup-url-text">
                            {project.liveUrl.replace('https://', '')}
                          </span>
                        ) : (
                          <span className="mockup-url-text simulation-url-badge">
                            {project.imageLabel || 'uav-simulation://gazebo.ros'}
                          </span>
                        )}
                      </div>
                      {project.hasLiveDemo ? (
                        <span className="mockup-live-indicator">
                          <span className="live-dot-pulse"></span> LIVE
                        </span>
                      ) : (
                        <span className="mockup-sim-indicator">
                          SIMULATION
                        </span>
                      )}
                    </div>

                    {/* Screenshot Container */}
                    <div className="mockup-screen">
                      <img
                        src={`${baseUrl}${project.image}`}
                        alt={project.imageAlt}
                        loading={isFirst ? 'eager' : 'lazy'}
                        className="case-study-img"
                      />
                      {project.imageLabel && (
                        <div className="image-technical-badge">
                          <Cpu size={14} />
                          <span>{project.imageLabel}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* Project Detail Technical Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-container"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <span className="modal-number">CASE STUDY {selectedProject.number}</span>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <span className="modal-category">{selectedProject.category}</span>
                </div>
                <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
                  <X size={24} />
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h4><Info size={18} /> System Overview</h4>
                  <p>{selectedProject.overview}</p>
                </div>

                <div className="modal-two-col">
                  <div className="modal-section">
                    <h4><Shield size={18} /> Problem Statement</h4>
                    <p>{selectedProject.problem}</p>
                  </div>
                  <div className="modal-section">
                    <h4><CheckCircle2 size={18} /> Solution &amp; Engineering Approach</h4>
                    <p>{selectedProject.solution}</p>
                  </div>
                </div>

                <div className="modal-section">
                  <h4><Cpu size={18} /> Key Technical Features</h4>
                  <ul className="modal-features-list">
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-two-col">
                  <div className="modal-section">
                    <h4><Layers size={18} /> System Architecture</h4>
                    <p className="code-font">{selectedProject.architecture}</p>
                  </div>
                  <div className="modal-section">
                    <h4>Engineering Considerations</h4>
                    <p>{selectedProject.engineeringConsiderations}</p>
                  </div>
                </div>

                <div className="modal-section">
                  <h4>Verified Technology Stack</h4>
                  <div className="modal-tags">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="tag tag-accent">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                {selectedProject.hasLiveDemo && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-live-demo"
                    aria-label={`Launch live demo of ${selectedProject.title}`}
                  >
                    <Globe size={18} />
                    <span>Launch Live Demo ↗</span>
                  </a>
                )}

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  aria-label={`View ${selectedProject.title} on GitHub`}
                >
                  <Github size={18} />
                  <span>View Repository ↗</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
