import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Award, 
  Sparkles, 
  Presentation, 
  Briefcase, 
  Cpu, 
  Bot, 
  BrainCircuit, 
  CheckCircle2, 
  X, 
  Eye, 
  ShieldCheck, 
  Calendar, 
  Building2 
} from 'lucide-react'
import './Certifications.css'

const baseUrl = import.meta.env.BASE_URL

const certificationsData = [
  {
    id: 'oracle-ai-foundations',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle University',
    date: 'October 27, 2025',
    category: 'Professional Certification',
    categoryColor: 'blue',
    icon: Award,
    description: 'Oracle certification covering foundational concepts in artificial intelligence and AI capabilities within Oracle Cloud Infrastructure.',
    image: `${baseUrl}certificates/oracle.png`,
    imageAlt: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate certificate',
    tags: ['AI Foundations', 'Oracle Cloud'],
    credentialType: 'Professional Certification',
    verificationNote: 'Official certification issued by Oracle University (Certified AI Foundations Associate).'
  },
  {
    id: 'pcap-python',
    title: 'PCAP: Programming Essentials in Python',
    issuer: 'Cisco Networking Academy & OpenEDG Python Institute',
    date: 'June 28, 2024',
    category: 'Professional Certification',
    categoryColor: 'blue',
    icon: Award,
    description: 'Technical certification covering Python programming fundamentals, structured programming, data processing concepts and object-oriented programming principles.',
    image: `${baseUrl}certificates/pcap-cert.jpg`,
    imageAlt: 'PCAP: Programming Essentials in Python certificate issued by Cisco Networking Academy and OpenEDG Python Institute',
    tags: ['Python', 'Programming', 'Software Engineering'],
    credentialType: 'Professional Certification',
    verificationNote: 'Verified credential issued by Cisco Networking Academy in collaboration with OpenEDG Python Institute.'
  },
  {
    id: 'nptel-robotics',
    title: 'Robotics: Basics and Selected Advanced Concepts',
    issuer: 'NPTEL (IISc Bangalore)',
    date: 'Jan-Apr 2026',
    category: 'NPTEL Certification',
    categoryColor: 'amber',
    icon: Bot,
    description: 'Elite NPTEL certification by IISc Bangalore covering robotics kinematics, dynamic modeling, sensor integration, and advanced autonomous robotic control.',
    image: `${baseUrl}certificates/robotics.png`,
    imageAlt: 'Elite NPTEL Certificate of Completion for Robotics: Basics and Selected Advanced Concepts from IISc Bangalore',
    tags: ['Robotics', 'Autonomous Systems', 'Kinematics & Control'],
    credentialType: 'Elite NPTEL Online Certification',
    verificationNote: 'Official Elite NPTEL Certificate issued by Indian Institute of Science (IISc) Bangalore & Swayam (Roll No: NPTEL26ME01S350201748, Score: 72%).'
  },
  {
    id: 'nptel-llms',
    title: 'Introduction to Large Language Models (LLMs)',
    issuer: 'NPTEL (IIT Madras)',
    date: 'Jan-Apr 2026',
    category: 'NPTEL Certification',
    categoryColor: 'purple',
    icon: BrainCircuit,
    description: 'Elite NPTEL certification by IIT Madras covering foundations of large language models, transformer architectures, prompt engineering, and modern NLP workflows.',
    image: `${baseUrl}certificates/llms.png`,
    imageAlt: 'Elite NPTEL Certificate of Completion for Introduction to Large Language Models from IIT Madras',
    tags: ['Large Language Models', 'NLP', 'Transformer Architect'],
    credentialType: 'Elite NPTEL Online Certification',
    verificationNote: 'Official Elite NPTEL Certificate issued by Indian Institute of Technology (IIT) Madras & Swayam (Roll No: NPTEL26CS88S850201101, Score: 64%).'
  },
  {
    id: 'outskill-genai-mastermind',
    title: 'Generative AI Mastermind',
    issuer: 'Outskill',
    date: '2024',
    category: 'Course Completion',
    categoryColor: 'purple',
    icon: Sparkles,
    description: 'Completed the Generative AI Mastermind program focused on practical concepts and applications across modern generative AI workflows.',
    image: `${baseUrl}certificates/outskill.png`,
    imageAlt: 'Generative AI Mastermind Certificate of Completion from Outskill',
    tags: ['Generative AI', 'AI Workflows', 'Prompt Engineering'],
    credentialType: 'Course / Program Completion',
    verificationNote: 'Certificate of Completion for the Generative AI Mastermind curriculum.'
  },
  {
    id: 'icmota-2026-presentation',
    title: 'Paper Presentation — ICMOTA 2026',
    issuer: 'First International Conference on Mathematical Optimization Theory and Applications (ICMOTA 2026)',
    date: 'March 2026',
    category: 'Conference Presentation',
    categoryColor: 'amber',
    icon: Presentation,
    description: 'Presented research on robust trajectory optimization and autonomous mission execution for a flying-wing UAV operating in GPS-denied environments at ICMOTA 2026.',
    image: `${baseUrl}certificates/icmota.jpeg`,
    imageAlt: 'First International Conference on Mathematical Optimization Theory and Applications (ICMOTA 2026) Certificate of Presentation awarded to Sharath Y Kudachi by IIT BHU Varanasi',
    tags: ['UAV Research', 'Trajectory Optimization', 'Conference Presentation'],
    credentialType: 'Conference Presentation',
    verificationNote: 'Official Certificate of Presentation issued by the Department of Mathematical Sciences, IIT (BHU) Varanasi.'
  },
  {
    id: 'google-cloud-ml-apis',
    title: 'Prepare Data for ML APIs on Google Cloud',
    issuer: 'Google Cloud',
    date: 'Google Cloud Credential',
    category: 'Cloud / AI',
    categoryColor: 'teal',
    icon: Cpu,
    description: 'Completed a Google Cloud skill credential focused on preparing data for machine-learning API workflows and foundational cloud-based AI data processing.',
    image: `${baseUrl}certificates/google-cloud-ml-apis.jpeg`,
    imageAlt: 'Prepare Data for ML APIs on Google Cloud skill credential badge from Google Cloud',
    tags: ['Google Cloud', 'ML APIs', 'Data Preparation'],
    credentialType: 'Skill Badge / Credential',
    verificationNote: 'Recognized skill badge credential issued by Google Cloud for ML data pipelines.'
  },
  {
    id: 'mahindra-pride-employability',
    title: 'Employability Skill Training Programme',
    issuer: 'Mahindra Pride Classroom / Naandi Foundation',
    date: 'Completed at BMSIT & M',
    category: 'Professional Training',
    categoryColor: 'emerald',
    icon: Briefcase,
    description: 'Completed an employability skills training programme focused on professional readiness, workplace skills and career development.',
    image: `${baseUrl}certificates/mahindra-pride-employability.jpeg`,
    imageAlt: 'Employability Skill Training Programme Certificate of Completion by Mahindra Pride Classroom and Naandi Foundation',
    tags: ['Professional Readiness', 'Workplace Skills', 'Career Development'],
    credentialType: 'Professional Training',
    verificationNote: 'Official Training Certificate issued by Mahindra Pride Classroom and Naandi Foundation for CSE at BMSIT&M.'
  }
]

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null)
  const triggerButtonRefs = useRef({})

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedCert) {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedCert])

  const openModal = (cert) => {
    setSelectedCert(cert)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    const closedId = selectedCert?.id
    setSelectedCert(null)
    document.body.style.overflow = 'auto'

    // Return focus to triggering button for keyboard accessibility
    if (closedId && triggerButtonRefs.current[closedId]) {
      setTimeout(() => {
        triggerButtonRefs.current[closedId]?.focus()
      }, 50)
    }
  }

  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <div className="section-header">
          <p className="section-label">VERIFIED CREDENTIALS</p>
          <h2 className="section-title">Certifications &amp; Credentials</h2>
          <p className="section-description">
            Verified professional certifications, NPTEL credentials, technical training, conference presentations, and recognized skill badges.
          </p>
        </div>

        <div className="certifications-grid">
          {certificationsData.map((cert, index) => {
            const IconComponent = cert.icon

            return (
              <motion.article
                key={cert.id}
                className={`cert-card cert-accent-${cert.categoryColor}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                {/* Certificate Visual Header */}
                <div 
                  className="cert-media-frame"
                  onClick={() => openModal(cert)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${cert.title} credential details`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      openModal(cert)
                    }
                  }}
                >
                  {cert.image ? (
                    <div className="cert-img-wrapper">
                      <img 
                        src={cert.image} 
                        alt={cert.imageAlt} 
                        loading="lazy" 
                        className="cert-img"
                      />
                      <div className="cert-hover-overlay">
                        <span className="cert-hover-badge">
                          <Eye size={15} />
                          <span>View Certificate</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className={`cert-placeholder-banner banner-${cert.categoryColor}`}>
                      <div className="cert-placeholder-glow" />
                      <div className="cert-placeholder-icon">
                        <IconComponent size={36} />
                      </div>
                      <div className="cert-placeholder-meta">
                        <span className="cert-placeholder-issuer">{cert.issuer}</span>
                        <span className="cert-placeholder-verified">
                          <ShieldCheck size={14} /> Verified Credential
                        </span>
                      </div>
                      <div className="cert-hover-overlay">
                        <span className="cert-hover-badge">
                          <Eye size={15} />
                          <span>View Details</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Category Pill Tag */}
                  <div className={`cert-category-badge badge-${cert.categoryColor}`}>
                    <IconComponent size={13} className="badge-icon" />
                    <span>{cert.category}</span>
                  </div>
                </div>

                {/* Certificate Content Body */}
                <div className="cert-content">
                  <div className="cert-issuer-row">
                    <span className="cert-issuer-text">{cert.issuer}</span>
                    <span className="cert-date-text">{cert.date}</span>
                  </div>

                  <h3 className="cert-title">{cert.title}</h3>

                  <p className="cert-desc">{cert.description}</p>

                  <div className="cert-tags-row">
                    {cert.tags.map((tag) => (
                      <span key={tag} className="cert-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="cert-card-footer">
                    <button
                      ref={(el) => (triggerButtonRefs.current[cert.id] = el)}
                      type="button"
                      className="cert-action-btn"
                      onClick={() => openModal(cert)}
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <Eye size={15} />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* Certificate Viewer Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal-backdrop cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <motion.div
              className={`modal-container cert-modal-container modal-accent-${selectedCert.categoryColor}`}
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="modal-header cert-modal-header">
                <div className="cert-modal-header-info">
                  <div className="cert-modal-badge-row">
                    <span className={`cert-category-badge badge-${selectedCert.categoryColor}`}>
                      {selectedCert.category}
                    </span>
                    <span className="cert-modal-type">{selectedCert.credentialType}</span>
                  </div>
                  <h3 id="cert-modal-title" className="modal-title cert-modal-title">
                    {selectedCert.title}
                  </h3>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={closeModal}
                  aria-label="Close certificate viewer"
                  title="Close (Esc)"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="cert-modal-body">
                {/* Visual Document Showcase */}
                <div className="cert-modal-media-pane">
                  {selectedCert.image ? (
                    <div className="cert-modal-img-wrapper">
                      <img
                        src={selectedCert.image}
                        alt={selectedCert.imageAlt}
                        className="cert-modal-full-img"
                      />
                    </div>
                  ) : (
                    <div className={`cert-modal-placeholder banner-${selectedCert.categoryColor}`}>
                      <div className="cert-placeholder-glow" />
                      <div className="cert-modal-placeholder-inner">
                        <div className="cert-modal-placeholder-icon">
                          <selectedCert.icon size={52} />
                        </div>
                        <h4>{selectedCert.title}</h4>
                        <p className="cert-modal-placeholder-issuer">{selectedCert.issuer}</p>
                        <div className="cert-modal-verified-badge">
                          <CheckCircle2 size={16} /> Verified Professional Credential
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Details Side Pane */}
                <div className="cert-modal-details-pane">
                  <div className="cert-detail-group">
                    <span className="cert-detail-label">Issuing Organization</span>
                    <div className="cert-detail-value-with-icon">
                      <Building2 size={16} className="detail-icon" />
                      <span>{selectedCert.issuer}</span>
                    </div>
                  </div>

                  <div className="cert-detail-group">
                    <span className="cert-detail-label">Issue / Session Date</span>
                    <div className="cert-detail-value-with-icon">
                      <Calendar size={16} className="detail-icon" />
                      <span>{selectedCert.date}</span>
                    </div>
                  </div>

                  <div className="cert-detail-group">
                    <span className="cert-detail-label">Credential Summary</span>
                    <p className="cert-detail-text">{selectedCert.description}</p>
                  </div>

                  <div className="cert-detail-group">
                    <span className="cert-detail-label">Verification &amp; Authenticity</span>
                    <div className="cert-verification-box">
                      <ShieldCheck size={16} className="shield-icon" />
                      <span>{selectedCert.verificationNote}</span>
                    </div>
                  </div>

                  <div className="cert-detail-group">
                    <span className="cert-detail-label">Skills &amp; Competencies</span>
                    <div className="cert-modal-tags">
                      {selectedCert.tags.map((tag) => (
                        <span key={tag} className="tag tag-accent">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certifications