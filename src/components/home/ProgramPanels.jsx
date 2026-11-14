import { Link } from 'react-router-dom'
import { HiArrowRight, HiCheck } from 'react-icons/hi'
import RoboticsArt from './RoboticsArt'
import { getPrograms } from '../../data/siteContent'
import { useTranslation } from '../../i18n/useTranslation'

/**
 * Landing hero: three separate, equal-height program cards that together fill the
 * first screen (no intro copy above them). Each card is themed like its own
 * "mini site" (palette, type and artwork live in home.css) and the whole card is
 * clickable through the stretched title link.
 */
export default function ProgramPanels() {
  const { t } = useTranslation()
  const programs = getPrograms(t)

  return (
    <section id="programs" className="home-hero" aria-labelledby="home-title">
      {/* Kept for screen readers and SEO; the cards are the visual headline. */}
      <h1 id="home-title" className="sr-only">
        {t('home.title')}
      </h1>

      <div className="programs" role="list" aria-label={t('home.programsLabel')}>
        {programs.map((program) => (
          <article
            key={program.id}
            id={program.id}
            className={`program program--${program.id}`}
            role="listitem"
          >
            <div className="program-visual">
              {program.image ? (
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  className="program-photo"
                  width={1000}
                  height={1000}
                  loading={program.id === 'adults' ? 'eager' : 'lazy'}
                  decoding="async"
                />
              ) : (
                <RoboticsArt />
              )}
              <span className="program-number" aria-hidden>
                {program.number}
              </span>
            </div>

            <div className="program-body">
              <span className="program-tag">{program.tag}</span>
              <h2 className="program-title">
                <Link to={program.to} className="program-link">
                  {program.title}
                </Link>
              </h2>
              <p className="program-desc">{program.description}</p>

              <ul className="program-points">
                {program.points.map((point) => (
                  <li key={point}>
                    <HiCheck aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>

              <span className="program-cta" aria-hidden>
                {program.cta}
                <HiArrowRight />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
