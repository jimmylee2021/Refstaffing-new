import { approachSteps } from '../../../data/aboutContent'

function ApproachSection() {
  return (
    <section className="approach-section">
      <div className="approach-inner">
        <div className="approach-heading">
          <span>Our Approach</span>
          <h2>Ongoing Worker And Client Support</h2>
        </div>

        <ol className="approach-list">
          {approachSteps.map((step, index) => (
            <li className="approach-item" key={step.title}>
              <div className="approach-visual">
                <div className="approach-icon">
                  <img src={step.icon} alt="" aria-hidden="true" />
                </div>
                {index < approachSteps.length - 1 && (
                  <img
                    className="approach-connector"
                    src={`/assets/about/${index === 0 ? 'about-timeline-line.svg' : 'about-timeline-line-alt.svg'}`}
                    alt=""
                    aria-hidden="true"
                  />
                )}
                {index === 0 && (
                  <img
                    className="approach-connector approach-connector-accent"
                    src="/assets/about/about-timeline-line-light.svg"
                    alt=""
                    aria-hidden="true"
                  />
                )}
              </div>
              <div>
                <span className="approach-eyebrow">Our Approach</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ApproachSection
