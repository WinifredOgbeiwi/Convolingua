import { Link } from 'react-router-dom'
import { HiCheck } from 'react-icons/hi'
import Animate from '../Animate'
import { useTranslation } from '../../i18n/useTranslation'

const PLAN_KEYS = ['essential', 'professional', 'enterprise']
const PRICES = { essential: '149', professional: '299', enterprise: 'Custom' }

export default function Pricing() {
  const { t } = useTranslation()

  return (
    <section id="pricing" className="section">
      <div className="container">
        <Animate className="section-header">
          <span className="section-label">{t('pricing.label')}</span>
          <h2 className="section-title">{t('pricing.title')}</h2>
          <p className="section-desc">{t('pricing.desc')}</p>
        </Animate>

        <div className="pricing-grid">
          {PLAN_KEYS.map((key, i) => {
            const plan = t(`pricing.plans.${key}`)
            const featured = key === 'professional'
            const price = PRICES[key]

            return (
              <Animate
                key={key}
                className={`pricing-card ${featured ? 'featured' : ''}`}
                delay={i * 90}
              >
                {featured && <span className="pricing-badge">{t('pricing.popular')}</span>}
                <h3>{plan.name}</h3>
                <div className="pricing-price">
                  {price === 'Custom' ? (
                    t('pricing.custom')
                  ) : (
                    <>
                      ${price}
                      <span>{t('pricing.perMonth')}</span>
                    </>
                  )}
                </div>
                <p className="pricing-desc">{plan.description}</p>
                <ul className="pricing-features">
                  {(plan.features || []).map((feature) => (
                    <li key={feature}>
                      <span className="check-icon">
                        <HiCheck size={12} aria-hidden />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={key === 'enterprise' ? '/contact' : '/assessment'}
                  className={`btn btn-block ${featured ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {key === 'enterprise' ? plan.cta : t('pricing.assessmentCta')}
                </Link>
              </Animate>
            )
          })}
        </div>
      </div>
    </section>
  )
}
