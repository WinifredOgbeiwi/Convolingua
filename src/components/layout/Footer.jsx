import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { useTranslation } from '../../i18n/useTranslation'
import {
  getFooterCompanyLinks,
  getFooterLegalLinks,
  getFooterProgramLinks,
} from '../../data/siteContent'

export default function Footer() {
  const { t } = useTranslation()
  const programLinks = getFooterProgramLinks(t)
  const companyLinks = getFooterCompanyLinks(t)
  const legalLinks = getFooterLegalLinks(t)

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
              {programLinks.map((link) => (
                <li key={link.labelKey}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t('footer.company')}</h4>
            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link.labelKey}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} ConvoLingua. {t('footer.rights')}
          </span>
          <nav className="footer-legal-links" aria-label="Legal">
            {legalLinks.map((link, i) => (
              <span key={link.to} className="footer-legal-item">
                {i > 0 && <span aria-hidden>·</span>}
                <Link to={link.to}>{link.label}</Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
