import { useState } from 'react'
import Animate from '../Animate'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-success">
        <h3>Thank you for reaching out</h3>
        <p>We will respond within one business day to schedule your assessment.</p>
      </div>
    )
  }

  return (
    <Animate>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="first-name">First name</label>
            <input id="first-name" name="firstName" type="text" required />
          </div>
          <div className="form-field">
            <label htmlFor="last-name">Last name</label>
            <input id="last-name" name="lastName" type="text" required />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="form-field">
          <label htmlFor="company">Company (optional)</label>
          <input id="company" name="company" type="text" />
        </div>
        <div className="form-field">
          <label htmlFor="interest">I am interested in</label>
          <select id="interest" name="interest" required defaultValue="">
            <option value="" disabled>
              Select a program
            </option>
            <option value="business">Business English</option>
            <option value="corporate">Corporate training</option>
            <option value="exam">Exam preparation</option>
            <option value="executive">Executive coaching</option>
            <option value="other">Not sure yet</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} placeholder="Tell us about your goals..." />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Send message
        </button>
      </form>
    </Animate>
  )
}
