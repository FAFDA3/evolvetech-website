import { motion } from 'framer-motion'
import SectionTransition from '../components/SectionTransition/SectionTransition'
import './Pages.css'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

const CookiePolicy = () => {
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
            <h1 className="page-hero-title">Cookie Policy</h1>
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
              <h2>1. Cosa sono i Cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti web visitati inviano al 
                terminale dell'utente (computer, tablet, smartphone), dove vengono memorizzati 
                per essere poi ritrasmessi agli stessi siti in occasione di visite successive.
              </p>

              <h2>2. Tipologie di Cookie Utilizzati</h2>
              <p>
                Questo sito web utilizza esclusivamente <strong>cookie tecnici</strong>, 
                ovvero cookie necessari per il corretto funzionamento del sito.
              </p>
              
              <h3>2.1 Cookie Tecnici</h3>
              <p>
                I cookie tecnici sono indispensabili per il corretto funzionamento del sito 
                e sono utilizzati per:
              </p>
              <ul>
                <li>Memorizzare le preferenze di navigazione dell'utente</li>
                <li>Gestire la sessione di navigazione</li>
                <li>Garantire la sicurezza delle operazioni sul sito</li>
              </ul>
              
              <div className="cookie-table">
                <table>
                  <thead>
                    <tr>
                      <th>Nome Cookie</th>
                      <th>Finalità</th>
                      <th>Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>evolve-cookie-consent</td>
                      <td>Memorizza il consenso ai cookie</td>
                      <td>1 anno</td>
                    </tr>
                    <tr>
                      <td>evolve-intro-shown</td>
                      <td>Evita di mostrare l'animazione di intro più volte nella sessione</td>
                      <td>Sessione</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>3. Cookie NON Utilizzati</h2>
              <p>
                Questo sito <strong>NON utilizza</strong>:
              </p>
              <ul>
                <li><strong>Cookie di profilazione:</strong> non tracciamo le preferenze degli utenti 
                per scopi pubblicitari</li>
                <li><strong>Cookie analitici di terze parti:</strong> non utilizziamo Google Analytics 
                o servizi simili</li>
                <li><strong>Pixel di tracciamento:</strong> non utilizziamo Facebook Pixel, 
                LinkedIn Insight Tag o simili</li>
                <li><strong>Cookie di social network:</strong> non sono presenti pulsanti social 
                che trasmettono dati a terze parti</li>
              </ul>

              <h2>4. Base Giuridica</h2>
              <p>
                L'installazione dei cookie tecnici non richiede il consenso preventivo 
                dell'utente in quanto necessari per erogare il servizio richiesto 
                (art. 122 D.Lgs. 196/2003 e art. 6.1.f GDPR).
              </p>

              <h2>5. Come Gestire i Cookie</h2>
              <p>
                L'utente può gestire le preferenze relative ai cookie direttamente 
                all'interno del proprio browser, impedendone l'installazione. 
                Di seguito i link alle istruzioni per i browser più diffusi:
              </p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>
              <p>
                <strong>Nota:</strong> la disattivazione dei cookie tecnici potrebbe compromettere 
                il corretto funzionamento del sito.
              </p>

              <h2>6. Aggiornamenti</h2>
              <p>
                La presente Cookie Policy può essere soggetta a modifiche. 
                Si consiglia di consultare periodicamente questa pagina.
              </p>

              <h2>7. Contatti</h2>
              <p>
                Per qualsiasi domanda relativa alla presente Cookie Policy, 
                è possibile contattarci a:
              </p>
              <address>
                <strong>EVOLVE TECH GROUP SRL</strong><br />
                Via Del Fosso Del Poggio, 96<br />
                00137 Roma (RM) - Italia<br />
                Email: <a href="mailto:amministrazione@evolvetechgrp.com">amministrazione@evolvetechgrp.com</a>
              </address>

              <h2>8. Riferimenti Normativi</h2>
              <ul>
                <li>Regolamento UE 2016/679 (GDPR)</li>
                <li>D.Lgs. 196/2003 (Codice Privacy) e successive modifiche</li>
                <li>D.Lgs. 69/2012</li>
                <li>Linee Guida del Garante Privacy sui Cookie (10 giugno 2021)</li>
              </ul>
            </div>
          </SectionTransition>
        </div>
      </section>
    </motion.div>
  )
}

export default CookiePolicy



