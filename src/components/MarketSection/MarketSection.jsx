import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './MarketSection.css'

const MarketSection = ({ markets }) => {
  return (
    <section className="markets-section" id="markets">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Presenti in più <span>mercati</span></h2>
          <p>EvolveTech ha una comprovata esperienza nella realizzazione di infrastrutture per diversi settori strategici</p>
        </motion.div>

        <div className="markets-grid">
          {markets.map((market, index) => (
            <motion.div
              key={market.id}
              className="market-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="market-image">
                <div className="market-overlay"></div>
                <div className="market-icon">{market.icon}</div>
              </div>
              <div className="market-content">
                <h3>{market.title}</h3>
                <p>{market.description}</p>
                <Link to={`/mercati#${market.id}`} className="market-link">
                  Scopri di più
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="markets-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/mercati" className="btn btn-secondary">
            Approfondisci tutti i mercati
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default MarketSection


