import { useState, useEffect } from 'react'
import { site } from '../config'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#" className="header__logo">{site.name}</a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {site.navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="header__nav-link"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
