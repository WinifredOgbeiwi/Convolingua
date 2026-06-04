import Animate from '../Animate'

export default function PageHero({ label, title, description, image }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <Animate className="page-hero-content">
          {label && <span className="section-label">{label}</span>}
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </Animate>
        {image && (
          <Animate className="page-hero-image" delay={120}>
            <img src={image} alt="" loading="eager" />
          </Animate>
        )}
      </div>
    </section>
  )
}
