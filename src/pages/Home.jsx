import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Hero from '../components/Hero/Hero'
import SectionTransition, { StaggerContainer, StaggerItem } from '../components/SectionTransition/SectionTransition'
import './Home.css'

// Page wrapper with transition
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

const solutions = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4v40M4 24h40M12 12l24 24M36 12L12 36"/>
        <circle cx="24" cy="24" r="8"/>
      </svg>
    ),
    title: "Fibra Ottica",
    description: "Progettazione e realizzazione di infrastrutture in fibra ottica ad alte prestazioni.",
    features: ["FTTH / FTTB", "Backbone Networks", "Data Center Connectivity"]
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4v8M24 36v8M44 24h-8M12 24H4"/>
        <circle cx="24" cy="24" r="12"/>
        <path d="M34 14L28 20M14 34l6-6M34 34l-6-6M14 14l6 6"/>
      </svg>
    ),
    title: "Reti Wireless",
    description: "Soluzioni wireless enterprise per connettività ubiqua e performante.",
    features: ["WiFi 6E / WiFi 7", "Private 5G", "Radio Links"]
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="20" width="32" height="24" rx="2"/>
        <path d="M16 20V12a8 8 0 0116 0v8"/>
        <path d="M24 32v4"/>
        <circle cx="24" cy="32" r="2"/>
      </svg>
    ),
    title: "Smart Building",
    description: "Edifici intelligenti con sistemi integrati di automazione e controllo.",
    features: ["Building Automation", "Access Control", "Energy Management"]
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 36l10-8 8 6 12-14 10 8"/>
        <circle cx="14" cy="28" r="3"/>
        <circle cx="22" cy="34" r="3"/>
        <circle cx="34" cy="20" r="3"/>
        <circle cx="44" cy="28" r="3"/>
      </svg>
    ),
    title: "IoT & Sensoristica",
    description: "Piattaforme IoT complete per monitoraggio e automazione industriale.",
    features: ["Edge Computing", "Real-time Analytics", "Predictive Maintenance"]
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 40l8-16 8 8 8-20 8 12"/>
        <rect x="4" y="8" width="8" height="8" rx="1"/>
        <rect x="36" y="12" width="8" height="8" rx="1"/>
      </svg>
    ),
    title: "Energy Efficiency",
    description: "Soluzioni per l'efficientamento energetico e la sostenibilità.",
    features: ["Smart Metering", "Energy Audit", "Green Solutions"]
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8z"/>
        <circle cx="24" cy="36" r="8"/>
        <path d="M20 36h8M24 32v8"/>
      </svg>
    ),
    title: "Cloud Solutions",
    description: "Infrastrutture cloud scalabili per la trasformazione digitale.",
    features: ["Hybrid Cloud", "Infrastructure as Code", "DevOps & CI/CD"]
  }
]

const useCases = [
  {
    title: "Connessione di macchinari industriali",
    description: "Piattaforme IoT plug & play per interfacciare macchinari legacy e moderni.",
    icon: "🏭"
  },
  {
    title: "Smart Campus & Hospitality",
    description: "Reti integrate per campus universitari, hotel e strutture ricettive.",
    icon: "🏨"
  },
  {
    title: "Healthcare Connectivity",
    description: "Infrastrutture di rete certificate per strutture sanitarie.",
    icon: "🏥"
  },
  {
    title: "Retail & GDO",
    description: "Soluzioni omnichannel per il retail e la grande distribuzione.",
    icon: "🛒"
  }
]

const stats = [
  { value: "500+", label: "Progetti completati" },
  { value: "50+", label: "Clienti enterprise" },
  { value: "99.9%", label: "Uptime garantito" },
  { value: "24/7", label: "Supporto tecnico" }
]

