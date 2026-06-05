import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IMAGES } from '../../utilities'
import Animate from '../Animate'
import { useTranslation } from '../../i18n/useTranslation'

export default function Hero() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [heroEmail, setHeroEmail] = useState('')
  const cards = t('hero.cards')
  const heroCards = Array.isArray(cards) ? cards : []

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
              {t('hero.badge')}
            </div>
          </Animate>

          <Animate delay={80}>
            <h1>
              {t('hero.title')}{' '}
              <span>{t('hero.titleHighlight')}</span>
            </h1>
          </Animate>

          <Animate delay={160}>
            <p className="hero-sub">{t('hero.subtitle')}</p>
          </Animate>

          <Animate delay={240}>
            <form className="hero-form" onSubmit={handleHeroSubmit}>
              <label htmlFor="hero-email" className="sr-only">
                {t('hero.emailLabel')}
              </label>
              <input
                id="hero-email"
                type="email"
                placeholder={t('hero.emailPlaceholder')}
                value={heroEmail}
                onChange={(e) => setHeroEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                {t('hero.cta')}
              </button>
            </form>
            <p className="hero-note">{t('hero.note')}</p>
          </Animate>
        </div>

        <div className="hero-cards">
          {heroCards.map((card, i) => (
            <Animate key={card.label} className="hero-card" delay={320 + i * 80}>
              <div className="hero-card-label">{card.label}</div>
              <div className="hero-card-value">{card.value}</div>
              {i === 2 && (
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
