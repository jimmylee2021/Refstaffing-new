import { useEffect } from 'react'
import './App.css'
import AboutUsPage from './components/pages/AboutUsPage'
import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'
import BenefitsSection from './components/sections/BenefitsSection'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'

function App() {
  const isAboutPage = window.location.pathname.replace(/\/+$/, '') === '/about-us'

  useEffect(() => {
    document.title = isAboutPage
      ? 'About Us | REF Staffing Ltd'
      : 'REF Staffing Ltd | Healthcare & Social Care Staffing'
  }, [isAboutPage])

  return (
    <div className="site-shell">
      <SiteHeader activePage={isAboutPage ? 'about' : 'home'} />
      {isAboutPage ? (
        <AboutUsPage />
      ) : (
        <>
          <main>
            <HeroSection />
            <BenefitsSection />
            <ServicesSection />
          </main>
          <SiteFooter />
        </>
      )}
    </div>
  )
}

export default App
