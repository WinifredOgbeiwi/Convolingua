import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { HiMenu, HiX } from 'react-icons/hi'
import { useTranslation } from '../../i18n/useTranslation'

const NAV_LINKS = [
  { to: '/', key: 'home', end: true },
  { to: '/about', key: 'about' },
  { to: '/courses', key: 'courses' },
]

export default function Header() {
  const { t } = useTranslation()
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
                {t(`nav.${link.key}`)}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <LanguageSwitcher />
            <NavLink to="/contact" className="btn btn-primary header-cta">
              {t('nav.contact')}
            </NavLink>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t('nav.menuClose') : t('nav.menuOpen')}
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
            {t(`nav.${link.key}`)}
          </NavLink>
        ))}
        <LanguageSwitcher className="lang-switcher--mobile" />
        <NavLink
          to="/contact"
          className="btn btn-primary header-cta text-white"
          onClick={() => setMenuOpen(false)}
        >
          {t('nav.contact')}
        </NavLink>
      </nav>
    </>
  )
}
