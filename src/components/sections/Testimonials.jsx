import { IMAGES } from '../../utilities'
import { FaStar } from 'react-icons/fa'
import Animate from '../Animate'
import { useTranslation } from '../../i18n/useTranslation'

const AVATARS = [IMAGES.Zuzzana, IMAGES.Piotr, IMAGES.Teacher]

export default function Testimonials() {
  const { t } = useTranslation()
  const items = t('testimonials.items') || []

  return (
    <section className="section testimonials-section">
      <div className="container">
        <Animate className="section-header">
          <span className="section-label">{t('testimonials.label')}</span>
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-desc">{t('testimonials.desc')}</p>
        </Animate>

        <div className="testimonials-grid">
          {items.map((item, i) => (
            <Animate key={item.name} className="testimonial-card" delay={i * 90}>
              <div className="stars" aria-label={t('testimonials.stars')}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <FaStar key={j} size={16} aria-hidden />
                ))}
              </div>
              <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
              <div className="testimonial-author">
                <img src={AVATARS[i]} alt="" width={44} height={44} loading="lazy" />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  )
}
