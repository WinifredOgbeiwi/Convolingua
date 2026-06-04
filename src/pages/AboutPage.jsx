import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/sections/PageHero'
import FeatureSplit from '../components/sections/FeatureSplit'
import LearningPillars from '../components/sections/LearningPillars'
import CTABand from '../components/sections/CTABand'
import Animate from '../components/Animate'
import { PAGE_SEO } from '../data/seo'
import { IMAGES } from '../utilities'

export default function AboutPage() {
  const seo = PAGE_SEO.about
  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <PageHero
        label="About us"
        title="English coaching designed for ambitious careers"
        description="We help professionals communicate with clarity, influence, and confidence—in every meeting, email, and presentation."
        image={IMAGES.About}
      />

      <section className="section">
        <div className="container split-inner">
          <Animate className="split-image">
            <img src={IMAGES.Professional} alt="Professionals collaborating" loading="lazy" />
          </Animate>
          <Animate className="split-content" delay={120}>
            <span className="section-label">Who we are</span>
            <h2>Built for the pace of modern business</h2>
            <p>
              ConvoLingua was founded on a simple belief: language training should mirror
              how professionals actually work—fast, focused, and deeply relevant to their
              industry. Our coaches combine teaching expertise with real corporate experience.
            </p>
            <p>
              Whether you are preparing for a promotion, leading a global team, or
              entering a new market, we align every session with outcomes you can measure
              and use immediately.
            </p>
          </Animate>
        </div>
      </section>

      <FeatureSplit showCta={false} />
      <LearningPillars />

      <section className="section split" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <Animate className="section-header">
            <span className="section-label">Why professionals choose us</span>
            <h2 className="section-title">A partner in your growth—not just a language school</h2>
          </Animate>
          <div className="about-values">
            {[
              { title: 'Personalized roadmaps', text: 'Every learner starts with a diagnostic aligned to CEFR standards and career goals.' },
              { title: 'Industry fluency', text: 'From finance to tech to law—we teach the vocabulary and tone your field demands.' },
              { title: 'Accountability', text: 'Progress reports, session recordings, and coach feedback keep momentum high.' },
            ].map((item, i) => (
              <Animate key={item.title} className="about-value-card" delay={i * 80}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Animate>
            ))}
          </div>
          <Animate className="section-cta-row">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Talk to our team
            </Link>
          </Animate>
        </div>
      </section>

      <CTABand />
    </>
  )
}
