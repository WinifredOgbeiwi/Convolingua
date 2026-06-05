import { Link } from 'react-router-dom'
import { IMAGES } from '../../utilities'
import { HiCheck } from 'react-icons/hi'
import Animate from '../Animate'

const BENEFITS = [
  'Custom learning paths aligned to your company goals and KPIs',
  'Group and 1-on-1 formats for teams across regions and time zones',
  'Industry-specific vocabulary for finance, tech, legal, and more',
  'Progress dashboards for HR and team leads',
  'Onboarding support and dedicated account management',
]

export default function CorporateTraining() {
  return (
    <section className="section corporate-section">
      <div className="container split-inner">
        <Animate className="split-image">
          <img
            src={IMAGES.Corporate}
            alt="Corporate team in a professional training session"
            loading="lazy"
          />
        </Animate>

        <Animate className="split-content" delay={120}>
          <span className="section-label">Corporate training</span>
          <h2>English programs built for your entire workforce</h2>
          <p>
            We partner with HR and L&D teams to upskill corporate staff at every level—from
            new hires to senior leadership. Programs scale across departments while keeping
            coaching personal, practical, and tied to real business outcomes.
          </p>
          <p>
            Whether your team needs meeting fluency, client-facing confidence, or
            written communication standards, we design a rollout that fits your schedule,
            budget, and compliance requirements.
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

          <Link to="/contact" className="btn btn-primary btn-lg">
            Request a corporate proposal
          </Link>
        </Animate>
      </div>
    </section>
  )
}
