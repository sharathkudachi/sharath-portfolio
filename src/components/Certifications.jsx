import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import './Certifications.css'

const certifications = [
  {
    id: 2,
    title: 'InCSEption 8-Hour Internal Hackathon – 2nd Place',
    issuer: 'BMSIT CSE Department',
    date: '2024',
    icon: '🏆',
    description: 'Secured 2nd Position in the InCSEption Internal Hackathon. Developed an innovative maritime situational awareness system.',
    team: 'Team: Mavericks',
    // Multiple images for this certificate
    images: [
      '/sharath-portfolio/certificates/hackathon-cert.jpg',
      '/sharath-portfolio/certificates/hackathon-event-1.jpg',
      '/sharath-portfolio/certificates/hackathon-event-2.jpg'
    ],
    imageLabels: ['Main Certificate', 'Event Photo 1', 'Event Photo 2'],
    fullDescription: 'Secured 2nd Position in the InCSEption 8-Hour Internal Hackathon organized by the CSE Department at BMSIT. Led a team called "Mavericks" to develop an innovative maritime situational awareness system under intense time pressure. The project demonstrated expertise in system design, real-time data processing, and collaborative problem-solving in a competitive environment.',
    topics: ['Hackathon', 'Innovation', 'Systems Design']
  },
  {
    id: 1,
    title: 'PCAP: Programming Essentials in Python',
    issuer: 'Cisco Networking Academy (OpenEDG)',
    date: '28 June 2024',
    icon: '🐍',
    description: 'Comprehensive certification in Python programming fundamentals and advanced concepts.',
    images: ['/sharath-portfolio/certificates/pcap-cert.jpg'],
    imageLabels: ['Certificate'],
    fullDescription: 'Earned the PCAP: Programming Essentials in Python certification from Cisco Networking Academy & the Python Institute, demonstrating strong proficiency in Python fundamentals, algorithmic thinking, structured programming, and object-oriented design principles. Developed the ability to write optimized, maintainable code applicable to real-world software development.',
    topics: ['Python', 'Programming', 'Fundamentals']
  }
]

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [modalOpen, setModalOpen] = useState(false)
  const [modalCert, setModalCert] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (cert) => {
    setModalCert(cert)
    setCurrentImageIndex(0)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalCert(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (modalCert && modalCert.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % modalCert.images.length)
    }
  }

  const prevImage = () => {
    if (modalCert && modalCert.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + modalCert.images.length) % modalCert.images.length)
    }
  }

  return (
    <section className="section certifications" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">CONTINUOUS LEARNING</p>
          <h2 className="section-title">Certifications</h2>
          <p className="section-description">
            Online courses and certifications completed to strengthen technical skills
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="cert-card-thumbnail"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openModal(cert)}
              whileHover={{ y: -5 }}
            >
              {/* Thumbnail Image */}
              <div className="cert-thumbnail-image-container">
                <img
                  src={cert.images[0]}
                  alt={cert.title}
                  className="cert-thumbnail-image"
                />
                <div className="cert-thumbnail-overlay">
                  <span className="click-to-view">Click to view</span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="cert-thumbnail-content">
                <div className="cert-thumbnail-icon">{cert.icon}</div>
                <h3 className="cert-thumbnail-title">{cert.title}</h3>
                <p className="cert-thumbnail-issuer">{cert.issuer}</p>
                <p className="cert-thumbnail-date">📅 {cert.date}</p>
                
                {cert.team && (
                  <p className="cert-thumbnail-team">{cert.team}</p>
                )}

                {cert.images.length > 1 && (
                  <div className="cert-image-count">
                    📸 {cert.images.length} images
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Preview */}
        <AnimatePresence>
          {modalOpen && modalCert && (
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="modal-content modal-cert-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={closeModal}>
                  <X size={24} />
                </button>

                {/* Modal Content Layout */}
                <div className="cert-modal-wrapper">
                  {/* Left: Certificate Image with Navigation */}
                  <div className="cert-modal-image-section">
                    <div className="cert-modal-image-container">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          src={modalCert.images[currentImageIndex]}
                          alt={modalCert.imageLabels[currentImageIndex]}
                          className="cert-modal-image"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </AnimatePresence>
                    </div>

                    {/* Image Navigation */}
                    {modalCert.images.length > 1 && (
                      <>
                        <div className="cert-modal-image-label">
                          {modalCert.imageLabels[currentImageIndex]} ({currentImageIndex + 1}/{modalCert.images.length})
                        </div>

                        <div className="cert-modal-nav-buttons">
                          <motion.button
                            className="cert-modal-nav-btn cert-modal-nav-prev"
                            onClick={prevImage}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ChevronLeft size={20} />
                          </motion.button>
                          <motion.button
                            className="cert-modal-nav-btn cert-modal-nav-next"
                            onClick={nextImage}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ChevronRight size={20} />
                          </motion.button>
                        </div>

                        {/* Image Thumbnails */}
                        <div className="cert-modal-image-thumbnails">
                          {modalCert.images.map((img, idx) => (
                            <motion.button
                              key={idx}
                              className={`cert-thumbnail-dot ${idx === currentImageIndex ? 'active' : ''}`}
                              onClick={() => setCurrentImageIndex(idx)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              title={modalCert.imageLabels[idx]}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Right: Certificate Details */}
                  <div className="cert-modal-details-section">
                    <h3 className="cert-modal-title">{modalCert.title}</h3>
                    <p className="cert-modal-issuer">{modalCert.issuer}</p>
                    
                    {modalCert.team && (
                      <p className="cert-modal-team">{modalCert.team}</p>
                    )}
                    
                    <p className="cert-modal-date">📅 {modalCert.date}</p>
                    
                    <div className="cert-modal-divider"></div>
                    
                    <p className="cert-modal-description">
                      {modalCert.fullDescription}
                    </p>

                    {modalCert.topics && modalCert.topics.length > 0 && (
                      <div className="cert-modal-topics">
                        <p className="topics-label">KEY SKILLS:</p>
                        <div className="topics-list">
                          {modalCert.topics.map((topic, idx) => (
                            <span key={idx} className="topic-tag">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Certifications