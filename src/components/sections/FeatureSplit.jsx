import { Link } from 'react-router-dom'
import { IMAGES } from '../../utilities'
import { HiCheck } from 'react-icons/hi'
import Animate from '../Animate'
import { useTranslation } from '../../i18n/useTranslation'

export default function FeatureSplit({ showCta = true }) {
  const { t } = useTranslation()
  const benefits = t('method.benefits') || []

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
            <Link to="/courses" className="btn btn-primary btn-lg">
              {t('method.cta')}
            </Link>
          )}
        </Animate>
      </div>
    </section>
  )
}
