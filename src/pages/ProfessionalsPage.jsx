import { useState } from 'react'
import { HiCheck } from 'react-icons/hi'
import SEO from '../components/SEO'
import Animate from '../components/Animate'
import BookNowForm from '../components/BookNowForm'
import { getPageSeo, getProfessionalsPage } from '../data/siteContent'
import { useTranslation } from '../i18n/useTranslation'

export default function ProfessionalsPage() {
  const { t } = useTranslation()
  const seo = getPageSeo('professionals', t)
  const page = getProfessionalsPage(t)
  const [selectedPackage, setSelectedPackage] = useState('')

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />

      <div className="pp">
        <section className="pp-hero">
          <Animate className="pp-hero-copy">
            <span className="pp-tag">{page.tag}</span>
            <h1 className="pp-title">{page.title}</h1>
            <p className="pp-lead">{page.lead}</p>
            <div className="pp-hero-actions">
              <a href="#pricing" className="pp-btn pp-btn-primary">
                {page.ctaPricing}
              </a>
              <a href="#book" className="pp-btn pp-btn-ghost">
                {page.ctaBook}
              </a>
            </div>
          </Animate>

          <Animate className="pp-hero-media" delay={120}>
            <img
              src={page.image}
              alt={page.imageAlt}
              width={1000}
              height={1000}
              decoding="async"
            />
            <span className="pp-hero-badge">{page.badge}</span>
          </Animate>
        </section>

        <section className="pp-facts" aria-label={page.title}>
          <div className="container pp-facts-grid">
            {page.facts.map((fact, i) => (
              <Animate key={fact.title} className="pp-fact" delay={i * 60}>
                <strong>{fact.title}</strong>
                <p>{fact.text}</p>
              </Animate>
            ))}
          </div>
        </section>

        <section className="pp-section pp-courses">
          <div className="container">
            <Animate className="pp-section-header">
              <span className="pp-label">{page.courses.label}</span>
              <h2 className="pp-section-title">{page.courses.title}</h2>
              <p className="pp-section-desc">{page.courses.desc}</p>
            </Animate>

            <div className="pp-courses-grid">
              {page.courses.items.map((course, i) => (
                <Animate key={course.slug} className="pp-course-card" delay={i * 50}>
                  <div className="pp-course-img">
                    <img src={course.image} alt="" loading="lazy" decoding="async" />
                  </div>
                  <div className="pp-course-body">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>

        <section className="pp-section pp-steps">
          <div className="container">
            <Animate className="pp-section-header">
              <span className="pp-label">{page.steps.label}</span>
              <h2 className="pp-section-title">{page.steps.title}</h2>
            </Animate>

            <ol className="pp-steps-list">
              {page.steps.items.map((step, i) => (
                <Animate key={step.title} as="li" className="pp-step" delay={i * 80}>
                  <span className="pp-step-num" aria-hidden>
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

        <section id="pricing" className="pp-section pp-pricing">
          <div className="container">
            <Animate className="pp-section-header">
              <span className="pp-label">{page.pricing.label}</span>
              <h2 className="pp-section-title">{page.pricing.title}</h2>
              <p className="pp-section-desc">{page.pricing.desc}</p>
            </Animate>

            <div className="pp-pricing-grid">
              {page.pricing.plans.map((plan, i) => (
                <Animate
                  key={plan.id}
                  className={`pp-plan ${plan.featured ? 'is-featured' : ''}`}
                  delay={i * 80}
                >
                  {plan.featured && (
                    <span className="pp-plan-badge">{page.pricing.popular}</span>
                  )}
                  <h3 className="pp-plan-name">{plan.name}</h3>
                  <div className="pp-plan-price">
                    {plan.price == null ? (
                      page.pricing.custom
                    ) : (
                      <>
                        {plan.price}
                        <span className="pp-plan-currency">{page.pricing.currency}</span>
                        <span className="pp-plan-period">{page.pricing.perMonth}</span>
                      </>
                    )}
                  </div>
                  <p className="pp-plan-desc">{plan.description}</p>
                  <ul className="pp-plan-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <HiCheck aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#book"
                    className={`pp-btn pp-btn-block ${plan.featured ? 'pp-btn-primary' : 'pp-btn-outline'}`}
                    onClick={() => setSelectedPackage(plan.id)}
                  >
                    {page.ctaBook}
                  </a>
                </Animate>
              ))}
            </div>

            <p className="pp-pricing-note">{page.pricing.note}</p>

            <BookNowForm
              program="professionals"
              theme="pp"
              packages={page.pricing.plans}
              selectedPackage={selectedPackage}
            />
          </div>
        </section>
      </div>
    </>
  )
}
