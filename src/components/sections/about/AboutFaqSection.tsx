import { useState } from 'react'
import {
  aboutFaqCategories,
  aboutFaqs,
  type AboutFaqCategory,
} from '../../../data/aboutContent'

function AboutFaqSection() {
  const [activeCategory, setActiveCategory] = useState<AboutFaqCategory>('General')
  const [openQuestion, setOpenQuestion] = useState<string | null>(aboutFaqs[0].question)
  const filteredFaqs =
    activeCategory === 'General'
      ? aboutFaqs
      : aboutFaqs.filter((faq) => faq.category === activeCategory)

  function selectCategory(category: AboutFaqCategory) {
    setActiveCategory(category)
    setOpenQuestion(
      aboutFaqs.find((faq) => faq.category === category)?.question ?? null,
    )
  }

  return (
    <section className="about-faq-section" id="about-faq">
      <div className="about-faq-heading">
        <h2>Frequently Asked Questions</h2>
        <p>
          Clear answers to common questions about our platform, services and
          application.
        </p>
      </div>

      <div className="faq-tabs" role="tablist" aria-label="Frequently asked questions">
        {aboutFaqCategories.map((category) => (
          <button
            key={category}
            id={`faq-tab-${category.toLowerCase()}`}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            aria-controls="faq-list"
            onClick={() => selectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className="faq-list"
        id="faq-list"
        role="tabpanel"
        aria-labelledby={`faq-tab-${activeCategory.toLowerCase()}`}
      >
        {filteredFaqs.map((faq) => {
          const isOpen = openQuestion === faq.question
          const answerId = `faq-answer-${faq.category.toLowerCase()}`

          return (
            <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={faq.question}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
              >
                <img src="/assets/about/about-help.svg" alt="" aria-hidden="true" />
                <span>{faq.question}</span>
                <img
                  className="faq-chevron"
                  src="/assets/chevron-down.svg"
                  alt=""
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div className="faq-answer" id={answerId}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AboutFaqSection
