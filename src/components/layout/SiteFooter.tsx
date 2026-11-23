import { useState, type FormEvent } from 'react'

function SiteFooter() {
  const [question, setQuestion] = useState('')

  function submitQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent('Quick question')
    const body = encodeURIComponent(question.trim())
    window.location.href = `mailto:info@refstaffingltd.co.uk?subject=${subject}&body=${body}`
  }

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-brand-heading">
            <img src="/assets/ref-staffing-footer.png" alt="" />
            <strong>Ref Staffing Ltd</strong>
          </div>
          <p>Healthcare and Social Care Staffing<br />Leicester, England</p>
        </div>

        <div className="footer-column">
          <h2>Company</h2>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact us</a>
          <a href="#join">Recruitment</a>
          <a href="#contact">Request Staff</a>
        </div>

        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <a href="mailto:info@refstaffingltd.co.uk">info@refstaffingltd.co.uk</a>
          <span>Leicester, United Kingdom</span>
          <a href="tel:+441165043161">Telephone: 0116 504 3161</a>
          <a href="https://wa.me/447494128302">WhatsApp: +44 7494 128302</a>
        </div>

        <div className="footer-column">
          <h2>Socials</h2>
          <a href="#contact">Instagram</a>
          <a href="#contact">TikTok</a>
          <a href="#contact">LinkedIn</a>
          <a href="#contact">Twitter</a>
        </div>

        <div className="footer-question">
          <h2>Quick Question?</h2>
          <p>Do you have any question for us? Send us a quick email.</p>
          <form onSubmit={submitQuestion}>
            <label className="visually-hidden" htmlFor="quick-question">Your question</label>
            <input
              id="quick-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="How do I apply?"
              required
            />
            <button type="submit" aria-label="Send your question">
              <img src="/assets/arrow-right.svg" alt="" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Copyright © 2026 REF Staffing L.T.D. All rights reserved.</span>
        <div>
          <a href="#contact">Terms of Use</a>
          <a href="#contact">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
