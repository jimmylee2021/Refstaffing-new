import { companyStandards } from '../../../data/aboutContent'

const performanceHighlights = [
  { value: '100%', description: 'Skilled, qualified and competent' },
  { value: '90%', description: 'Skilled support for individuals' },
  { value: '89%', description: 'Dependable staffing when you need it' },
]

function CompanyOverviewSection() {
  return (
    <>
      <section className="about-overview" id="about">
        <div className="overview-copy">
          <h2>Healthcare &amp; Social Care Staffing in Leicester</h2>
          <p>
            REF Staffing Ltd is an independent healthcare and social care staffing
            business based in Leicester, England.
          </p>
          <a className="button button-navy" href="#about-standards">
            Learn more
            <img src="/assets/arrow-up-right.svg" alt="" aria-hidden="true" />
          </a>
        </div>

        <div className="performance-card">
          <h3>Ready to Achieve Result</h3>
          {performanceHighlights.map((highlight, index) => (
            <div className="performance-row" key={highlight.value}>
              <div className="performance-item">
                <strong>{highlight.value}</strong>
                <span>{highlight.description}</span>
              </div>
              {index < performanceHighlights.length - 1 && (
                <img
                  className="performance-rule"
                  src="/assets/about/about-stats-rule.svg"
                  alt=""
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="about-page-label">What we do</div>

      <section className="company-standards" id="about-standards" aria-label="Our standards">
        <img
          className="company-standards-rule"
          src="/assets/about/about-mission-icon.svg"
          alt=""
          aria-hidden="true"
        />
        {companyStandards.map((standard) => (
          <article className="standard-card" key={standard.title}>
            <h3>{standard.title}</h3>
            <p>{standard.description}</p>
          </article>
        ))}
      </section>
    </>
  )
}

export default CompanyOverviewSection
