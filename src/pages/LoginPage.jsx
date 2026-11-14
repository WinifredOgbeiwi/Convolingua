import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiEye, HiEyeOff } from 'react-icons/hi'
import SEO from '../components/SEO'
import Animate from '../components/Animate'
import { getPageSeo, ROUTES } from '../data/siteContent'
import { useTranslation } from '../i18n/useTranslation'

export default function LoginPage() {
  const { t } = useTranslation()
  const seo = getPageSeo('login', t)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setError('')

    if (!email.trim() || !password) {
      setError(t('login.errorRequired'))
      return
    }

    setSubmitting(true)
    // UI-only login for now — wire to a real auth service later.
    window.setTimeout(() => {
      setSubmitting(false)
      setError(t('login.errorInvalid'))
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
              <h1 className="login-title">{t('login.title')}</h1>
              <p className="login-lead">{t('login.lead')}</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="login-email">{t('login.email')}</label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={t('login.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-field">
                <label htmlFor="login-password">{t('login.password')}</label>
                <div className="login-password-wrap">
                  <input
                    id="login-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder={t('login.passwordPlaceholder')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="login-password-toggle"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <HiEyeOff size={18} /> : <HiEye size={18} />}
                  </button>
                </div>
              </div>

              {error ? (
                <p className="login-error" role="alert">
                  {error}
                </p>
              ) : null}

              <button type="submit" className="btn btn-primary login-submit" disabled={submitting}>
                {t('login.submit')}
                <HiArrowRight aria-hidden />
              </button>
            </form>

            <div className="login-footer">
              <Link to={ROUTES.forgotPassword} className="login-link-btn">
                {t('login.forgot')}
              </Link>
            </div>
          </Animate>
        </div>
      </div>
    </>
  )
}
