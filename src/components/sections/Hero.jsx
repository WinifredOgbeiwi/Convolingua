import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IMAGES } from '../../utilities'
import Animate from '../Animate'

const HERO_CARDS = [
  {
    label: 'Learning format',
    value: 'Live 1-on-1',
    meta: 'Speak with a dedicated coach and get feedback tailored to your goals.',
  },
  {
    label: 'Scheduling',
    value: 'Flexible',
    meta: 'Book sessions around your calendar, including evenings and weekends.',
  },
  {
    label: 'Program focus',
    value: 'Business English',
    meta: 'Meetings, presentations, email, and client communication.',
    avatars: true,
  },
]

export default function Hero() {
  const navigate = useNavigate()
  const [heroEmail, setHeroEmail] = useState('')

  function handleHeroSubmit(e) {
    e.preventDefault()
    const trimmed = heroEmail.trim()
    navigate(trimmed ? `/assessment?email=${encodeURIComponent(trimmed)}` : '/assessment')
  }

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
            <form className="hero-form" onSubmit={handleHeroSubmit}>
              <label htmlFor="hero-email" className="sr-only">
                Work email
              </label>
              <input
                id="hero-email"
                type="email"
                placeholder="Enter your work email"
                value={heroEmail}
                onChange={(e) => setHeroEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                Free assessment test
              </button>
            </form>
            <p className="hero-note">
              Gauge your English level in minutes · Personalized plan by email
            </p>
          </Animate>
        </div>

        <div className="hero-cards">
          {HERO_CARDS.map((card, i) => (
            <Animate key={card.label} className="hero-card" delay={320 + i * 80}>
              <div className="hero-card-label">{card.label}</div>
              <div className="hero-card-value">{card.value}</div>
              {card.avatars && (
                <div className="hero-card-avatars">
                  <img src={IMAGES.Teacher} alt="" width={32} height={32} />
                  <img src={IMAGES.Piotr} alt="" width={32} height={32} />
                  <img src={IMAGES.Zuzzana} alt="" width={32} height={32} />
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
