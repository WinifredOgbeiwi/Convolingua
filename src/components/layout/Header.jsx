import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { HiMenu, HiX } from 'react-icons/hi'
import { useTranslation } from '../../i18n/useTranslation'
import { getHeaderCta, getNavLinks } from '../../data/siteContent'

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = getNavLinks(t)
  const headerCta = getHeaderCta(t)

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Logo />

          <nav className="nav" aria-label="Main">
            {navLinks.map((link) => (
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
            <LanguageSwitcher />
            <NavLink to={headerCta.to} className={headerCta.className}>
              {headerCta.label}
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
        {navLinks.map((link) => (
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
        <LanguageSwitcher className="lang-switcher--mobile" />
        <NavLink
          to={headerCta.to}
          className={`${headerCta.className} text-white`}
          onClick={() => setMenuOpen(false)}
        >
          {headerCta.label}
        </NavLink>
      </nav>
    </>
  )
}
