import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTransition from '../components/SectionTransition/SectionTransition'
import './Pages.css'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    azienda: '',
    messaggio: '',
    privacy: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({
      nome: '',
      cognome: '',
      email: '',
      telefono: '',
      azienda: '',
      messaggio: '',
      privacy: false
    })
  }

  return (
    <motion.div
      className="page page-contatti"
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
            <span className="page-hero-label">Contatti</span>
            <h1 className="page-hero-title">Parliamo del Tuo Progetto</h1>
            <p className="page-hero-subtitle">
              Siamo qui per aiutarti. Compila il form o contattaci direttamente.
            </p>
          </SectionTransition>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <SectionTransition direction="left" className="contact-form-wrapper">
              <h2>Inviaci un Messaggio</h2>
              
              {submitStatus === 'success' ? (
                <div className="form-success">
                  <span className="success-icon">✓</span>
                  <h3>Messaggio Inviato!</h3>
                  <p>Ti risponderemo il prima possibile.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nome">Nome *</label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cognome">Cognome *</label>
                      <input
                        type="text"
                        id="cognome"
                        name="cognome"
                        value={formData.cognome}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefono">Telefono</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="azienda">Azienda</label>
                    <input
                      type="text"
                      id="azienda"
                      name="azienda"
                      value={formData.azienda}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="messaggio">Messaggio *</label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      rows="5"
                      value={formData.messaggio}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="form-group form-checkbox">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="privacy">
                      Ho letto e accetto la <a href="/privacy-policy" target="_blank">Privacy Policy</a> *
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
                    {!isSubmitting && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </SectionTransition>

            {/* Contact Info */}
            <SectionTransition direction="right" className="contact-info">
              <div className="contact-info-card">
                <h3>Informazioni di Contatto</h3>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:amministrazione@evolvetechgrp.com">
                      amministrazione@evolvetechgrp.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Sede Legale</h4>
                    <address>
                      Via Del Fosso Del Poggio, 96<br />
                      00137 Roma (RM)<br />
                      Lazio, Italia
                    </address>
                  </div>
                </div>
              </div>

              <div className="company-info-card">
                <h3>Dati Aziendali</h3>
                <dl>
                  <div>
                    <dt>Ragione Sociale</dt>
                    <dd>EVOLVE TECH GROUP SRL</dd>
                  </div>
                  <div>
                    <dt>Partita IVA</dt>
                    <dd>IT17931691004</dd>
                  </div>
                  <div>
                    <dt>Codice Fiscale</dt>
                    <dd>17931691004</dd>
                  </div>
                  <div>
                    <dt>REA</dt>
                    <dd>RM-1750569</dd>
                  </div>
                </dl>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contatti
