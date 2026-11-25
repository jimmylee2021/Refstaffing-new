function AboutHero() {
  return (
    <section className="about-hero" id="home">
      <div className="about-hero-content">
        <h1>About REF Staffing Ltd</h1>
        <p>
          REF Staffing Ltd is an independent healthcare and social care staffing
          business based in Leicester, England.
        </p>
        <div className="about-hero-links">
          <span>Healthcare</span>
          <a href="/#services">
            Our services
            <img src="/assets/arrow-right.svg" alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
