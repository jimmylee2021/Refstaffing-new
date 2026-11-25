import './AboutUsPage.css'
import SiteFooter from '../layout/SiteFooter'
import AboutFaqSection from '../sections/about/AboutFaqSection'
import AboutHero from '../sections/about/AboutHero'
import AimSection from '../sections/about/AimSection'
import ApproachSection from '../sections/about/ApproachSection'
import CompanyOverviewSection from '../sections/about/CompanyOverviewSection'

function AboutUsPage() {
  return (
    <>
      <main className="about-page">
        <AboutHero />
        <div className="about-page-label">About us</div>
        <CompanyOverviewSection />
        <ApproachSection />
        <AimSection />
        <AboutFaqSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default AboutUsPage
