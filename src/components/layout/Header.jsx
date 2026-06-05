import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'
import { HiMenu, HiX } from 'react-icons/hi'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
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
            <NavLink to="/contact" className="btn btn-primary header-cta">
              Contact
            </NavLink>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <HiX size={24} aria-hidden /> : <HiMenu size={24} aria-hidden />}
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
          className="btn btn-primary header-cta text-white"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
      </nav>
    </>
  )
}
