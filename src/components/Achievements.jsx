import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Users, Award, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import './Achievements.css'

const baseUrl = import.meta.env.BASE_URL

const incseptionImages = [
  {
    src: `${baseUrl}certificates/hackathon-cert.jpg`,
    alt: 'Certificate of Appreciation for InCSEption Hackathon 2nd Position awarded to Team Mavericks',
    caption: 'Official 2nd Place Certificate of Appreciation awarded to Team Mavericks'
  },
  {
    src: `${baseUrl}certificates/hackathon-event-2.jpg`,
    alt: 'Team Mavericks receiving the 2nd Place Certificate of Appreciation at InCSEption Hackathon with BMSIT CSE faculty',
    caption: 'Team Mavericks holding the 2nd Position Certificate with BMSIT CSE department faculty'
  },
  {
    src: `${baseUrl}certificates/hackathon-event-1.jpg`,
    alt: 'Team Mavericks developing the maritime situational awareness platform in the lab during InCSEption Hackathon',
    caption: 'Team Mavericks building the maritime situational awareness platform during the InCSEption Hackathon'
  }
]

const achievementsData = [
  {
    id: 'astra-club',
    number: '01',
    icon: Users,
    title: 'Founder & Vice President — ASTRA Club',
    organization: 'BMS Institute of Technology & Management',
    date: '2024 — Present',
    category: 'Leadership & Student Initiative',
    accentColor: 'purple',
    image: `${baseUrl}certificates/ASTRA.jpeg`,
    imageAlt: 'ASTRA Club official emblem - Armed Squad for Tactical Readiness & Awareness',
    imageCaption: 'Official Emblem: Armed Squad for Tactical Readiness & Awareness (ASTRA)',
    imageFit: 'contain',
    description: 'Founded and currently lead ASTRA Club at BMSIT&M, driving student technical development, organizing collaborative hackathons, and managing technical engineering initiatives.'
  },
  {
    id: 'incseption-hackathon',
    number: '02',
    icon: Trophy,
    title: '2nd Place — InCSEption Hackathon',
    organization: 'BMSIT CSE Department',
    date: '2024',
    category: 'Hackathon Award',
    accentColor: 'blue',
    images: incseptionImages,
    description: 'Secured 2nd Position in the InCSEption Inter-College Hackathon. Led Team "Mavericks" to build an operational maritime situational awareness platform under time constraints.'
  },
  {
    id: 'anveshana-hackathon',
    number: '03',
    icon: Award,
    title: 'Track Prize — ANVESHANA National Hackathon',
    organization: 'ANVESHANA National-Level Hackathon',
    date: 'National Level',
    category: 'National Competition',
    accentColor: 'teal',
    image: `${baseUrl}certificates/Anveshana.jpeg`,
    imageAlt: 'Certificate of Achievement for ANVESHANA 3.0 National Level Prototype Competition awarded to Team Mavericks',
    imageCaption: 'Official Certificate of Achievement awarded to Team Mavericks at ANVESHANA 3.0 Prototype Competition',
    imageFit: 'cover',
    description: 'Awarded the Track Prize at ANVESHANA National-Level Hackathon for technical innovation and engineering excellence in autonomous/intelligent system design.'
  }
]

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [activeLightbox, setActiveLightbox] = useState(null)

  // Subtle auto-play for InCSEption card carousel (pauses on hover)
  useEffect(() => {
    if (activeLightbox || isPaused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % incseptionImages.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [activeLightbox, isPaused])

  // Lightbox Keyboard Navigation
  useEffect(() => {
    if (!activeLightbox) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft' && activeLightbox.images.length > 1) {
        handleLightboxPrev()
      } else if (e.key === 'ArrowRight' && activeLightbox.images.length > 1) {
        handleLightboxNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeLightbox])

  const handleCardPrev = (e) => {
    e.stopPropagation()
    setCurrentSlide((prev) => (prev - 1 + incseptionImages.length) % incseptionImages.length)
  }

  const handleCardNext = (e) => {
    e.stopPropagation()
    setCurrentSlide((prev) => (prev + 1) % incseptionImages.length)
  }

  const openInCSEptionLightbox = (index) => {
    setActiveLightbox({
      id: 'incseption-hackathon',
      title: '2nd Place — Team Mavericks',
      subtitle: 'InCSEption Inter-College Hackathon 2024',
      images: incseptionImages,
      index: index
    })
    document.body.style.overflow = 'hidden'
  }

  const openSingleImageLightbox = (item) => {
    setActiveLightbox({
      id: item.id,
      title: item.title,
      subtitle: item.organization,
      images: [
        {
          src: item.image,
          alt: item.imageAlt,
          caption: item.imageCaption || item.imageAlt
        }
      ],
      index: 0
    })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    if (activeLightbox?.id === 'incseption-hackathon') {
      setCurrentSlide(activeLightbox.index)
    }
    setActiveLightbox(null)
    document.body.style.overflow = 'auto'
  }

  const handleLightboxPrev = (e) => {
    if (e) e.stopPropagation()
    setActiveLightbox((prev) => {
      if (!prev || prev.images.length <= 1) return prev
      return {
        ...prev,
        index: (prev.index - 1 + prev.images.length) % prev.images.length
      }
    })
  }

  const handleLightboxNext = (e) => {
    if (e) e.stopPropagation()
    setActiveLightbox((prev) => {
      if (!prev || prev.images.length <= 1) return prev
      return {
        ...prev,
        index: (prev.index + 1) % prev.images.length
      }
    })
  }

  return (
    <section className="section achievements" id="achievements">
      <div className="container">
        <div className="section-header">
          <p className="section-label">HONORS &amp; LEADERSHIP</p>
          <h2 className="section-title">Achievements &amp; Leadership</h2>
          <p className="section-description">
            Recognized hackathon awards, national competition track prizes, and student club leadership.
          </p>
        </div>

        <div className="achievements-grid">
          {achievementsData.map((item, index) => {
            const Icon = item.icon
            const isCarousel = Array.isArray(item.images) && item.images.length > 0

            return (
              <motion.article
                key={item.id}
                className={`achievement-card card-accent-${item.accentColor}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
              >
                {/* Visual Header */}
                {isCarousel ? (
                  <div
                    className="achievement-photo-frame achievement-carousel-frame achievement-expandable-frame"
                    onClick={() => openInCSEptionLightbox(currentSlide)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    title="Click to expand photos in full-screen lightbox"
                    role="button"
                    tabIndex={0}
                    aria-label="Open InCSEption photos in lightbox"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        openInCSEptionLightbox(currentSlide)
                      }
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={item.images[currentSlide].src}
                        src={item.images[currentSlide].src}
                        alt={item.images[currentSlide].alt}
                        loading="lazy"
                        className="achievement-photo photo-fit-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>

                    {/* Left Navigation Arrow */}
                    <button
                      type="button"
                      className="carousel-nav-btn carousel-nav-prev"
                      onClick={handleCardPrev}
                      aria-label="Previous InCSEption photo"
                      title="Previous photo"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    {/* Right Navigation Arrow */}
                    <button
                      type="button"
                      className="carousel-nav-btn carousel-nav-next"
                      onClick={handleCardNext}
                      aria-label="Next InCSEption photo"
                      title="Next photo"
                    >
                      <ChevronRight size={16} />
                    </button>

                    {/* Slide Counter & Dots */}
                    <div className="carousel-controls-bottom">
                      <div className="carousel-counter-badge">
                        <span>{currentSlide + 1} / {item.images.length}</span>
                      </div>

                      <div className="carousel-dots-row">
                        {item.images.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            type="button"
                            className={`carousel-dot ${dotIdx === currentSlide ? 'dot-active' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation()
                              setCurrentSlide(dotIdx)
                            }}
                            aria-label={`Go to photo ${dotIdx + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Category Badge Pill */}
                    <div className="achievement-badge-pill">
                      <Icon size={14} className="badge-icon" />
                      <span>{item.category}</span>
                    </div>

                    {/* Click-to-Expand Overlay Hint */}
                    <div className="carousel-expand-hint">
                      <Maximize2 size={13} />
                      <span>Expand</span>
                    </div>
                  </div>
                ) : item.image ? (
                  <div
                    className={`achievement-photo-frame achievement-expandable-frame frame-fit-${item.imageFit || 'cover'}`}
                    onClick={() => openSingleImageLightbox(item)}
                    title={`Click to view ${item.title} image in full-screen`}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open ${item.title} image in lightbox`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        openSingleImageLightbox(item)
                      }
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      className={`achievement-photo photo-fit-${item.imageFit || 'cover'}`}
                    />
                    <div className="achievement-badge-pill">
                      <Icon size={14} className="badge-icon" />
                      <span>{item.category}</span>
                    </div>
                    {/* Click-to-Expand Overlay Hint */}
                    <div className="carousel-expand-hint">
                      <Maximize2 size={13} />
                      <span>Expand</span>
                    </div>
                  </div>
                ) : (
                  <div className={`achievement-banner-frame banner-${item.accentColor}`}>
                    <div className="banner-glow-orb"></div>
                    <div className="banner-icon-container">
                      <Icon size={34} />
                    </div>
                    <div className="achievement-badge-pill">
                      <Icon size={14} className="badge-icon" />
                      <span>{item.category}</span>
                    </div>
                  </div>
                )}

                {/* Card Body */}
                <div className="achievement-body">
                  <div className="achievement-meta">
                    <span className={`ach-org ach-org-${item.accentColor}`}>
                      {item.organization}
                    </span>
                    <span className="ach-date">{item.date}</span>
                  </div>

                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-desc">{item.description}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* Lightbox Modal (Supports both 3-image slider and single-image expansion) */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            className="modal-backdrop achievement-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="modal-container achievement-lightbox-container"
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="modal-header achievement-lightbox-header">
                <div className="lightbox-header-info">
                  <span className="lightbox-subtitle">{activeLightbox.subtitle}</span>
                  <h3 className="modal-title">{activeLightbox.title}</h3>
                </div>
                <div className="lightbox-header-actions">
                  {activeLightbox.images.length > 1 && (
                    <span className="lightbox-counter">
                      {activeLightbox.index + 1} / {activeLightbox.images.length}
                    </span>
                  )}
                  <button
                    type="button"
                    className="modal-close-btn"
                    onClick={closeLightbox}
                    aria-label="Close image viewer"
                    title="Close (Esc)"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* Modal Lightbox Body */}
              <div className="achievement-lightbox-body">
                <div className="lightbox-stage">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeLightbox.images[activeLightbox.index].src}
                      src={activeLightbox.images[activeLightbox.index].src}
                      alt={activeLightbox.images[activeLightbox.index].alt}
                      className="achievement-lightbox-img"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                    />
                  </AnimatePresence>

                  {/* Lightbox Navigation Arrows (only if multiple images) */}
                  {activeLightbox.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="lightbox-nav-btn lightbox-nav-prev"
                        onClick={handleLightboxPrev}
                        aria-label="Previous photo"
                        title="Previous photo (Arrow Left)"
                      >
                        <ChevronLeft size={24} />
                      </button>

                      <button
                        type="button"
                        className="lightbox-nav-btn lightbox-nav-next"
                        onClick={handleLightboxNext}
                        aria-label="Next photo"
                        title="Next photo (Arrow Right)"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>

                {/* Lightbox Caption & Thumbnails */}
                <div className="lightbox-bottom-bar">
                  <p className="lightbox-caption-text">
                    {activeLightbox.images[activeLightbox.index].caption}
                  </p>

                  {activeLightbox.images.length > 1 && (
                    <div className="lightbox-dots-row">
                      {activeLightbox.images.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          className={`lightbox-dot ${dotIdx === activeLightbox.index ? 'dot-active' : ''}`}
                          onClick={() =>
                            setActiveLightbox((prev) => ({ ...prev, index: dotIdx }))
                          }
                          aria-label={`View photo ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Achievements
