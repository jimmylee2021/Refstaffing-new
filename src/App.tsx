import './App.css'
import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'
import BenefitsSection from './components/sections/BenefitsSection'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ServicesSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
