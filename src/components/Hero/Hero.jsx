import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'

const slides = [
  {
    id: 1,
    title: "Smart Building Solutions",
    subtitle: "Edifici Intelligenti",
    description: "Trasformiamo gli edifici in spazi smart con sistemi integrati di automazione, sicurezza e efficienza energetica.",
    cta: { text: "Esplora i mercati", link: "/mercati" }
  },
  {
    id: 3,
    title: "IoT & Sensoristica",
    subtitle: "Internet of Things",
    description: "Soluzioni IoT complete per il monitoraggio e l'automazione dei processi industriali e civili.",
    cta: { text: "Scopri di più", link: "/soluzioni" }
  },
  {
    id: 4,
    title: "Cloud & Digital Transformation",
    subtitle: "Innovazione Digitale",
    description: "Accompagniamo le aziende nel percorso di trasformazione digitale con soluzioni cloud scalabili.",
    cta: { text: "Contattaci", link: "/contatti" }
  }
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = next, -1 = prev

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  }

  const contentVariants = {
    enter: {
      opacity: 0,
      y: 30,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -30,
    },
  }

  return (
    <section className="hero">
      {/* Background hexagon pattern */}
      <div className="hero-hex-bg"></div>
      
      {/* Animated hexagons */}
      <div className="hero-hexagons">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="hero-hex-float"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
            style={{
              top: `${15 + i * 18}%`,
              left: `${5 + i * 20}%`,
              width: `${80 + i * 30}px`,
              height: `${92 + i * 34}px`,
            }}
          />
        ))}
      </div>

      {/* Slides */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          className="hero-slide"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="hero-content">
            <motion.span
              className="hero-label"
              variants={contentVariants}
              initial="enter"
              animate="center"
              transition={{ delay: 0.2 }}
            >
              {slides[currentSlide].subtitle}
            </motion.span>
            
            <motion.h1
              className="hero-title"
              variants={contentVariants}
              initial="enter"
              animate="center"
              transition={{ delay: 0.3 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            
            <motion.p
              className="hero-description"
              variants={contentVariants}
              initial="enter"
              animate="center"
              transition={{ delay: 0.4 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            
            <motion.div
              className="hero-cta"
              variants={contentVariants}
              initial="enter"
              animate="center"
              transition={{ delay: 0.5 }}
            >
              <Link to={slides[currentSlide].cta.link} className="btn btn-primary">
                {slides[currentSlide].cta.text}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="hero-nav">
        <button className="hero-nav-btn" onClick={prevSlide} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        
        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="hero-dot-progress"></span>
            </button>
          ))}
        </div>
        
        <button className="hero-nav-btn" onClick={nextSlide} aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scorri</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero
