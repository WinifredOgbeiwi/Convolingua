import { Link } from 'react-router-dom'

function ContactDetailValue({ value, link }) {
  if (!link) {
    return <strong className="contact-detail-value">{value}</strong>
  }

  if (link.to) {
    return (
      <Link to={link.to} className="contact-detail-value">
        {value}
      </Link>
    )
  }

  return (
    <a
      href={link.href}
      className="contact-detail-value"
      {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {value}
    </a>
  )
}

function ContactDetailItem({ item }) {
  const Icon = item.icon

  return (
    <li>
      <span className="contact-detail-icon" aria-hidden>
        <Icon size={20} />
      </span>
      <div>
        <span className="contact-detail-label">{item.label}</span>
        <ContactDetailValue value={item.value} link={item.link} />
      </div>
    </li>
  )
}

export default function ContactDetailList({ items }) {
  return (
    <ul className="contact-details">
      {items.map((item) => (
        <ContactDetailItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export function ContactCtaLink({ to, label, className }) {
  return (
    <Link to={to} className={className}>
      {label}
    </Link>
  )
}
