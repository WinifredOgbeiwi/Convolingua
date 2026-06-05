import { Link } from 'react-router-dom'
import { IMAGES } from '../../utilities'
import { HiCheck } from 'react-icons/hi'
import Animate from '../Animate'
import { useTranslation } from '../../i18n/useTranslation'

export default function CorporateTraining() {
  const { t } = useTranslation()
  const benefits = t('corporate.benefits') || []

  return (
    <section className="section corporate-section">
      <div className="container split-inner">
        <Animate className="split-image">
          <img
            src={IMAGES.Corporate}
            alt={t('corporate.imageAlt')}
            loading="lazy"
          />
        </Animate>

        <Animate className="split-content" delay={120}>
          <span className="section-label">{t('corporate.label')}</span>
          <h2>{t('corporate.title')}</h2>
          <p>{t('corporate.p1')}</p>
          <p>{t('corporate.p2')}</p>

          <ul className="check-list">
            {benefits.map((item) => (
              <li key={item}>
                <span className="check-icon">
                  <HiCheck size={12} aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Link to="/contact" className="btn btn-primary btn-lg">
            {t('corporate.cta')}
          </Link>
        </Animate>
      </div>
    </section>
  )
}
