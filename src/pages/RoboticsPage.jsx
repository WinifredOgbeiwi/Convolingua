import { useState } from 'react'
import { HiCheck } from 'react-icons/hi'
import SEO from '../components/SEO'
import Animate from '../components/Animate'
import BookNowForm from '../components/BookNowForm'
import RoboticsArt from '../components/home/RoboticsArt'
import RoboticsHud from '../components/home/RoboticsHud'
import { getPageSeo, getRoboticsPage } from '../data/siteContent'
import { useTranslation } from '../i18n/useTranslation'

export default function RoboticsPage() {
  const { t } = useTranslation()
  const seo = getPageSeo('robotics', t)
  const page = getRoboticsPage(t)
  const [selectedPackage, setSelectedPackage] = useState('')

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />

      <div className="rp">
        <section className="rp-hero">
          <div className="rp-hero-bg" aria-hidden />
          <Animate className="rp-hero-copy">
            <span className="rp-tag">{page.tag}</span>
            <h1 className="rp-title">{page.title}</h1>
            <p className="rp-lead">{page.lead}</p>
            <p className="rp-ages">{page.ages}</p>
            <div className="rp-hero-actions">
              <a href="#pricing" className="rp-btn rp-btn-primary">
                {page.ctaPricing}
              </a>
              <a href="#book" className="rp-btn rp-btn-ghost">
                {page.ctaBook}
              </a>
            </div>
          </Animate>

          <Animate className="rp-hero-media" delay={120}>
            <RoboticsHud />
            <RoboticsArt />
            <span className="rp-hero-badge">{page.badge}</span>
          </Animate>
        </section>

        <section className="rp-facts" aria-label={page.title}>
          <div className="container rp-facts-grid">
            {page.facts.map((fact, i) => (
              <Animate key={fact.title} className="rp-fact" delay={i * 60}>
                <span className="rp-fact-index" aria-hidden>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <strong>{fact.title}</strong>
                <p>{fact.text}</p>
              </Animate>
            ))}
          </div>
        </section>

        <section className="rp-section rp-gallery">
          <div className="container">
            <Animate className="rp-section-header">
              <span className="rp-label">{page.gallery.label}</span>
              <h2 className="rp-section-title">{page.gallery.title}</h2>
              <p className="rp-section-desc">{page.gallery.desc}</p>
            </Animate>

            <div className="rp-gallery-grid">
              {page.gallery.items.map((item, i) => (
                <Animate
                  key={item.id}
                  className={`rp-gallery-card rp-gallery-card--${item.id}`}
                  delay={i * 70}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                  <span className="rp-gallery-caption">{item.caption}</span>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        <section className="rp-section rp-focus">
          <div className="container">
            <Animate className="rp-section-header">
              <span className="rp-label">{page.focus.label}</span>
              <h2 className="rp-section-title">{page.focus.title}</h2>
              <p className="rp-section-desc">{page.focus.desc}</p>
            </Animate>

            <div className="rp-focus-grid">
              {page.focus.items.map((item, i) => {
                const Icon = item.icon
                return (
                  <Animate key={item.title} className="rp-focus-card" delay={i * 50}>
                    <span className="rp-focus-corners" aria-hidden />
                    <span className="rp-focus-icon" aria-hidden>
                      <Icon size={22} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </Animate>
                )
              })}
            </div>
          </div>
        </section>

        <section className="rp-section rp-steps">
          <div className="container">
            <Animate className="rp-section-header">
              <span className="rp-label">{page.steps.label}</span>
              <h2 className="rp-section-title">{page.steps.title}</h2>
            </Animate>

            <ol className="rp-steps-list">
              {page.steps.items.map((step, i) => (
                <Animate key={step.title} as="li" className="rp-step" delay={i * 80}>
                  <span className="rp-step-num" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </Animate>
              ))}
            </ol>
          </div>
        </section>

        <section id="pricing" className="rp-section rp-pricing">
          <div className="container">
            <Animate className="rp-section-header">
              <span className="rp-label">{page.pricing.label}</span>
              <h2 className="rp-section-title">{page.pricing.title}</h2>
              <p className="rp-section-desc">{page.pricing.desc}</p>
            </Animate>

            <div className="rp-pricing-grid">
              {page.pricing.plans.map((plan, i) => (
                <Animate
                  key={plan.id}
                  className={`rp-plan ${plan.featured ? 'is-featured' : ''}`}
                  delay={i * 80}
                >
                  {plan.featured && (
                    <span className="rp-plan-badge">{page.pricing.popular}</span>
                  )}
                  <h3 className="rp-plan-name">{plan.name}</h3>
                  <div className="rp-plan-price">
                    {plan.price == null ? (
                      page.pricing.custom
                    ) : (
                      <>
                        {plan.price}
                        <span className="rp-plan-currency">{page.pricing.currency}</span>
                        <span className="rp-plan-period">{page.pricing.perMonth}</span>
                      </>
                    )}
                  </div>
                  <p className="rp-plan-desc">{plan.description}</p>
                  <ul className="rp-plan-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <HiCheck aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#book"
                    className={`rp-btn rp-btn-block ${plan.featured ? 'rp-btn-primary' : 'rp-btn-outline'}`}
                    onClick={() => setSelectedPackage(plan.id)}
                  >
                    {page.ctaBook}
                  </a>
                </Animate>
              ))}
            </div>

            <p className="rp-pricing-note">{page.pricing.note}</p>

            <BookNowForm
              program="robotics"
              theme="rp"
              packages={page.pricing.plans}
              selectedPackage={selectedPackage}
            />
          </div>
        </section>
      </div>
    </>
  )
}
