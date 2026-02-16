import { motion } from 'framer-motion'
import { X, Home, User, Code, GraduationCap, FolderGit2, Award, Trophy, Mail } from 'lucide-react'
import './Sidebar.css'

const menuItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'contact', label: 'Contact', icon: Mail },
]

const Sidebar = ({ onClose }) => {
  const handleNavClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onClose()
    }
  }

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="sidebar-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <motion.div
        className="sidebar"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        <div className="sidebar-header">
          <h2 className="sidebar-title">Navigation</h2>
          <motion.button
            className="close-button"
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
          >
            <X size={24} />
          </motion.button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.id}
                className="nav-item"
                onClick={() => handleNavClick(item.id)}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 10, backgroundColor: 'rgba(0, 212, 255, 0.15)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon size={20} className="nav-icon" />
                <span>{item.label}</span>
              </motion.button>
            )
          })}
        </nav>

        <div className="sidebar-footer">
          <p>© 2024 Sharath Y Kudachi</p>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar
