import { Link } from 'react-router-dom'
import { IMAGES } from '../../utilities'
import Animate from '../Animate'
import { useTranslation } from '../../i18n/useTranslation'

export default function CTABand() {
  const { t } = useTranslation()
  const perks = t('cta.perks') || []

  return (
    <section className="cta-section section">
      <div className="container">
        <Animate>
          <div className="cta-card">
            <div className="cta-card-visual">
              <img src={IMAGES.Teacher} alt={t('cta.imageAlt')} loading="lazy" />
              <div className="cta-card-badge">{t('cta.badge')}</div>
            </div>

            <div className="cta-card-content">
              <span className="section-label">{t('cta.label')}</span>
              <h2>{t('cta.title')}</h2>
              <p>{t('cta.desc')}</p>
              <div className="cta-card-actions">
                <Link to="/assessment" className="btn btn-primary btn-lg">
                  {t('cta.assessment')}
                </Link>
                <Link to="/courses" className="btn btn-outline btn-lg">
                  {t('cta.courses')}
                </Link>
              </div>
              <ul className="cta-card-perks">
                {perks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  )
}
