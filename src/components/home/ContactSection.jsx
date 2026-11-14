import { useSearchParams } from 'react-router-dom'
import Animate from '../Animate'
import ContactForm from '../sections/ContactForm'
import ContactDetailList from '../contact/ContactDetailList'
import { CONTACT, getContactDetails } from '../../data/siteContent'
import { useTranslation } from '../../i18n/useTranslation'

export default function ContactSection() {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  // Program cards link to /?program=<id>#contact so the form opens pre-selected.
  const program = searchParams.get('program') ?? ''
  const contactDetails = getContactDetails(t)

  return (
    <section id="contact" className="section home-contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('home.contact.label')}</span>
          <h2 className="section-title">{t('home.contact.title')}</h2>
          <p className="section-desc">{t('home.contact.desc')}</p>
        </div>

        <div className="contact-layout">
          <Animate className="contact-panel contact-panel-form">
            <ContactForm key={program} defaultInterest={program} />
          </Animate>

          <Animate className="contact-panel contact-panel-info" delay={100}>
            <div className="contact-panel-body">
              <h3 className="contact-info-title">{t('contact.getInTouch')}</h3>
              <ContactDetailList items={contactDetails} />

              <div className="contact-panel-footer">
                <p>{t('home.contact.callPrompt')}</p>
                <a href={CONTACT.phoneHref} className="btn btn-ghost btn-lg btn-block">
                  {t('home.contact.callCta')} · {CONTACT.phone}
                </a>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  )
}
