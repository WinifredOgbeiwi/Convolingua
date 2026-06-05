import { Link } from 'react-router-dom'
import { HiCheck } from 'react-icons/hi'
import Animate from '../Animate'
import { useTranslation } from '../../i18n/useTranslation'
import { IMAGES, getSectionCta } from '../../data/siteContent'

export default function FeatureSplit({ showCta = true }) {
  const { t } = useTranslation()
  const benefits = t('method.benefits') || []
  const cta = getSectionCta('method', t)

  return (
    <section id="method" className="section split">
      <div className="container split-inner">
        <Animate className="split-image">
          <img src={IMAGES.About} alt={t('method.imageAlt')} loading="lazy" />
        </Animate>

        <Animate className="split-content" delay={120}>
          <span className="section-label">{t('method.label')}</span>
          <h2>{t('method.title')}</h2>
          <p>{t('method.p1')}</p>

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

          {showCta && (
            <Link to={cta.to} className={cta.className}>
              {cta.label}
            </Link>
          )}
        </Animate>
      </div>
    </section>
  )
}
