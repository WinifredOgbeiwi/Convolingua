import { HiOutlineAdjustments, HiOutlineCalendar, HiOutlineChatAlt2 } from 'react-icons/hi'
import Animate from '../Animate'
import { getHomeAbout } from '../../data/siteContent'
import { useTranslation } from '../../i18n/useTranslation'

const VALUE_ICONS = [HiOutlineAdjustments, HiOutlineChatAlt2, HiOutlineCalendar]

export default function AboutSection() {
  const { t } = useTranslation()
  const about = getHomeAbout(t)

  return (
    <section id="about" className="section home-about">
      <div className="container home-about-grid">
        <Animate className="home-about-media">
          <img src={about.image} alt={about.imageAlt} width={1200} height={900} loading="lazy" decoding="async" />
        </Animate>

        <Animate className="home-about-copy" delay={100}>
          <span className="section-label">{about.label}</span>
          <h2 className="section-title">{about.title}</h2>
          <p>{about.p1}</p>
          <p>{about.p2}</p>

          <ul className="home-values">
            {about.values.map((value, i) => {
              const Icon = VALUE_ICONS[i % VALUE_ICONS.length]
              return (
                <li key={value.title}>
                  <span className="home-value-icon" aria-hidden>
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </Animate>
      </div>
    </section>
  )
}
