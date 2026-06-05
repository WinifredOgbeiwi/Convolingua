import { Link } from 'react-router-dom'
import { HiCheck } from 'react-icons/hi'
import Animate from '../Animate'
import { useTranslation } from '../../i18n/useTranslation'
import { getPricingPlans } from '../../data/siteContent'

export default function Pricing() {
  const { t } = useTranslation()
  const plans = getPricingPlans(t)

  return (
    <section id="pricing" className="section">
      <div className="container">
        <Animate className="section-header">
          <span className="section-label">{t('pricing.label')}</span>
          <h2 className="section-title">{t('pricing.title')}</h2>
          <p className="section-desc">{t('pricing.desc')}</p>
        </Animate>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <Animate
              key={plan.id}
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              delay={i * 90}
            >
              {plan.featured && <span className="pricing-badge">{t('pricing.popular')}</span>}
              <h3>{plan.name}</h3>
              <div className="pricing-price">
                {plan.priceType === 'custom' ? (
                  t('pricing.custom')
                ) : (
                  <>
                    ${plan.price}
                    <span>{t('pricing.perMonth')}</span>
                  </>
                )}
              </div>
              <p className="pricing-desc">{plan.description}</p>
              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="check-icon">
                      <HiCheck size={12} aria-hidden />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={plan.link.to}
                className={`btn btn-block ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
              >
                {plan.ctaLabel}
              </Link>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  )
}
