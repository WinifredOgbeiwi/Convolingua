import { Link } from 'react-router-dom'
import { IMAGES } from '../../utilities'
import Animate from '../Animate'

export default function CTABand() {
  return (
    <section className="cta-section section">
      <div className="container">
        <Animate>
          <div className="cta-card">
            <div className="cta-card-visual">
              <img
                src={IMAGES.Teacher}
                alt="English coach in a live session"
                loading="lazy"
              />
              <div className="cta-card-badge">Free assessment</div>
            </div>

            <div className="cta-card-content">
              <span className="section-label">Get started today</span>
              <h2>Take the first step toward fluent, confident English</h2>
              <p>
                Book a complimentary 30-minute session with a senior coach. We will
                assess your goals, identify gaps, and recommend the right program—no
                obligation.
              </p>
              <div className="cta-card-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Book free assessment
                </Link>
                <Link to="/courses" className="btn btn-outline btn-lg">
                  Browse courses
                </Link>
              </div>
              <ul className="cta-card-perks">
                <li>Flexible scheduling worldwide</li>
                <li>Industry-specific curriculum</li>
                <li>Results you can measure</li>
              </ul>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  )
}
