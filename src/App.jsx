import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import IntroAnimation from './components/IntroAnimation/IntroAnimation'
import CookieBanner from './components/CookieBanner/CookieBanner'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Soluzioni from './pages/Soluzioni'
import Mercati from './pages/Mercati'
import Partner from './pages/Partner'
import Contatti from './pages/Contatti'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [appLoaded, setAppLoaded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Check if intro was already shown in this session
    const introShown = sessionStorage.getItem('evolve-intro-shown')
    if (introShown) {
      setShowIntro(false)
      setAppLoaded(true)
    }
  }, [])

  const handleIntroComplete = () => {
    sessionStorage.setItem('evolve-intro-shown', 'true')
    setShowIntro(false)
    setTimeout(() => setAppLoaded(true), 100)
  }

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      {/* Intro Animation */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      {/* Main App */}
      <div className={`app ${appLoaded ? 'loaded' : ''}`}>
        <Header />
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/soluzioni" element={<Soluzioni />} />
              <Route path="/mercati" element={<Mercati />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/contatti" element={<Contatti />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </>
  )
}

export default App
