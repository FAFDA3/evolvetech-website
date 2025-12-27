import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './IntroAnimation.css'

const IntroAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState('logo') // logo -> expand -> complete

  useEffect(() => {
    // Logo phase - show logo pulsing
    const logoTimer = setTimeout(() => {
      setPhase('expand')
    }, 1500)

    // Expand phase - zoom into logo
    const expandTimer = setTimeout(() => {
      setPhase('complete')
      onComplete?.()
    }, 2500)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(expandTimer)
    }
  }, [onComplete])

  // Skip on click
  const handleSkip = () => {
    setPhase('complete')
    onComplete?.()
  }

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          className="intro-animation"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleSkip}
        >
          {/* Hexagon background pattern */}
          <div className="intro-hex-pattern"></div>
          
          {/* Main logo */}
          <motion.div
            className="intro-logo-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              phase === 'logo'
                ? { scale: 1, opacity: 1 }
                : { scale: 15, opacity: 0 }
            }
            transition={
              phase === 'logo'
                ? { duration: 0.8, ease: 'easeOut' }
                : { duration: 1, ease: 'easeInOut' }
            }
          >
            <img 
              src="/logo-evolve.png" 
              alt="EVOLVE" 
              className="intro-logo"
            />
            
            {/* Hexagon glow effects */}
            <motion.div 
              className="intro-hex-glow"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.div>

          {/* Animated hexagons */}
          <div className="intro-hexagons">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="intro-hex"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ 
                  scale: phase === 'expand' ? 3 : 1,
                  rotate: 30 * i,
                  opacity: phase === 'expand' ? 0 : 0.1
                }}
                transition={{ 
                  duration: 1,
                  delay: i * 0.1,
                  ease: 'easeOut'
                }}
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
              />
            ))}
          </div>

          {/* Skip text */}
          <motion.p 
            className="intro-skip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1 }}
          >
            Click per saltare
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroAnimation

