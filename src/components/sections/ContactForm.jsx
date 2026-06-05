import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiCheckCircle } from 'react-icons/hi'
import { sendContactForm } from '../../services/emailjs'
import { getContactFormError } from '../../utils/formErrors'
import { useTranslation } from '../../i18n/useTranslation'

const INTEREST_KEYS = ['assessment', 'business', 'corporate', 'exam', 'executive', 'other']

export default function ContactForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    const form = e.target

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setStatus('sending')
    const data = new FormData(form)
    const interestKey = data.get('interest')

    try {
      await sendContactForm({
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        company: data.get('company'),
        interest: interestKey,
        interestLabel: t(`contact.interests.${interestKey}`),
        message: data.get('message'),
      })
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(getContactFormError(err))
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-panel-body contact-panel-success">
        <div className="contact-success-icon" aria-hidden>
          <HiCheckCircle size={56} />
        </div>
        <h3>{t('contact.successTitle')}</h3>
        <p>{t('contact.successText')}</p>
        <div className="contact-success-actions">
          <Link to="/assessment" className="btn btn-primary">
            {t('contact.takeAssessment')}
          </Link>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setStatus('idle')}
          >
            {t('contact.sendAnother')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-panel-body">
      <div className="contact-panel-form-header">
        <h2>{t('contact.formTitle')}</h2>
        <p>{t('contact.formLead')}</p>
      </div>

      <form className="contact-form-fields" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="first-name">{t('contact.firstName')}</label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              required
              disabled={status === 'sending'}
            />
          </div>
          <div className="form-field">
            <label htmlFor="last-name">{t('contact.lastName')}</label>
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
          <label htmlFor="contact-email">{t('contact.workEmail')}</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            disabled={status === 'sending'}
          />
        </div>

        <div className="form-field">
          <label htmlFor="company">{t('contact.company')}</label>
          <input
            id="company"
            name="company"
            type="text"
            disabled={status === 'sending'}
          />
        </div>

        <div className="form-field">
          <label htmlFor="interest">{t('contact.interest')}</label>
          <select
            id="interest"
            name="interest"
            required
            defaultValue=""
            disabled={status === 'sending'}
          >
            <option value="" disabled>
              {t('contact.selectProgram')}
            </option>
            {INTEREST_KEYS.map((key) => (
              <option key={key} value={key}>
                {t(`contact.interests.${key}`)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field form-field-grow">
          <label htmlFor="message">{t('contact.message')}</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={t('contact.messagePlaceholder')}
            disabled={status === 'sending'}
          />
        </div>

        {status === 'error' && (
          <p className="contact-form-error" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block contact-form-submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? t('contact.sending') : t('contact.send')}
        </button>
      </form>
    </div>
  )
}
