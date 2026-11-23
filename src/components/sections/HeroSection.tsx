import ArrowLink from '../shared/ArrowLink'

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Healthcare and <span>Social Care Staffing</span> You Can Depend On
        </h1>
        <p>
          REF Staffing Ltd supplies carefully selected, compliance-checked agency
          workers to healthcare and social care organisations in Leicester and
          surrounding areas.
        </p>
        <div className="hero-actions">
          <a
            className="button button-navy"
            href="mailto:info@refstaffingltd.co.uk?subject=Staffing%20request"
          >
            Request Staff
          </a>
          <ArrowLink href="mailto:info@refstaffingltd.co.uk?subject=Join%20the%20team">
            Join The Team
          </ArrowLink>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
