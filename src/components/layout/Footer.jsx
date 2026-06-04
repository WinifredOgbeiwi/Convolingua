import { Link } from 'react-router-dom'
import Logo from '../Logo'

const FOOTER_LINKS = {
  Programs: [
    { label: 'Business English', to: '/courses' },
    { label: 'Corporate Training', to: '/courses' },
    { label: 'Exam Preparation', to: '/courses' },
    { label: 'Executive Coaching', to: '/courses' },
  ],
  Company: [
    { label: 'About us', to: '/about' },
    { label: 'Our method', to: '/about#method' },
    { label: 'Contact', to: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo className="footer-logo" />
            <p>
              Premium English training for ambitious professionals. Live coaching,
              industry-specific curriculum, and measurable fluency outcomes.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4>{title}</h4>
              <ul className="footer-links">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} ConvoLingua. All rights reserved.</span>
          <span>Privacy &middot; Terms</span>
        </div>
      </div>
    </footer>
  )
}
