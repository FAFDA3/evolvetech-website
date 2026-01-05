import { motion } from 'framer-motion'
import SectionTransition from '../components/SectionTransition/SectionTransition'
import './Pages.css'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="page page-legal"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="page-hero page-hero-small">
        <div className="page-hero-hex-bg"></div>
        <div className="container">
          <SectionTransition direction="up">
            <h1 className="page-hero-title">Privacy Policy</h1>
            <p className="page-hero-subtitle">
              Ultimo aggiornamento: Dicembre 2024
            </p>
          </SectionTransition>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow">
          <SectionTransition direction="up">
            <div className="legal-content">
              <h2>1. Titolare del Trattamento</h2>
              <p>
                Il Titolare del trattamento dei dati personali è <strong>EVOLVE TECH GROUP SRL</strong>, 
                con sede legale in Via Del Fosso Del Poggio, 96 - 00137 Roma (RM), P.IVA IT17931691004, 
                C.F. 17931691004, REA RM-1750569.
              </p>
              <p>
                Per qualsiasi informazione relativa al trattamento dei dati personali, è possibile 
                contattarci all'indirizzo email: <a href="mailto:amministrazione@evolvetechgrp.com">amministrazione@evolvetechgrp.com</a>
              </p>

              <h2>2. Tipologie di Dati Raccolti</h2>
              <p>
                Questo sito web raccoglie i seguenti dati personali:
              </p>
              <h3>2.1 Dati forniti volontariamente</h3>
              <ul>
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono (opzionale)</li>
                <li>Nome dell'azienda (opzionale)</li>
                <li>Contenuto del messaggio inviato tramite il form di contatto</li>
              </ul>

              <h3>2.2 Dati di navigazione</h3>
              <p>
                I sistemi informatici preposti al funzionamento di questo sito acquisiscono, 
                nel corso del loro normale esercizio, alcuni dati tecnici la cui trasmissione 
                è implicita nell'uso dei protocolli di comunicazione Internet.
              </p>

              <h2>3. Finalità del Trattamento</h2>
              <p>I dati personali sono trattati per le seguenti finalità:</p>
              <ul>
                <li>Rispondere alle richieste di informazioni inviate tramite il form di contatto</li>
                <li>Fornire i servizi richiesti</li>
                <li>Adempiere agli obblighi di legge</li>
                <li>Garantire il corretto funzionamento del sito web (solo cookie tecnici)</li>
              </ul>

              <h2>4. Base Giuridica del Trattamento</h2>
              <p>
                Il trattamento dei dati personali si basa sul consenso dell'interessato 
                (art. 6.1.a GDPR), sull'esecuzione di misure precontrattuali (art. 6.1.b GDPR) 
                e sul legittimo interesse del titolare (art. 6.1.f GDPR).
              </p>

              <h2>5. Modalità di Trattamento</h2>
              <p>
                I dati personali sono trattati con strumenti automatizzati per il tempo 
                strettamente necessario a conseguire gli scopi per i quali sono stati raccolti.
                Specifiche misure di sicurezza sono adottate per prevenire la perdita dei dati, 
                usi illeciti o non corretti ed accessi non autorizzati.
              </p>

              <h2>6. Cookie Policy</h2>
              <p>
                Questo sito utilizza esclusivamente <strong>cookie tecnici</strong> necessari 
                al suo funzionamento. Non utilizziamo cookie di profilazione o tracciamento.
                Per maggiori dettagli, consulta la nostra <a href="/cookie-policy">Cookie Policy</a>.
              </p>

              <h2>7. Conservazione dei Dati</h2>
              <p>
                I dati personali sono conservati per il tempo strettamente necessario al 
                raggiungimento delle finalità per cui sono stati raccolti o fino alla revoca 
                del consenso da parte dell'interessato.
              </p>

              <h2>8. Diritti dell'Interessato</h2>
              <p>
                In conformità agli articoli 15-22 del GDPR, l'interessato ha diritto di:
              </p>
              <ul>
                <li>Accedere ai propri dati personali</li>
                <li>Richiedere la rettifica dei dati inesatti</li>
                <li>Richiedere la cancellazione dei dati</li>
                <li>Richiedere la limitazione del trattamento</li>
                <li>Opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali</li>
              </ul>

              <h2>9. Modifiche alla Privacy Policy</h2>
              <p>
                Il Titolare si riserva il diritto di apportare modifiche alla presente 
                Privacy Policy in qualunque momento. Gli utenti sono invitati a consultare 
                periodicamente questa pagina.
              </p>

              <h2>10. Contatti</h2>
              <p>
                Per esercitare i propri diritti o per qualsiasi informazione relativa al 
                trattamento dei dati personali, è possibile contattarci ai seguenti recapiti:
              </p>
              <address>
                <strong>EVOLVE TECH GROUP SRL</strong><br />
                Via Del Fosso Del Poggio, 96<br />
                00137 Roma (RM) - Italia<br />
                Email: <a href="mailto:amministrazione@evolvetechgrp.com">amministrazione@evolvetechgrp.com</a>
              </address>
            </div>
          </SectionTransition>
        </div>
      </section>
    </motion.div>
  )
}

export default PrivacyPolicy



