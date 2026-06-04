import { Link } from 'react-router-dom'
import { HiCheck } from 'react-icons/hi2'
import Animate from '../Animate'

const PLANS = [
  {
    name: 'Essential',
    price: '149',
    description: 'For professionals building core business fluency.',
    features: [
      '4 live sessions per month',
      'Self-paced practice library',
      'Email & chat support',
      'Monthly progress report',
    ],
    cta: 'Get started',
    featured: false,
  },
  {
    name: 'Professional',
    price: '299',
    description: 'Our most popular plan for leaders and managers.',
    features: [
      '8 live sessions per month',
      'Industry-specific role-play',
      'Presentation review & feedback',
      'Priority coach matching',
      'Slack / Teams integration',
    ],
    cta: 'Start free trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams scaling English across the organization.',
    features: [
      'Unlimited team seats',
      'Dedicated success manager',
      'Custom curriculum & KPIs',
      'SSO & admin dashboard',
      'On-site workshops available',
    ],
    cta: 'Contact sales',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <Animate className="section-header">
          <span className="section-label">Pricing</span>
          <h2 className="section-title">Invest in communication that moves your career</h2>
          <p className="section-desc">
            Transparent plans with no hidden fees. Upgrade, pause, or switch coaches anytime.
          </p>
        </Animate>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <Animate
              key={plan.name}
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              delay={i * 90}
            >
              {plan.featured && <span className="pricing-badge">Most popular</span>}
              <h3>{plan.name}</h3>
              <div className="pricing-price">
                {plan.price === 'Custom' ? (
                  'Custom'
                ) : (
                  <>
                    ${plan.price}
                    <span> / month</span>
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
                to="/contact"
                className={`btn btn-block ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
              >
                {plan.cta}
              </Link>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  )
}
