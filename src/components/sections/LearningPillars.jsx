import Animate from '../Animate'

const PILLARS = [
  {
    value: '100%',
    label: 'Effective',
    description:
      'Proven strategies to ensure real and lasting language improvement.',
  },
  {
    value: '100%',
    label: 'Efficient',
    description:
      'Smart learning methods to help you progress faster.',
  },
  {
    value: '100%',
    label: 'Engaging',
    description:
      'Interactive lessons that make learning enjoyable and immersive.',
  },
]

export default function LearningPillars() {
  return (
    <section className="pillars section" aria-labelledby="pillars-heading">
      <div className="container">
        <Animate className="pillars-header">
          <h2 id="pillars-heading" className="pillars-title">
            Master English with ease, speed, and flexibility.
          </h2>
        </Animate>

        <div className="pillars-grid">
          {PILLARS.map((pillar, i) => (
            <Animate key={pillar.label} className="pillar-card" delay={i * 100}>
              <div className="pillar-value">{pillar.value}</div>
              <h3 className="pillar-label">{pillar.label}</h3>
              <p className="pillar-desc">{pillar.description}</p>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  )
}
