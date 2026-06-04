import { Link } from 'react-router-dom'
import Animate from '../Animate'

export default function FeatureGrid({
  courses,
  title = 'Programs built for how you work',
  description = 'Every track pairs live coaching with role-specific scenarios—so you practice the English you actually use at work.',
  label = 'Learning tracks',
  showViewAll = false,
  id,
}) {
  return (
    <section id={id} className="section">
      <div className="container">
        <Animate className="section-header">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-desc">{description}</p>
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
            <Link to="/courses" className="btn btn-primary">
              View all courses
            </Link>
          </Animate>
        )}
      </div>
    </section>
  )
}
