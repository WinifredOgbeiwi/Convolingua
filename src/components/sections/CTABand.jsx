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
              <div className="cta-card-badge">Free test</div>
            </div>

            <div className="cta-card-content">
              <span className="section-label">Get started today</span>
              <h2>Discover your English level in minutes</h2>
              <p>
                Take our free assessment to gauge your professional English skills.
                Receive an instant result plus a detailed report and personalized plan
                by email.
              </p>
              <div className="cta-card-actions">
                <Link to="/assessment" className="btn btn-primary btn-lg">
                  Free assessment test
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
