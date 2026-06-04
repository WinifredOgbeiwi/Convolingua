import SEO from '../components/SEO'
import PageHero from '../components/sections/PageHero'
import ContactForm from '../components/sections/ContactForm'
import Animate from '../components/Animate'
import { PAGE_SEO } from '../data/seo'
import { IMAGES } from '../utilities'

const CONTACT_INFO = [
  { label: 'Email', value: 'hello@convolingua.com' },
  { label: 'Response time', value: 'Within 1 business day' },
  { label: 'Sessions', value: 'Mon–Sat, global time zones' },
]

export default function ContactPage() {
  const seo = PAGE_SEO.contact
  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <PageHero
        label="Contact"
        title="Let's plan your next step in English"
        description="Request a free fluency assessment or ask about corporate programs—we are here to help."
        image={IMAGES.Contact}
      />

      <section className="section contact-section">
        <div className="container contact-layout">
          <div className="contact-info">
            <Animate>
              <h2>Get in touch</h2>
              <p>
                Tell us about your goals and we will match you with the right coach and
                program. Corporate inquiries welcome.
              </p>
              <ul className="contact-details">
                {CONTACT_INFO.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
            </Animate>
            <Animate delay={120} className="contact-side-image">
              <img src={IMAGES.Prices} alt="" loading="lazy" />
            </Animate>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
