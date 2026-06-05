import { Link } from 'react-router-dom'
import SEO from '../SEO'
import Animate from '../Animate'
import { getLegalCrossLinks, getPageSeo } from '../../data/siteContent'
import { useTranslation } from '../../i18n/useTranslation'

export default function LegalDocument({ type }) {
  const { t, translations } = useTranslation()
  const doc = translations.legal?.[type]
  const seo = getPageSeo(type, t)
  const links = getLegalCrossLinks(type, t)

  if (!doc) return null

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />

      <section className="page-hero page-hero--compact">
        <div className="container page-hero-inner page-hero-inner--single">
          <Animate className="page-hero-content">
            <span className="section-label">{doc.label}</span>
            <h1>{doc.title}</h1>
            <p>{doc.description}</p>
          </Animate>
        </div>
      </section>

      <section className="section legal-section">
        <div className="container">
          <Animate className="legal-document">
            <p className="legal-updated">{doc.updated}</p>

            {doc.sections.map((section) => (
              <article key={section.title} className="legal-block">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </article>
            ))}

            <div className="legal-footer-links">
              <Link to={links.sibling.to}>{links.sibling.label}</Link>
              <span aria-hidden>·</span>
              <Link to={links.contact.to}>{links.contact.label}</Link>
            </div>
          </Animate>
        </div>
      </section>
    </>
  )
}
