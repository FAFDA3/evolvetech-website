import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import './CookieBanner.css'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user already accepted cookies
    const cookieConsent = localStorage.getItem('evolve-cookie-consent')
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('evolve-cookie-consent', 'accepted')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="cookie-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="cookie-content">
            <div className="cookie-icon">🍪</div>
            <div className="cookie-text">
              <h4>La tua privacy è importante</h4>
              <p>
                Questo sito utilizza esclusivamente <strong>cookie tecnici</strong> necessari 
                al funzionamento. Non utilizziamo cookie di profilazione o tracciamento.
                Continuando la navigazione accetti l'utilizzo dei cookie tecnici.
              </p>
              <div className="cookie-links">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <span>•</span>
                <Link to="/cookie-policy">Cookie Policy</Link>
              </div>
            </div>
            <div className="cookie-actions">
              <button className="btn-cookie-accept" onClick={handleAccept}>
                Accetta
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner


