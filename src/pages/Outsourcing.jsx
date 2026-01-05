import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTransition, { StaggerContainer, StaggerItem } from '../components/SectionTransition/SectionTransition'
import './Pages.css'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

const services = [
  {
    title: "IT Staff Augmentation",
    description: "Potenzia il tuo team IT con professionisti qualificati, integrandoli rapidamente nei tuoi progetti per garantire continuità e competenze specializzate.",
    icon: "👥",
    features: ["Sviluppatori senior", "System administrators", "DevOps engineers", "Cloud architects"]
  },
  {
    title: "Recruiting Specializzato IT",
    description: "Selezioniamo i migliori talenti del settore tecnologico attraverso un processo di recruiting mirato e approfondito.",
    icon: "🎯",
    features: ["Screening tecnico avanzato", "Valutazione soft skills", "Tempi di selezione ridotti", "Garanzia di sostituzione"]
  },
  {
    title: "Team Dedicati",
    description: "Creiamo e gestiamo team completi dedicati ai tuoi progetti, con competenze verticali e orizzontali integrate.",
    icon: "🚀",
    features: ["Project management incluso", "Team scalabili", "Metodologie Agile", "Reporting continuo"]
  },
  {
    title: "Consulenza HR Tech",
    description: "Supportiamo la tua azienda nella definizione delle strategie di talent acquisition e nella strutturazione dei team IT.",
    icon: "💼",
    features: ["Analisi fabbisogni", "Job description tecniche", "Benchmark retributivi", "Piani di crescita"]
  }
]

const benefits = [
  {
    title: "Velocità di Inserimento",
    description: "Riduciamo drasticamente i tempi di ricerca e selezione grazie al nostro network di professionisti IT qualificati.",
    icon: "⚡"
  },
  {
    title: "Competenze Certificate",
    description: "Tutti i nostri candidati vengono valutati tecnicamente dal nostro team di esperti prima di essere proposti.",
    icon: "✓"
  },
  {
    title: "Flessibilità Contrattuale",
    description: "Offriamo diverse formule: time & material, progetti chiavi in mano, o inserimento diretto in azienda.",
    icon: "🔄"
  },
  {
    title: "Supporto Continuo",
    description: "Non ci limitiamo all'inserimento: seguiamo l'integrazione e la crescita delle risorse nel tempo.",
    icon: "🤝"
  }
]

const profiles = [
  "Software Developer (Java, .NET, Python, JavaScript)",
  "Frontend Developer (React, Angular, Vue.js)",
  "Backend Developer (Node.js, Spring, Django)",
  "Full Stack Developer",
  "Mobile Developer (iOS, Android, Flutter)",
  "DevOps Engineer",
  "Cloud Architect (AWS, Azure, GCP)",
  "Data Engineer & Data Scientist",
  "Cybersecurity Specialist",
  "ERP Consultant (SAP, Oracle, Microsoft Dynamics)",
  "System Administrator",
  "IT Project Manager"
]

const Outsourcing = () => {
  return (
    <motion.div
      className="page page-outsourcing"
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
            <span className="page-hero-label">Outsourcing & Ricerca Personale</span>
            <h1 className="page-hero-title">Il Talento Giusto per il Tuo Business</h1>
            <p className="page-hero-subtitle">
              Selezioniamo e forniamo professionisti IT qualificati per supportare 
              la crescita e l'innovazione della tua azienda
            </p>
          </SectionTransition>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <SectionTransition direction="up">
            <div className="section-header">
              <span className="section-label">I Nostri Servizi</span>
              <h2 className="section-title">Soluzioni per Ogni Esigenza</h2>
            </div>
          </SectionTransition>

          <StaggerContainer className="services-grid outsourcing-services" staggerDelay={0.15}>
            {services.map((service, index) => (
              <StaggerItem key={index} direction="up">
                <div className="service-card outsourcing-card">
                  <span className="service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Profiles */}
      <section className="section section-dark">
        <div className="container">
          <SectionTransition direction="up">
            <div className="section-header">
              <span className="section-label">Figure Professionali</span>
              <h2 className="section-title">Profili che Selezioniamo</h2>
              <p className="section-subtitle">
                Un ampio ventaglio di competenze IT per coprire ogni area tecnologica
              </p>
            </div>
          </SectionTransition>

          <StaggerContainer className="profiles-grid" staggerDelay={0.05}>
            {profiles.map((profile, index) => (
              <StaggerItem key={index} direction="up">
                <div className="profile-tag">
                  {profile}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <SectionTransition direction="up">
            <div className="section-header">
              <span className="section-label">Perché Sceglierci</span>
              <h2 className="section-title">I Vantaggi del Nostro Approccio</h2>
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

      {/* CTA */}
      <section className="section section-dark">
        <div className="container">
          <SectionTransition direction="up">
            <div className="page-cta">
              <h2>Hai Bisogno di Professionisti IT?</h2>
              <p>
                Raccontaci le tue esigenze: analizzeremo insieme il profilo ideale 
                e ti presenteremo i candidati più adatti al tuo progetto.
              </p>
              <Link to="/contatti" className="btn btn-primary">
                Richiedi una Consulenza
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

export default Outsourcing

