import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const solutions = [
    { to: '/soluzioni#fibra', label: 'Fibra Ottica' },
    { to: '/soluzioni#wireless', label: 'Reti Wireless' },
    { to: '/soluzioni#smart-building', label: 'Smart Building' },
    { to: '/soluzioni#iot', label: 'IoT & Sensoristica' },
    { to: '/soluzioni#energy', label: 'Efficientamento Energetico' },
    { to: '/soluzioni#cloud', label: 'Cloud Solutions' },
  ]

  const markets = [
    { to: '/mercati#enterprise', label: 'Enterprise' },
    { to: '/mercati#pubblica-amministrazione', label: 'Pubblica Amministrazione' },
    { to: '/mercati#healthcare', label: 'Healthcare' },
    { to: '/mercati#retail', label: 'Retail' },
    { to: '/mercati#hospitality', label: 'Hospitality' },
  ]

  const company = [
    { to: '/chi-siamo', label: 'Chi Siamo' },
    { to: '/partner', label: 'Partner' },
    { to: '/contatti', label: 'Contatti' },
    { to: '/privacy-policy', label: 'Privacy Policy' },
    { to: '/cookie-policy', label: 'Cookie Policy' },
  ]

  return (
    <footer className="footer">
      {/* Hexagon pattern background */}
      <div className="footer-hex-pattern"></div>
      
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col footer-company">
            <Link to="/" className="footer-logo">
              <img src="/logo-evolve.png" alt="EVOLVE TECH GROUP" />
            </Link>
            <p className="footer-tagline">
              Soluzioni digitali innovative per infrastrutture complesse. 
              Trasformiamo le sfide tecnologiche in opportunità di crescita.
            </p>
            
            {/* Contact Info */}
            <div className="footer-contact">
              <a href="mailto:amministrazione@evolvetechgrp.com" className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                amministrazione@evolvetechgrp.com
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="footer-col">
            <h4>Soluzioni</h4>
            <ul>
              {solutions.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div className="footer-col">
            <h4>Mercati</h4>
            <ul>
              {markets.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Azienda</h4>
            <ul>
              {company.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Info */}
        <div className="footer-legal">
          <div className="footer-legal-info">
            <div className="company-name">
              <strong>EVOLVE TECH GROUP SRL</strong>
            </div>
            <div className="company-address">
              Via Del Fosso Del Poggio, 96 — 00137 Roma (RM) — Lazio
            </div>
            <div className="company-data">
              <span>P.IVA IT17931691004</span>
              <span className="separator">|</span>
              <span>C.F. 17931691004</span>
              <span className="separator">|</span>
              <span>REA RM-1750569</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {currentYear} EVOLVE TECH GROUP SRL — Tutti i diritti riservati
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/cookie-policy">Cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
