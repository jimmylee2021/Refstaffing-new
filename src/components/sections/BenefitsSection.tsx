import { benefits } from '../../data/siteContent'

function BenefitsSection() {
  return (
    <section className="about-section" id="about">
      <div className="section-intro">
        <span className="section-label">About us</span>
        <h2>Why Choose REF Staffing Ltd?</h2>
        <p>
          Dependable, compliance-checked staffing solutions built around your
          operational needs.
        </p>
      </div>

      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit.title}>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
            <div className="card-caption">
              <img src="/assets/line.svg" alt="" aria-hidden="true" />
              <span>Experienced Team</span>
            </div>
          </article>
        ))}
      </div>

      <a className="button button-teal services-button" href="#services">
        View Services
      </a>
    </section>
  )
}

export default BenefitsSection
