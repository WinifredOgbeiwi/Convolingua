import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'
import { HiBars3, HiXMark } from 'react-icons/hi2'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Logo />

          <nav className="nav" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <NavLink to="/contact" className="btn btn-primary">
              Book assessment
            </NavLink>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <HiXMark size={24} aria-hidden /> : <HiBars3 size={24} aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobile">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          className="btn btn-primary btn-block"
          onClick={() => setMenuOpen(false)}
        >
          Book assessment
        </NavLink>
      </nav>
    </>
  )
}
