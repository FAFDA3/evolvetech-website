import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './SectionTransition.css'

const SectionTransition = ({ 
  children, 
  direction = 'right', // 'left', 'right', 'up', 'down'
  delay = 0,
  className = '',
  once = true
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'right' ? 100 : direction === 'left' ? -100 : 0,
      y: direction === 'down' ? 50 : direction === 'up' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    }
  }

  return (
    <motion.div
      ref={ref}
      className={`section-transition ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

// Staggered children animation
export const StaggerContainer = ({ children, className = '', staggerDelay = 0.1 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({ children, className = '', direction = 'up' }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'right' ? 30 : direction === 'left' ? -30 : 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}

export default SectionTransition



