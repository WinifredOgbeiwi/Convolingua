import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import SEO from '../components/SEO'
import Animate from '../components/Animate'
import { getPageSeo, ROUTES } from '../data/siteContent'
import { useTranslation } from '../i18n/useTranslation'

export default function ForgotPasswordPage() {
  const { t } = useTranslation()
  const seo = getPageSeo('forgotPassword', t)
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSuccess(false)

    if (!email.trim()) {
      setError(t('forgotPassword.errorRequired'))
      return
    }

    setSubmitting(true)
    // UI-only reset for now — wire to a real auth service later.
    window.setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
    }, 600)
  }

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />

      <div className="login-page">
        <div className="container login-shell">
          <Animate className="login-card is-visible">
            <div className="login-brand">
              <span className="login-eyebrow">ConvoLingua</span>
              <h1 className="login-title">{t('forgotPassword.title')}</h1>
              <p className="login-lead">{t('forgotPassword.lead')}</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="forgot-email">{t('forgotPassword.email')}</label>
                <input
                  id="forgot-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={t('forgotPassword.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {error ? (
                <p className="login-error" role="alert">
                  {error}
                </p>
              ) : null}

              {success ? (
                <p className="login-success" role="status">
                  {t('forgotPassword.success')}
                </p>
              ) : null}

              <button type="submit" className="btn btn-primary login-submit" disabled={submitting}>
                {t('forgotPassword.submit')}
                <HiArrowRight aria-hidden />
              </button>
            </form>

            <div className="login-footer">
              <Link to={ROUTES.login} className="login-link-btn">
                {t('forgotPassword.backToLogin')}
              </Link>
            </div>
          </Animate>
        </div>
      </div>
    </>
  )
}
