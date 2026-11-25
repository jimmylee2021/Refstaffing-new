import { aboutAims } from '../../../data/aboutContent'

function AimSection() {
  return (
    <section className="aim-section">
      <h2>Our Aim</h2>
      <div className="aim-grid">
        {aboutAims.map((aim) => (
          <article className="aim-card" key={aim.title}>
            <div className="aim-card-heading">
              <h3>{aim.title}</h3>
              <a href="/#services" aria-label={`Explore services: ${aim.title}`}>
                <img src="/assets/about/about-arrow-up-right.svg" alt="" aria-hidden="true" />
              </a>
            </div>
            <img src={aim.image} alt={aim.alt} />
          </article>
        ))}
      </div>
    </section>
  )
}

export default AimSection
