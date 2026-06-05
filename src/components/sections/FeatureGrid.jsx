import { Link } from 'react-router-dom'
import Animate from '../Animate'
import { useTranslation } from '../../i18n/useTranslation'
import { getSectionCta } from '../../data/siteContent'

export default function FeatureGrid({
  courses,
  title,
  description,
  label,
  showViewAll = false,
  id,
}) {
  const { t } = useTranslation()
  const viewAllCta = getSectionCta('coursesViewAll', t)

  const sectionLabel = label ?? t('courses.sectionLabel')
  const sectionTitle = title ?? t('courses.sectionTitle')
  const sectionDesc = description ?? t('courses.sectionDesc')

  return (
    <section id={id} className="section">
      <div className="container">
        <Animate className="section-header">
          <span className="section-label">{sectionLabel}</span>
          <h2 className="section-title">{sectionTitle}</h2>
          <p className="section-desc">{sectionDesc}</p>
        </Animate>

        <div className="feature-grid">
          {courses.map((course, i) => (
            <Animate key={course.slug} className="feature-card" delay={i * 80}>
              <div className="feature-card-img">
                <img src={course.image} alt={course.title} loading="lazy" />
              </div>
              <div className="feature-card-body">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
            </Animate>
          ))}
        </div>

        {showViewAll && (
          <Animate className="section-cta-row">
            <Link to={viewAllCta.to} className={viewAllCta.className}>
              {viewAllCta.label}
            </Link>
          </Animate>
        )}
      </div>
    </section>
  )
}
