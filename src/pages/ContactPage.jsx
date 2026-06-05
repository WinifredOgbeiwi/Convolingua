import { Link } from 'react-router-dom'
import { HiMail, HiClock, HiGlobeAlt } from 'react-icons/hi'
import SEO from '../components/SEO'
import PageHero from '../components/sections/PageHero'
import ContactForm from '../components/sections/ContactForm'
import Animate from '../components/Animate'
import { getPageSeo } from '../i18n/getPageSeo'
import { useTranslation } from '../i18n/useTranslation'
import { IMAGES } from '../utilities'

export default function ContactPage() {
  const { t } = useTranslation()
  const seo = getPageSeo('contact', t)

  const contactInfo = [
    {
      icon: HiMail,
      label: t('contact.email'),
      value: 'hello@convolingua.com',
      href: 'mailto:hello@convolingua.com',
    },
    {
      icon: HiClock,
      label: t('contact.responseTime'),
      value: t('contact.responseValue'),
    },
    {
      icon: HiGlobeAlt,
      label: t('contact.sessions'),
      value: t('contact.sessionsValue'),
    },
  ]

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <PageHero
        label={t('contact.heroLabel')}
        title={t('contact.heroTitle')}
        description={t('contact.heroDesc')}
        image={IMAGES.Contact}
      />

      <section className="section contact-section">
        <div className="container">
          <div className="contact-layout">
            <Animate className="contact-panel contact-panel-info">
              <div className="contact-panel-body">
                <h2>{t('contact.getInTouch')}</h2>
                <p className="contact-panel-lead">{t('contact.lead')}</p>

                <ul className="contact-details">
                  {contactInfo.map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.label}>
                        <span className="contact-detail-icon" aria-hidden>
                          <Icon size={20} />
                        </span>
                        <div>
                          <span className="contact-detail-label">{item.label}</span>
                          {item.href ? (
                            <a href={item.href} className="contact-detail-value">
                              {item.value}
                            </a>
                          ) : (
                            <strong className="contact-detail-value">{item.value}</strong>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>

                <div className="contact-panel-footer">
                  <p>{t('contact.preferTest')}</p>
                  <Link to="/assessment" className="btn btn-ghost">
                    {t('contact.assessmentLink')}
                  </Link>
                </div>
              </div>
            </Animate>

            <Animate className="contact-panel contact-panel-form" delay={100}>
              <ContactForm />
            </Animate>
          </div>
        </div>
      </section>
    </>
  )
}