const Home = () => {
  const featuresRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      className="page page-home"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      
      {/* Solutions Section */}
      <section className="section section-solutions">
        <div className="section-hex-accent"></div>
        <div className="container">
          <SectionTransition direction="up">
            <div className="section-header">
              <span className="section-label">Le nostre soluzioni</span>
              <h2 className="section-title">Tecnologia al Servizio del Business</h2>
              <p className="section-subtitle">
                Offriamo soluzioni complete per le infrastrutture digitali, 
                dalla progettazione alla realizzazione e manutenzione.
              </p>
            </div>
          </SectionTransition>

          <StaggerContainer className="solutions-grid" staggerDelay={0.1}>
            {solutions.map((solution, index) => (
              <StaggerItem key={index} direction="up">
                <div className="solution-card card-hexagon">
                  <div className="solution-icon">{solution.icon}</div>
                  <h3 className="solution-title">{solution.title}</h3>
                  <p className="solution-description">{solution.description}</p>
                  <ul className="solution-features">
                    {solution.features.map((feature, i) => (
                      <li key={i}>
                        <span className="feature-dot"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/soluzioni" className="solution-link">
                    Scopri di più
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section section-usecases section-dark">
        <div className="container">
          <SectionTransition direction="right">
            <div className="section-header">
              <span className="section-label">Use Cases</span>
              <h2 className="section-title">Soluzioni su Misura</h2>
              <p className="section-subtitle">
                Ogni settore ha esigenze specifiche. Scopri come le nostre soluzioni 
                si adattano al tuo business.
              </p>
            </div>
          </SectionTransition>

          <div className="usecases-grid">
            {useCases.map((useCase, index) => (
              <SectionTransition 
                key={index} 
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              >
                <div className="usecase-card">
                  <div className="usecase-icon">{useCase.icon}</div>
                  <div className="usecase-content">
                    <h4>{useCase.title}</h4>
                    <p>{useCase.description}</p>
                  </div>
                  <div className="usecase-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </SectionTransition>
            ))}
          </div>

          <SectionTransition direction="up" delay={0.4}>
            <div className="usecases-cta">
              <Link to="/mercati" className="btn btn-secondary">
                Esplora tutti i mercati
              </Link>
            </div>
          </SectionTransition>
        </div>
      </section>

      {/* Platform Features */}
      <section className="section section-platform" ref={featuresRef}>
        <motion.div className="platform-bg" style={{ opacity }} />
        <div className="container">
          <div className="platform-grid">
            <SectionTransition direction="left" className="platform-content">
              <span className="section-label">Piattaforma Integrata</span>
              <h2 className="section-title">Un Ecosistema Completo</h2>
              <p className="lead">
                La nostra piattaforma IoT & Cloud può essere facilmente implementata 
                su qualsiasi infrastruttura IT che supporta tecnologie container.
              </p>
              
              <div className="platform-features">
                <div className="platform-feature">
                  <div className="feature-hex-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Connettiamo qualsiasi dispositivo</h4>
                    <p>Piattaforma IoT plug and play con tecnologia microcontroller e Secure Element integrato.</p>
                  </div>
                </div>
                
                <div className="platform-feature">
                  <div className="feature-hex-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <path d="M3 9h18M9 21V9"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Integrazione con qualsiasi sistema IT</h4>
                    <p>Facile integrazione con qualsiasi sistema BI, ERP, MES presente in azienda.</p>
                  </div>
                </div>
                
                <div className="platform-feature">
                  <div className="feature-hex-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Scalabilità garantita</h4>
                    <p>Inizia con un PoC su alcuni macchinari e poi passa a una linea di produzione completa.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/soluzioni" className="btn btn-primary">
                Scopri tutte le funzionalità
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </SectionTransition>

            <SectionTransition direction="right" className="platform-visual">
              <div className="platform-hexagons">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="platform-hex"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-stats">
        <div className="container">
          <StaggerContainer className="stats-grid" staggerDelay={0.15}>
            {stats.map((stat, index) => (
              <StaggerItem key={index} direction="up">
                <div className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section section-about section-dark">
        <div className="container">
          <div className="about-grid">
            <SectionTransition direction="left" className="about-content">
              <span className="section-label">Chi siamo</span>
              <h2 className="section-title">EVOLVE TECH GROUP</h2>
              <p className="lead">
                EVOLVE TECH GROUP SRL è un'azienda innovativa che si basa sulla forte 
                esperienza dei propri tecnici e consulenti su sistemi ERP, tecnologie 
                Cloud e IoT.
              </p>
              <p>
                Offriamo ai nostri clienti servizi per analizzare le loro sfide 
                aziendali e progettiamo, costruiamo e organizziamo la loro strategia 
                IT utilizzando i migliori standard di IT Project Management e Change 
                Management.
              </p>
              <Link to="/chi-siamo" className="btn btn-secondary">
                Scopri di più su di noi
              </Link>
            </SectionTransition>
            
            <SectionTransition direction="right" className="about-visual">
              <div className="about-hex-grid">
                <div className="about-hex about-hex-1"></div>
                <div className="about-hex about-hex-2"></div>
                <div className="about-hex about-hex-3"></div>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-cta">
        <div className="cta-hex-bg"></div>
        <div className="container">
          <SectionTransition direction="up">
            <div className="cta-content">
              <h2>Ti Supportiamo Ovunque Tu Sia</h2>
              <p>
                Hai un progetto in mente? Parliamone insieme. 
                Il nostro team è pronto ad aiutarti.
              </p>
              <div className="cta-buttons">
                <Link to="/contatti" className="btn btn-primary">
                  Contattaci ora
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <a href="mailto:amministrazione@evolvetechgrp.com" className="btn btn-outline">
                  amministrazione@evolvetechgrp.com
                </a>
              </div>
            </div>
          </SectionTransition>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
