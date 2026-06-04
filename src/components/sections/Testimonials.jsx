import { IMAGES } from '../../utilities'
import { FaStar } from 'react-icons/fa'
import Animate from '../Animate'

const TESTIMONIALS = [
  {
    quote:
      'Within three months I was leading investor calls in English. The coaches understood finance terminology and pushed me on clarity, not grammar drills.',
    name: 'Elena Vasquez',
    role: 'CFO, Growth-stage SaaS',
    avatar: IMAGES.Zuzzana,
  },
  {
    quote:
      'Our engineering leads in Berlin and Singapore finally communicate seamlessly. ConvoLingua built a custom track around stand-ups and design reviews.',
    name: 'James Okonkwo',
    role: 'VP Engineering, Enterprise Tech',
    avatar: IMAGES.Piotr,
  },
  {
    quote:
      'I went from avoiding networking events to hosting panel discussions. The negotiation module alone was worth every euro.',
    name: 'Marie Dubois',
    role: 'Director, Management Consulting',
    avatar: IMAGES.Teacher,
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <Animate className="section-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What our students say</h2>
          <p className="section-desc">
            Leaders and experts who needed English that matches their professional ambition.
          </p>
        </Animate>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <Animate key={t.name} className="testimonial-card" delay={i * 90}>
              <div className="stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <FaStar key={j} size={16} aria-hidden />
                ))}
              </div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <img src={t.avatar} alt="" width={44} height={44} loading="lazy" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  )
}
