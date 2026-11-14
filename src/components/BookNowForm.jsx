import { useEffect, useId, useState } from 'react'
import { HiCheckCircle } from 'react-icons/hi'
import { sendBookingForm } from '../services/emailjs'
import { getContactFormError } from '../utils/formErrors'
import { useTranslation } from '../i18n/useTranslation'

/**
 * @param {{
 *   program: 'professionals' | 'robotics' | 'kids'
 *   packages: Array<{ id: string, name: string }>
 *   selectedPackage?: string
 *   theme?: 'pp' | 'rp' | 'kp'
 * }} props
 */
export default function BookNowForm({
  program,
  packages = [],
  selectedPackage = '',
  theme = 'pp',
}) {
  const { t } = useTranslation()
  const uid = useId()
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [packageId, setPackageId] = useState(selectedPackage || '')

  useEffect(() => {
    if (selectedPackage) setPackageId(selectedPackage)
  }, [selectedPackage])

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
    const pkgId = String(data.get('package') || '')
    const pkg = packages.find((p) => p.id === pkgId)

    try {
      await sendBookingForm({
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        phone: data.get('phone'),
        program,
        programLabel: t(`booking.programs.${program}`),
        packageId: pkgId,
        packageLabel: pkg?.name || pkgId,
        date: data.get('date'),
        time: data.get('time'),
        notes: data.get('notes'),
      })
      setStatus('success')
      form.reset()
      setPackageId('')
    } catch (err) {
      setStatus('error')
      setError(getContactFormError(err))
    }
  }

  if (status === 'success') {
    return (
      <div className={`book-now book-now--${theme}`} id="book">
        <div className="book-now-success">
          <div className="book-now-success-icon" aria-hidden>
            <HiCheckCircle size={52} />
          </div>
          <h3>{t('booking.successTitle')}</h3>
          <p>{t('booking.successText')}</p>
          <button
            type="button"
            className={`book-now-btn book-now-btn-primary book-now-btn--${theme}`}
            onClick={() => setStatus('idle')}
          >
            {t('booking.bookAnother')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`book-now book-now--${theme}`} id="book">
      <div className="book-now-header">
        <span className="book-now-label">{t('booking.label')}</span>
        <h3 className="book-now-title">{t('booking.title')}</h3>
        <p className="book-now-lead">{t('booking.lead')}</p>
      </div>

      <form className="book-now-form" onSubmit={handleSubmit} noValidate>
        <div className="book-now-row">
          <div className="book-now-field">
            <label htmlFor={`${uid}-first`}>{t('booking.firstName')}</label>
            <input
              id={`${uid}-first`}
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              disabled={status === 'sending'}
            />
          </div>
          <div className="book-now-field">
            <label htmlFor={`${uid}-last`}>{t('booking.lastName')}</label>
            <input
              id={`${uid}-last`}
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              disabled={status === 'sending'}
            />
          </div>
        </div>

        <div className="book-now-row">
          <div className="book-now-field">
            <label htmlFor={`${uid}-email`}>{t('booking.email')}</label>
            <input
              id={`${uid}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={status === 'sending'}
            />
          </div>
          <div className="book-now-field">
            <label htmlFor={`${uid}-phone`}>{t('booking.phone')}</label>
            <input
              id={`${uid}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              disabled={status === 'sending'}
            />
          </div>
        </div>

        <div className="book-now-field">
          <label htmlFor={`${uid}-package`}>{t('booking.package')}</label>
          <select
            id={`${uid}-package`}
            name="package"
            required
            value={packageId}
            onChange={(e) => setPackageId(e.target.value)}
            disabled={status === 'sending'}
          >
            <option value="" disabled>
              {t('booking.selectPackage')}
            </option>
            {packages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.name}
              </option>
            ))}
          </select>
        </div>

        <div className="book-now-row">
          <div className="book-now-field">
            <label htmlFor={`${uid}-date`}>{t('booking.date')}</label>
            <input
              id={`${uid}-date`}
              name="date"
              type="date"
              required
              disabled={status === 'sending'}
            />
          </div>
          <div className="book-now-field">
            <label htmlFor={`${uid}-time`}>{t('booking.time')}</label>
            <input
              id={`${uid}-time`}
              name="time"
              type="time"
              required
              disabled={status === 'sending'}
            />
          </div>
        </div>

        <div className="book-now-field">
          <label htmlFor={`${uid}-notes`}>{t('booking.notes')}</label>
          <textarea
            id={`${uid}-notes`}
            name="notes"
            rows={3}
            placeholder={t('booking.notesPlaceholder')}
            disabled={status === 'sending'}
          />
        </div>

        {status === 'error' && (
          <p className="book-now-error" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          className={`book-now-btn book-now-btn-primary book-now-btn-block book-now-btn--${theme}`}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? t('booking.sending') : t('booking.submit')}
        </button>
      </form>
    </div>
  )
}
