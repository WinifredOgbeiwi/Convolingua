import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/sections/PageHero'
import FeatureSplit from '../components/sections/FeatureSplit'
import LearningPillars from '../components/sections/LearningPillars'
import CTABand from '../components/sections/CTABand'
import Animate from '../components/Animate'
import { getPageSeo } from '../i18n/getPageSeo'
import { useTranslation } from '../i18n/useTranslation'
import { IMAGES } from '../utilities'

export default function AboutPage() {
  const { t } = useTranslation()
  const seo = getPageSeo('about', t)
  const values = t('about.values') || []

  return (
    <>
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <PageHero
        label={t('about.heroLabel')}
        title={t('about.heroTitle')}
        description={t('about.heroDesc')}
        image={IMAGES.About}
      />

      <section className="section">
        <div className="container split-inner">
          <Animate className="split-image">
            <img
              src={IMAGES.Professional}
              alt={t('about.proImageAlt')}
              loading="lazy"
            />
          </Animate>
          <Animate className="split-content" delay={120}>
            <span className="section-label">{t('about.whoLabel')}</span>
            <h2>{t('about.whoTitle')}</h2>
            <p>{t('about.whoP1')}</p>
            <p>{t('about.whoP2')}</p>
          </Animate>
        </div>
      </section>

      <FeatureSplit showCta={false} />
      <LearningPillars />

      <section className="section split" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <Animate className="section-header">
            <span className="section-label">{t('about.whyLabel')}</span>
            <h2 className="section-title">{t('about.whyTitle')}</h2>
          </Animate>
          <div className="about-values">
            {values.map((item, i) => (
              <Animate key={item.title} className="about-value-card" delay={i * 80}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Animate>
            ))}
          </div>
          <Animate className="section-cta-row">
            <Link to="/contact" className="btn btn-primary btn-lg">
              {t('about.talkCta')}
            </Link>
          </Animate>
        </div>
      </section>

      <CTABand />
    </>
  )
}
