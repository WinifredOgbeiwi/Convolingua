import { Link } from 'react-router-dom'
import { HiCheck } from 'react-icons/hi'
import Animate from '../Animate'
import { useTranslation } from '../../i18n/useTranslation'
import { IMAGES, getSectionCta } from '../../data/siteContent'

export default function CorporateTraining() {
  const { t } = useTranslation()
  const benefits = t('corporate.benefits') || []
  const cta = getSectionCta('corporate', t)

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

          <Link to={cta.to} className={cta.className}>
            {cta.label}
          </Link>
        </Animate>
      </div>
    </section>
  )
}
