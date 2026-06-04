import { Link } from 'react-router-dom'
import { IMAGES } from '../../utilities'
import { HiCheck } from 'react-icons/hi2'
import Animate from '../Animate'

const BENEFITS = [
  'CEFR-aligned assessments with quarterly progress reports',
  'Coaches with corporate & MBA-level communication backgrounds',
  'Flexible scheduling across time zones—before work or lunch breaks',
  'Recordings and AI-powered feedback on pronunciation & clarity',
  'Dedicated account manager for team and enterprise plans',
]

export default function FeatureSplit({ showCta = true }) {
  return (
    <section id="method" className="section split">
      <div className="container split-inner">
        <Animate className="split-image">
          <img
            src={IMAGES.About}
            alt="Coach and professional in a learning session"
            loading="lazy"
          />
        </Animate>

        <Animate className="split-content" delay={120}>
          <span className="section-label">Our method</span>
          <h2>Coaching that adapts to your career—not the other way around</h2>
          <p>
            We start with a diagnostic of your real communication gaps—presentations,
            client calls, written deliverables—then build a personalized roadmap. Your
            coach works inside your industry vocabulary from day one.
          </p>

          <ul className="check-list">
            {BENEFITS.map((item) => (
              <li key={item}>
                <span className="check-icon">
                  <HiCheck size={12} aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>

          {showCta && (
            <Link to="/courses" className="btn btn-primary btn-lg">
              Explore programs
            </Link>
          )}
        </Animate>
      </div>
    </section>
  )
}
