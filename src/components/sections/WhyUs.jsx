import Animate from '../Animate'
import { useTranslation } from '../../i18n/useTranslation'
import { getWhyUsItems } from '../../data/siteContent'

export default function WhyUs() {
  const { t } = useTranslation()
  const items = getWhyUsItems(t)

  return (
    <section className="section why-us" aria-labelledby="why-us-heading">
      <div className="container">
        <Animate className="section-header">
          <span className="section-label">{t('whyUs.label')}</span>
          <h2 id="why-us-heading" className="section-title">
            {t('whyUs.title')}
          </h2>
          <p className="section-desc">{t('whyUs.desc')}</p>
        </Animate>

        <div className="why-us-grid">
          {items.map(({ id, icon: Icon, title, description }, i) => (
            <Animate key={id} className="why-us-card" delay={i * 80}>
              <div className="why-us-icon" aria-hidden>
                <Icon size={26} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  )
}
