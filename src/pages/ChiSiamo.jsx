import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTransition, { StaggerContainer, StaggerItem } from '../components/SectionTransition/SectionTransition'
import './Pages.css'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

const values = [
  {
    title: "Innovazione",
    description: "Ricerchiamo costantemente nuove tecnologie e approcci per offrire soluzioni all'avanguardia.",
    icon: "💡"
  },
  {
    title: "Affidabilità",
    description: "Costruiamo relazioni di lungo termine basate sulla fiducia e sulla qualità del nostro lavoro.",
    icon: "🤝"
  },
  {
    title: "Competenza",
    description: "Il nostro team è composto da professionisti con anni di esperienza nel settore IT.",
    icon: "🎯"
  },
  {
    title: "Sostenibilità",
    description: "Progettiamo soluzioni che rispettano l'ambiente e ottimizzano il consumo energetico.",
    icon: "🌱"
  }
]

const milestones = [
  { year: "2021", event: "Fondazione di EVOLVE TECH GROUP SRL" },
  { year: "2022", event: "Prime partnership strategiche nel settore enterprise" },
  { year: "2023", event: "Espansione nel mercato della Pubblica Amministrazione" },
  { year: "2024", event: "Lancio della piattaforma IoT integrata" }
]

const ChiSiamo = () => {
  return (
    <motion.div
      className="page page-chi-siamo"
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
            <span className="page-hero-label">Chi Siamo</span>
            <h1 className="page-hero-title">La Nostra Storia</h1>
            <p className="page-hero-subtitle">
              Un team di professionisti al servizio della trasformazione digitale
            </p>
          </SectionTransition>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <SectionTransition direction="left" className="content-text">
              <h2>EVOLVE TECH GROUP SRL</h2>
              <p className="lead">
                Nata nel 2021, EVOLVE TECH GROUP è un'azienda innovativa che si basa 
                sulla forte esperienza dei propri dipendenti, tecnici e consulenti su 
                sistemi ERP e tecnologie Cloud & IoT.
              </p>
              <p>
                Offriamo ai nostri clienti servizi per analizzare le loro sfide aziendali 
                e progettiamo, costruiamo e organizziamo la loro strategia IT utilizzando 
                i migliori standard di IT Project Management e Change Management.
              </p>
              <p>
                La nostra missione è accompagnare le aziende nel percorso di trasformazione 
                digitale, fornendo soluzioni tecnologiche innovative che generano valore 
                reale per il business.
              </p>
            </SectionTransition>
            
            <SectionTransition direction="right" className="content-visual">
              <div className="hex-visual">
                <div className="hex-item hex-item-1"></div>
                <div className="hex-item hex-item-2"></div>
                <div className="hex-item hex-item-3"></div>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-dark">
        <div className="container">
          <SectionTransition direction="up">
            <div className="section-header">
              <span className="section-label">I Nostri Valori</span>
              <h2 className="section-title">Cosa Ci Guida</h2>
            </div>
          </SectionTransition>

          <StaggerContainer className="values-grid" staggerDelay={0.1}>
            {values.map((value, index) => (
              <StaggerItem key={index} direction="up">
                <div className="value-card">
                  <span className="value-icon">{value.icon}</span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container container-narrow">
          <SectionTransition direction="up">
            <div className="section-header">
              <span className="section-label">La Nostra Crescita</span>
              <h2 className="section-title">Timeline</h2>
            </div>
          </SectionTransition>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <SectionTransition 
                key={index} 
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              >
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <span className="timeline-hex"></span>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">{milestone.year}</span>
                    <p>{milestone.event}</p>
                  </div>
                </div>
              </SectionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark">
        <div className="container">
          <SectionTransition direction="up">
            <div className="page-cta">
              <h2>Vuoi Saperne di Più?</h2>
              <p>
                Siamo sempre disponibili per discutere delle tue esigenze e trovare 
                insieme la soluzione migliore per il tuo business.
              </p>
              <Link to="/contatti" className="btn btn-primary">
                Contattaci
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

export default ChiSiamo
