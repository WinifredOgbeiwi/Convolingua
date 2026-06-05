import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { useTranslation } from '../../i18n/useTranslation'

const PROGRAM_LINKS = [
  { key: 'business', to: '/courses' },
  { key: 'corporate', to: '/courses' },
  { key: 'exam', to: '/courses' },
  { key: 'executive', to: '/courses' },
]

const COMPANY_LINKS = [
  { key: 'about', to: '/about' },
  { key: 'method', to: '/about#method' },
  { key: 'assessment', to: '/assessment' },
  { key: 'contact', to: '/contact' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo className="footer-logo" />
            <p>{t('footer.tagline')}</p>
          </div>

          <div>
            <h4>{t('footer.programs')}</h4>
            <ul className="footer-links">
              {PROGRAM_LINKS.map((link) => (
                <li key={link.key}>
                  <Link to={link.to}>{t(`footer.links.${link.key}`)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t('footer.company')}</h4>
            <ul className="footer-links">
              {COMPANY_LINKS.map((link) => (
                <li key={link.key}>
                  <Link to={link.to}>{t(`footer.links.${link.key}`)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} ConvoLingua. {t('footer.rights')}
          </span>
          <span>{t('footer.legal')}</span>
        </div>
      </div>
    </footer>
  )
}
