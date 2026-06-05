import { Link } from 'react-router-dom'
import { HiMail, HiClock, HiGlobeAlt } from 'react-icons/hi'
import SEO from '../components/SEO'
import PageHero from '../components/sections/PageHero'
import ContactForm from '../components/sections/ContactForm'
import Animate from '../components/Animate'
import { PAGE_SEO } from '../data/seo'
import { IMAGES } from '../utilities'

const CONTACT_INFO = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'hello@convolingua.com',
    href: 'mailto:hello@convolingua.com',
  },
  {
    icon: HiClock,
    label: 'Response time',
    value: 'Within 1 business day',
  },
  {
    icon: HiGlobeAlt,
    label: 'Sessions',
    value: 'Mon–Sat, global time zones',
  },
]

export default function ContactPage() {
  const seo = PAGE_SEO.contact
  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <PageHero
        label="Contact"
        title="Let's plan your next step in English"
        description="Request a free assessment, ask about corporate programs, or speak with our team."
        image={IMAGES.Contact}
      />

      <section className="section contact-section">
        <div className="container">
          <div className="contact-layout">
            <Animate className="contact-panel contact-panel-info">
              <div className="contact-panel-body">
                <h2>Get in touch</h2>
                <p className="contact-panel-lead">
                  Tell us about your goals and we will match you with the right coach
                  and program. Corporate and team inquiries are welcome.
                </p>

                <ul className="contact-details">
                  {CONTACT_INFO.map((item) => {
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
                  <p>Prefer a quick level check first?</p>
                  <Link to="/assessment" className="btn btn-ghost">
                    Take the free assessment test
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
