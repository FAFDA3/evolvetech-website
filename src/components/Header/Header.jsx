import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()
  
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
      
      // Calculate scroll progress for effects
      const maxScroll = 300
      const progress = Math.min(window.scrollY / maxScroll, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/chi-siamo', label: 'Chi Siamo' },
    { to: '/soluzioni', label: 'Soluzioni' },
    { to: '/mercati', label: 'Mercati' },
    { to: '/partner', label: 'Partner' },
    { to: '/contatti', label: 'Contatti' },
  ]

  return (
    <motion.header 
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
      }}
    >
      {/* Animated background gradient */}
      <motion.div 
        className="header-bg-gradient"
        animate={{
          opacity: isScrolled ? 1 : 0,
          scaleY: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Progress bar */}
      <motion.div 
        className="header-progress-bar"
        style={{
          scaleX: scrollProgress,
          opacity: scrollProgress > 0 ? 1 : 0,
        }}
      />

      <div className="header-container">
        {/* Logo with hover effect */}
        <Link to="/" className="header-logo">
          <motion.img 
            src="/logo-evolve.png" 
            alt="EVOLVE TECH GROUP"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              height: isScrolled ? 40 : 50,
            }}
            transition={{ duration: 0.3 }}
          />
          {/* Glow effect on hover */}
          <div className="logo-glow"></div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
              >
                <span className="nav-link-text">{link.label}</span>
                <span className="nav-link-underline"></span>
                <span className="nav-link-glow"></span>
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button with effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <Link to="/contatti" className="header-cta desktop-only">
            <span>Contattaci</span>
            <div className="cta-shine"></div>
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className="mobile-nav-links">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => 
                      `mobile-nav-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contatti" className="mobile-cta">
                Contattaci
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
