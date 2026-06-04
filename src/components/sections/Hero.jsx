import { Link } from 'react-router-dom'
import { IMAGES } from '../../utilities'
import Animate from '../Animate'

const HERO_CARDS = [
  {
    label: 'Fluency progress',
    value: 'C1 → C2',
    barWidth: '78%',
    meta: 'Average improvement in 16 weeks',
  },
  {
    label: 'Lessons completed',
    value: '2,400+',
    barWidth: '92%',
    meta: 'This month across all programs',
  },
  {
    label: 'Expert coaches online',
    value: '48',
    meta: 'Available now for live sessions',
    avatars: true,
  },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <Animate>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Trusted by professionals worldwide
            </div>
          </Animate>

          <Animate delay={80}>
            <h1>
              Master professional English for the{' '}
              <span>global stage</span>
            </h1>
          </Animate>

          <Animate delay={160}>
            <p className="hero-sub">
              Live 1-on-1 coaching, industry-tailored curriculum, and real-world
              practice for leaders who need confidence in boardrooms, negotiations,
              and cross-border teams.
            </p>
          </Animate>

          <Animate delay={240}>
            <form
              className="hero-form"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <label htmlFor="hero-email" className="sr-only">
                Work email
              </label>
              <input
                id="hero-email"
                type="email"
                placeholder="Enter your work email"
                required
              />
              <Link to="/contact" className="btn btn-primary">
                Start free assessment
              </Link>
            </form>
            <p className="hero-note">
              Free 30-minute fluency assessment · No credit card required
            </p>
          </Animate>
        </div>

        <div className="hero-cards">
          {HERO_CARDS.map((card, i) => (
            <Animate key={card.label} className="hero-card" delay={320 + i * 80}>
              <div className="hero-card-label">{card.label}</div>
              <div className="hero-card-value">{card.value}</div>
              {card.barWidth ? (
                <div className="hero-card-bar">
                  <div
                    className="hero-card-bar-fill"
                    style={{ width: card.barWidth }}
                  />
                </div>
              ) : (
                <div className="hero-card-avatars">
                  <img src={IMAGES.Teacher} alt="" width={32} height={32} />
                  <img src={IMAGES.Piotr} alt="" width={32} height={32} />
                  <img src={IMAGES.Zuzzana} alt="" width={32} height={32} />
                  <img src={IMAGES.Professional} alt="" width={32} height={32} />
                </div>
              )}
              <p className="hero-card-meta">{card.meta}</p>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  )
}
