import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText, Github, Linkedin } from 'lucide-react'
import './Header.css'

const baseUrl = import.meta.env.BASE_URL

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sectionIds = ['hero', 'about', 'skills', 'projects', 'education', 'achievements', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 140

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a 
          href="#hero" 
          className="header-brand" 
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          aria-label="Sharath Y Kudachi Homepage"
        >
          <span className="brand-initials">SK</span>
          <span className="brand-name">Sharath Y Kudachi</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`nav-link ${isActive ? 'active-nav-link' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>
          
          <div className="nav-actions">
            <a
              href={`${baseUrl}Sharath-Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              download="Sharath-Resume.pdf"
              className="btn btn-primary btn-sm"
              title="Download Resume PDF"
              aria-label="Download Resume PDF"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-drawer-inner">
              <nav className="mobile-nav" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`mobile-nav-link ${isActive ? 'active-mobile-nav' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </button>
                  )
                })}
              </nav>
              <div className="mobile-drawer-footer">
                <a
                  href={`${baseUrl}Sharath-Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sharath-Resume.pdf"
                  className="btn btn-primary btn-sm full-width"
                  aria-label="Download Resume PDF"
                >
                  <FileText size={16} />
                  <span>Download Resume</span>
                </a>
                <div className="mobile-social-row">
                  <a href="https://github.com/sharathkudachi" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/sharath-y-kudachi-37438b314/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
