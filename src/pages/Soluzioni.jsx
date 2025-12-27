import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTransition, { StaggerContainer, StaggerItem } from '../components/SectionTransition/SectionTransition'
import './Pages.css'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

const solutions = [
  {
    id: "fibra",
    title: "Fibra Ottica",
    subtitle: "Infrastrutture ad Alta Velocità",
    description: "Progettiamo e realizziamo reti in fibra ottica ad alte prestazioni per aziende, pubbliche amministrazioni e operatori telefonici.",
    features: [
      "Progettazione reti FTTH / FTTB",
      "Backbone Networks per data center",
      "Certificazione e collaudo",
      "Manutenzione predittiva"
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4v40M4 24h40M12 12l24 24M36 12L12 36"/>
        <circle cx="24" cy="24" r="8"/>
      </svg>
    )
  },
  {
    id: "wireless",
    title: "Reti Wireless",
    subtitle: "Connettività Senza Confini",
    description: "Soluzioni wireless enterprise per garantire connettività ubiqua, sicura e performante in ogni ambiente.",
    features: [
      "WiFi 6E e WiFi 7 enterprise",
      "Private 5G Networks",
      "Ponti radio e radio links",
      "Site survey e ottimizzazione"
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4v8M24 36v8M44 24h-8M12 24H4"/>
        <circle cx="24" cy="24" r="12"/>
        <path d="M34 14L28 20M14 34l6-6M34 34l-6-6M14 14l6 6"/>
      </svg>
    )
  },
  {
    id: "smart-building",
    title: "Smart Building",
    subtitle: "Edifici Intelligenti",
    description: "Trasformiamo gli edifici in spazi smart con sistemi integrati di automazione, sicurezza e gestione energetica.",
    features: [
      "Building Management System (BMS)",
      "Controllo accessi e videosorveglianza",
      "Sistemi HVAC intelligenti",
      "Illuminazione smart"
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="20" width="32" height="24" rx="2"/>
        <path d="M16 20V12a8 8 0 0116 0v8"/>
        <path d="M24 32v4"/>
        <circle cx="24" cy="32" r="2"/>
      </svg>
    )
  },
  {
    id: "iot",
    title: "IoT & Sensoristica",
    subtitle: "Internet of Things",
    description: "Piattaforme IoT complete per il monitoraggio in tempo reale e l'automazione dei processi industriali e civili.",
    features: [
      "Gateway IoT industriali",
      "Sensoristica avanzata",
      "Edge computing",
      "Dashboard e analytics"
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 36l10-8 8 6 12-14 10 8"/>
        <circle cx="14" cy="28" r="3"/>
        <circle cx="22" cy="34" r="3"/>
        <circle cx="34" cy="20" r="3"/>
        <circle cx="44" cy="28" r="3"/>
      </svg>
    )
  },
  {
    id: "energy",
    title: "Efficientamento Energetico",
    subtitle: "Sostenibilità e Risparmio",
    description: "Soluzioni per l'efficientamento energetico che riducono i costi e l'impatto ambientale.",
    features: [
      "Smart metering",
      "Audit energetici",
      "Ottimizzazione consumi",
      "Energie rinnovabili"
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 40l8-16 8 8 8-20 8 12"/>
        <rect x="4" y="8" width="8" height="8" rx="1"/>
        <rect x="36" y="12" width="8" height="8" rx="1"/>
      </svg>
    )
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    subtitle: "Digital Transformation",
    description: "Infrastrutture cloud scalabili e sicure per accelerare la trasformazione digitale della tua azienda.",
    features: [
      "Hybrid e Multi-Cloud",
      "Infrastructure as Code",
      "DevOps e CI/CD",
      "Disaster Recovery"
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8z"/>
        <circle cx="24" cy="36" r="8"/>
        <path d="M20 36h8M24 32v8"/>
      </svg>
    )
  }
]

const Soluzioni = () => {
  return (
    <motion.div
      className="page page-soluzioni"
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
            <span className="page-hero-label">Le Nostre Soluzioni</span>
            <h1 className="page-hero-title">Tecnologia che Evolve</h1>
            <p className="page-hero-subtitle">
              Un portfolio completo di soluzioni per ogni esigenza di connettività e digitalizzazione
            </p>
          </SectionTransition>
        </div>
      </section>

      {/* Solutions List */}
      {solutions.map((solution, index) => (
        <section 
          key={solution.id} 
          id={solution.id}
          className={`section ${index % 2 === 0 ? 'section-dark' : ''}`}
        >
          <div className="container">
            <div className={`solution-detail-grid ${index % 2 === 1 ? 'reverse' : ''}`}>
              <SectionTransition 
                direction={index % 2 === 0 ? "left" : "right"} 
                className="solution-detail-content"
              >
                <span className="section-label">{solution.subtitle}</span>
                <h2 className="section-title">{solution.title}</h2>
                <p className="lead">{solution.description}</p>
                
                <ul className="solution-detail-features">
                  {solution.features.map((feature, i) => (
                    <li key={i}>
                      <span className="feature-hex"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to="/contatti" className="btn btn-secondary">
                  Richiedi informazioni
                </Link>
              </SectionTransition>
              
              <SectionTransition 
                direction={index % 2 === 0 ? "right" : "left"} 
                className="solution-detail-visual"
              >
                <div className="solution-detail-icon">
                  {solution.icon}
                </div>
              </SectionTransition>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section section-cta-gradient">
        <div className="container">
          <SectionTransition direction="up">
            <div className="page-cta">
              <h2>Hai un Progetto in Mente?</h2>
              <p>
                Contattaci per una consulenza gratuita. Il nostro team è pronto 
                a trovare la soluzione perfetta per le tue esigenze.
              </p>
              <div className="cta-buttons">
                <Link to="/contatti" className="btn btn-primary">
                  Richiedi un preventivo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <a href="mailto:amministrazione@evolvetechgrp.com" className="btn btn-outline">
                  Scrivi una email
                </a>
              </div>
            </div>
          </SectionTransition>
        </div>
      </section>
    </motion.div>
  )
}

export default Soluzioni
