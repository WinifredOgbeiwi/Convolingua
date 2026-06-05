import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiCheckCircle } from 'react-icons/hi'
import { sendContactForm, isContactEmailJsConfigured } from '../../services/emailjs'

const INTEREST_OPTIONS = [
  { value: 'assessment', label: 'Free assessment test' },
  { value: 'business', label: 'Business English' },
  { value: 'corporate', label: 'Corporate training' },
  { value: 'exam', label: 'Exam preparation' },
  { value: 'executive', label: 'Executive coaching' },
  { value: 'other', label: 'Not sure yet' },
]

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    const form = e.target
    const data = new FormData(form)

    try {
      await sendContactForm({
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        company: data.get('company'),
        interest: data.get('interest'),
        message: data.get('message'),
      })
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(
        err?.message ||
          'We could not send your message. Please try again or email us directly.',
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-panel-body contact-panel-success">
        <div className="contact-success-icon" aria-hidden>
          <HiCheckCircle size={56} />
        </div>
        <h3>Message sent</h3>
        <p>
          Thank you for reaching out. We will reply within one business day with next
          steps for your program or assessment.
        </p>
        <div className="contact-success-actions">
          <Link to="/assessment" className="btn btn-primary">
            Take free assessment
          </Link>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setStatus('idle')}
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-panel-body">
      <div className="contact-panel-form-header">
        <h2>Send a message</h2>
        <p>Fill in the form and we will get back to you shortly.</p>
      </div>

      <form className="contact-form-fields" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="first-name">First name</label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              required
              disabled={status === 'sending'}
            />
          </div>
          <div className="form-field">
            <label htmlFor="last-name">Last name</label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              required
              disabled={status === 'sending'}
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="contact-email">Work email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            disabled={status === 'sending'}
          />
        </div>

        <div className="form-field">
          <label htmlFor="company">Company (optional)</label>
          <input
            id="company"
            name="company"
            type="text"
            disabled={status === 'sending'}
          />
        </div>

        <div className="form-field">
          <label htmlFor="interest">I am interested in</label>
          <select
            id="interest"
            name="interest"
            required
            defaultValue=""
            disabled={status === 'sending'}
          >
            <option value="" disabled>
              Select a program
            </option>
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field form-field-grow">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your goals, timeline, and current level..."
            disabled={status === 'sending'}
          />
        </div>

        {status === 'error' && (
          <p className="contact-form-error" role="alert">
            {error}
            {!isContactEmailJsConfigured() && (
              <>
                {' '}
                Add <code>VITE_EMAILJS_CONTACT_TEMPLATE_ID</code> to your{' '}
                <code>.env</code> file.
              </>
            )}
          </p>
        )}

        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block contact-form-submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </div>
  )
}
