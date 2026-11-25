import { useState } from 'react'
import siteLogo from '../../assets/Group 435.svg'
import { services } from '../../data/siteContent'

type SiteHeaderProps = {
  activePage?: 'home' | 'about'
}

function SiteHeader({ activePage = 'home' }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)

  function closeMenus() {
    setMenuOpen(false)
    setCategoriesOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand" href="/#home" onClick={closeMenus} aria-label="Ref Staffing Ltd home">
        <img className="brand-logo" src={siteLogo} alt="" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        <a href="/#home" onClick={closeMenus} aria-current={activePage === 'home' ? 'page' : undefined}>Home</a>
        <a href="/#services" onClick={closeMenus}>Services</a>
        <a href="/about-us" onClick={closeMenus} aria-current={activePage === 'about' ? 'page' : undefined}>About Us</a>
        <a href="/#contact" onClick={closeMenus}>Contact Us</a>
        <div className="category-menu">
          <button
            type="button"
            aria-expanded={categoriesOpen}
            onClick={() => setCategoriesOpen((open) => !open)}
          >
            Categories
            <img src="/assets/chevron-down.svg" alt="" aria-hidden="true" />
          </button>
          {categoriesOpen && (
            <div className="category-dropdown">
              {services.map((service) => (
                <a key={service.title} href="/#services" onClick={closeMenus}>
                  {service.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="header-actions">
        <a
          className="button button-teal header-request"
          href="mailto:info@refstaffingltd.co.uk?subject=Staffing%20request"
        >
          Request Staff
        </a>
        <a className="button button-outline" href="/#contact">Log in</a>
      </div>
    </header>
  )
}

export default SiteHeader
