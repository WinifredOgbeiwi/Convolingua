import Animate from '../Animate'
import { useTranslation } from '../../i18n/useTranslation'

export default function LearningPillars() {
  const { t } = useTranslation()
  const items = t('pillars.items') || []

  return (
    <section className="pillars section" aria-labelledby="pillars-heading">
      <div className="container">
        <Animate className="pillars-header">
          <h2 id="pillars-heading" className="pillars-title">
            {t('pillars.title')}
          </h2>
        </Animate>

        <div className="pillars-grid">
          {items.map((pillar, i) => (
            <Animate key={pillar.label} className="pillar-card" delay={i * 100}>
              <div className="pillar-value">100%</div>
              <h3 className="pillar-label">{pillar.label}</h3>
              <p className="pillar-desc">{pillar.description}</p>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  )
}
