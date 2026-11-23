import { services } from '../../data/siteContent'
import ArrowLink from '../shared/ArrowLink'

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="section-intro">
        <span className="section-label">Why us?</span>
        <h2>Staffing Support for Care Providers</h2>
        <p>
          We provide healthcare assistants, care assistants and support workers,
          subject to client requirements, worker suitability, compliance
          clearance and availability.
        </p>
      </div>

      <div className="service-list">
        {services.map((service, index) => (
          <article className="service-row" key={service.title}>
            <div className="service-copy">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {index === services.length - 1 && (
                <div className="service-actions" id="join">
                  <ArrowLink href="mailto:info@refstaffingltd.co.uk?subject=Staffing%20request">
                    Request staff
                  </ArrowLink>
                  <ArrowLink href="mailto:info@refstaffingltd.co.uk?subject=Join%20the%20team">
                    Join the team
                  </ArrowLink>
                </div>
              )}
            </div>
            <img className="service-image" src={service.image} alt={service.alt} />
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
