import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTransition, { StaggerContainer, StaggerItem } from '../components/SectionTransition/SectionTransition'
import './Pages.css'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

const markets = [
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Soluzioni complete per grandi aziende che necessitano di infrastrutture IT scalabili, sicure e performanti.",
    useCases: [
      "Data Center Connectivity",
      "Enterprise WiFi Networks",
      "Unified Communications",
      "Smart Office Solutions"
    ],
    icon: "🏢"
  },
  {
    id: "pubblica-amministrazione",
    title: "Pubblica Amministrazione",
    description: "Partner tecnologico per la digitalizzazione della PA, con soluzioni conformi alle normative vigenti.",
    useCases: [
      "Smart City",
      "Connettività scuole",
      "Infrastrutture sanitarie",
      "Digital Government"
    ],
    icon: "🏛️"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Infrastrutture certificate per strutture sanitarie, con focus su affidabilità e sicurezza dei dati.",
    useCases: [
      "Reti ospedaliere",
      "Telemedicina",
      "IoT medicale",
      "Gestione asset sanitari"
    ],
    icon: "🏥"
  },
  {
    id: "retail",
    title: "Retail & GDO",
    description: "Soluzioni omnichannel per il retail moderno, dalla connettività in-store all'analisi dei flussi.",
    useCases: [
      "Store connectivity",
      "Digital signage",
      "Customer analytics",
      "Inventory management"
    ],
    icon: "🛒"
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Tecnologie per hotel e strutture ricettive che migliorano l'esperienza degli ospiti.",
    useCases: [
      "Guest WiFi premium",
      "Smart room",
      "Property management",
      "Servizi digitali"
    ],
    icon: "🏨"
  },
  {
    id: "industry",
    title: "Industry 4.0",
    description: "Soluzioni per la fabbrica intelligente, dall'automazione industriale al monitoraggio predittivo.",
    useCases: [
      "Industrial IoT",
      "Predictive maintenance",
      "Production monitoring",
      "Asset tracking"
    ],
    icon: "🏭"
  }
]

const Mercati = () => {
  return (
    <motion.div
      className="page page-mercati"
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
            <span className="page-hero-label">I Nostri Mercati</span>
            <h1 className="page-hero-title">Settori di Competenza</h1>
            <p className="page-hero-subtitle">
              Esperienza verticale in diversi settori per soluzioni su misura
            </p>
          </SectionTransition>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="section">
        <div className="container">
          <StaggerContainer className="markets-grid" staggerDelay={0.1}>
            {markets.map((market, index) => (
              <StaggerItem key={market.id} direction="up">
                <div className="market-card" id={market.id}>
                  <div className="market-icon">{market.icon}</div>
                  <h3>{market.title}</h3>
                  <p>{market.description}</p>
                  <ul className="market-usecases">
                    {market.useCases.map((useCase, i) => (
                      <li key={i}>
                        <span className="usecase-hex"></span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contatti" className="market-link">
                    Richiedi informazioni
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

      {/* CTA */}
      <section className="section section-dark">
        <div className="container">
          <SectionTransition direction="up">
            <div className="page-cta">
              <h2>Non Trovi il Tuo Settore?</h2>
              <p>
                Le nostre soluzioni sono adattabili a qualsiasi contesto. 
                Contattaci per discutere delle tue esigenze specifiche.
              </p>
              <Link to="/contatti" className="btn btn-primary">
                Parliamo del tuo progetto
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

export default Mercati
