import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { HiMenu, HiX } from 'react-icons/hi'
import { useTranslation } from '../../i18n/useTranslation'
import { getHeaderCta, getNavLinks } from '../../data/siteContent'

/** Page links get an active state; in-page anchors (e.g. /#about) never do. */
function NavItem({ link, onClick }) {
  if (!link.page) {
    return (
      <Link to={link.to} onClick={onClick}>
        {link.label}
      </Link>
    )
  }
  return (
    <NavLink
      to={link.to}
      onClick={onClick}
      className={({ isActive }) => (isActive ? 'active' : undefined)}
    >
      {link.label}
    </NavLink>
  )
}

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
              <NavItem key={link.to} link={link} />
            ))}
          </nav>

          <div className="header-actions">
            <LanguageSwitcher />
            <Link to={headerCta.to} className={headerCta.className}>
              {headerCta.label}
            </Link>
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
          <NavItem key={link.to} link={link} onClick={() => setMenuOpen(false)} />
        ))}
        <LanguageSwitcher className="lang-switcher--mobile" />
        <Link
          to={headerCta.to}
          className={`${headerCta.className} text-white`}
          onClick={() => setMenuOpen(false)}
        >
          {headerCta.label}
        </Link>
      </nav>
    </>
  )
}
