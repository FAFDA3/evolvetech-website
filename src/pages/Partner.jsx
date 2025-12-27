import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTransition, { StaggerContainer, StaggerItem } from '../components/SectionTransition/SectionTransition'
import './Pages.css'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

const partnerCategories = [
  {
    title: "Technology Partners",
    description: "Collaboriamo con i leader tecnologici mondiali",
    partners: ["Cisco", "HPE Aruba", "Fortinet", "VMware", "Microsoft Azure"]
  },
  {
    title: "System Integrators",
    description: "Partnership strategiche per progetti complessi",
    partners: ["Accenture", "Reply", "Engineering", "Almaviva"]
  },
  {
    title: "Cloud Providers",
    description: "Soluzioni cloud certificate",
    partners: ["AWS", "Google Cloud", "Azure", "OVH", "Aruba Cloud"]
  }
]

const benefits = [
  {
    title: "Accesso a Tecnologie Enterprise",
    description: "Grazie alle nostre partnership, offriamo ai clienti accesso privilegiato alle migliori tecnologie.",
    icon: "🚀"
  },
  {
    title: "Supporto Certificato",
    description: "I nostri tecnici sono certificati dai principali vendor tecnologici.",
    icon: "🎓"
  },
  {
    title: "Prezzi Competitivi",
    description: "Le partnership ci permettono di offrire condizioni economiche vantaggiose.",
    icon: "💰"
  },
  {
    title: "Aggiornamento Continuo",
    description: "Accesso in anteprima a nuove tecnologie e best practice di settore.",
    icon: "📈"
  }
]

const Partner = () => {
  return (
    <motion.div
      className="page page-partner"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-hex-bg"></div>
        <div className="container">
          <SectionTransition direction="up">
            <span className="page-hero-label">Ecosistema Partner</span>
            <h1 className="page-hero-title">Le Nostre Partnership</h1>
            <p className="page-hero-subtitle">
              Un network di partner tecnologici per offrire il meglio ai nostri clienti
            </p>
          </SectionTransition>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="section">
        <div className="container">
          <StaggerContainer className="partner-categories" staggerDelay={0.15}>
            {partnerCategories.map((category, index) => (
              <StaggerItem key={index} direction={index % 2 === 0 ? "left" : "right"}>
                <div className="partner-category-card">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <div className="partner-logos">
                    {category.partners.map((partner, i) => (
                      <span key={i} className="partner-logo-placeholder">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section-dark">
        <div className="container">
          <SectionTransition direction="up">
            <div className="section-header">
              <span className="section-label">Vantaggi</span>
              <h2 className="section-title">Perché le Partnership Contano</h2>
            </div>
          </SectionTransition>

          <StaggerContainer className="benefits-grid" staggerDelay={0.1}>
            {benefits.map((benefit, index) => (
              <StaggerItem key={index} direction="up">
                <div className="benefit-card">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Become Partner CTA */}
      <section className="section">
        <div className="container">
          <SectionTransition direction="up">
            <div className="page-cta">
              <h2>Diventa Partner</h2>
              <p>
                Sei un'azienda tecnologica e vuoi entrare nel nostro ecosistema? 
                Contattaci per esplorare opportunità di collaborazione.
              </p>
              <Link to="/contatti" className="btn btn-primary">
                Proponi una partnership
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </SectionTransition>
        </div>
      </section>
    </motion.div>
  )
}

export default Partner
