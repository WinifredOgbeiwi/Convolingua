import { useState } from 'react'
import { HiCheck } from 'react-icons/hi'
import SEO from '../components/SEO'
import Animate from '../components/Animate'
import BookNowForm from '../components/BookNowForm'
import { getPageSeo, getKidsPage } from '../data/siteContent'
import { useTranslation } from '../i18n/useTranslation'

export default function KidsPage() {
  const { t } = useTranslation()
  const seo = getPageSeo('kids', t)
  const page = getKidsPage(t)
  const [selectedPackage, setSelectedPackage] = useState('')

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />

      <div className="kp">
        <section className="kp-hero">
          <div className="kp-hero-copy">
            <span className="kp-tag">{page.tag}</span>
            <h1 className="kp-title">{page.title}</h1>
            <p className="kp-lead">{page.lead}</p>
            <p className="kp-ages">{page.ages}</p>
            <div className="kp-hero-actions">
              <a href="#pricing" className="kp-btn kp-btn-primary">
                {page.ctaPricing}
              </a>
              <a href="#book" className="kp-btn kp-btn-ghost">
                {page.ctaBook}
              </a>
            </div>
          </div>

          <div className="kp-hero-media">
            <img
              src={page.image}
              alt={page.imageAlt}
              width={1000}
              height={1000}
              decoding="async"
            />
            <img
              className="kp-mascot"
              src={page.mascot}
              alt={page.mascotAlt}
              width={220}
              height={220}
              decoding="async"
            />
            <span className="kp-hero-badge">{page.badge}</span>
          </div>
        </section>

        <section className="kp-facts" aria-label={page.title}>
          <div className="container kp-facts-grid">
            {page.facts.map((fact, i) => (
              <Animate key={fact.title} className="kp-fact" delay={i * 60}>
                <span className="kp-fact-emoji" aria-hidden>
                  {['📖', '✏️', '🧩', '💬'][i] || '⭐'}
                </span>
                <strong>{fact.title}</strong>
                <p>{fact.text}</p>
              </Animate>
            ))}
          </div>
        </section>

        <section className="kp-section kp-gallery">
          <div className="container">
            <Animate className="kp-section-header">
              <span className="kp-label">{page.gallery.label}</span>
              <h2 className="kp-section-title">{page.gallery.title}</h2>
              <p className="kp-section-desc">{page.gallery.desc}</p>
            </Animate>

            <div className="kp-gallery-grid">
              {page.gallery.items.map((item, i) => (
                <Animate
                  key={item.id}
                  className={`kp-gallery-card kp-gallery-card--${item.id}`}
                  delay={i * 70}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                  <span className="kp-gallery-caption">{item.caption}</span>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        <section className="kp-section kp-focus">
          <div className="container">
            <Animate className="kp-section-header">
              <span className="kp-label">{page.focus.label}</span>
              <h2 className="kp-section-title">{page.focus.title}</h2>
              <p className="kp-section-desc">{page.focus.desc}</p>
            </Animate>

            <div className="kp-focus-grid">
              {page.focus.items.map((item, i) => {
                const Icon = item.icon
                return (
                  <Animate key={item.title} className="kp-focus-card" delay={i * 50}>
                    <span className="kp-focus-icon" aria-hidden>
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

        <section className="kp-section kp-steps">
          <div className="container">
            <Animate className="kp-section-header">
              <span className="kp-label">{page.steps.label}</span>
              <h2 className="kp-section-title">{page.steps.title}</h2>
            </Animate>

            <ol className="kp-steps-list">
              {page.steps.items.map((step, i) => (
                <Animate key={step.title} as="li" className="kp-step" delay={i * 80}>
                  <span className="kp-step-num" aria-hidden>
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

        <section id="pricing" className="kp-section kp-pricing">
          <div className="container">
            <Animate className="kp-section-header">
              <span className="kp-label">{page.pricing.label}</span>
              <h2 className="kp-section-title">{page.pricing.title}</h2>
              <p className="kp-section-desc">{page.pricing.desc}</p>
            </Animate>

            <div className="kp-pricing-grid">
              {page.pricing.plans.map((plan, i) => (
                <Animate
                  key={plan.id}
                  className={`kp-plan ${plan.featured ? 'is-featured' : ''}`}
                  delay={i * 80}
                >
                  {plan.featured && (
                    <span className="kp-plan-badge">{page.pricing.popular}</span>
                  )}
                  <h3 className="kp-plan-name">{plan.name}</h3>
                  <div className="kp-plan-price">
                    {plan.price == null ? (
                      page.pricing.custom
                    ) : (
                      <>
                        {plan.price}
                        <span className="kp-plan-currency">{page.pricing.currency}</span>
                        <span className="kp-plan-period">{page.pricing.perMonth}</span>
                      </>
                    )}
                  </div>
                  <p className="kp-plan-desc">{plan.description}</p>
                  <ul className="kp-plan-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <HiCheck aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#book"
                    className={`kp-btn kp-btn-block ${plan.featured ? 'kp-btn-primary' : 'kp-btn-outline'}`}
                    onClick={() => setSelectedPackage(plan.id)}
                  >
                    {page.ctaBook}
                  </a>
                </Animate>
              ))}
            </div>

            <p className="kp-pricing-note">{page.pricing.note}</p>

            <BookNowForm
              program="kids"
              theme="kp"
              packages={page.pricing.plans}
              selectedPackage={selectedPackage}
            />
          </div>
        </section>
      </div>
    </>
  )
}
