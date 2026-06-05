import SEO from '../components/SEO'
import PageHero from '../components/sections/PageHero'
import ContactForm from '../components/sections/ContactForm'
import ContactDetailList, { ContactCtaLink } from '../components/contact/ContactDetailList'
import Animate from '../components/Animate'
import {
  getContactAssessmentCta,
  getContactDetails,
  getPageImage,
  getPageSeo,
} from '../data/siteContent'
import { useTranslation } from '../i18n/useTranslation'

export default function ContactPage() {
  const { t } = useTranslation()
  const seo = getPageSeo('contact', t)
  const contactDetails = getContactDetails(t)
  const assessmentCta = getContactAssessmentCta(t)

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <PageHero
        label={t('contact.heroLabel')}
        title={t('contact.heroTitle')}
        description={t('contact.heroDesc')}
        image={getPageImage('contact')}
      />

      <section className="section contact-section">
        <div className="container">
          <div className="contact-layout">
            <Animate className="contact-panel contact-panel-info">
              <div className="contact-panel-body">
                <h2>{t('contact.getInTouch')}</h2>
                <p className="contact-panel-lead">{t('contact.lead')}</p>

                <ContactDetailList items={contactDetails} />

                <div className="contact-panel-footer">
                  <p>{t('contact.preferTest')}</p>
                  <ContactCtaLink {...assessmentCta} />
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
