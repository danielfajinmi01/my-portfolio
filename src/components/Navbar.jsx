import React, { useState, useEffect, useRef } from 'react'
import { FiHome, FiUser, FiCode, FiMail, FiDownload, FiChevronDown, FiX, FiMenu } from 'react-icons/fi'
import { SITE_DATA } from '../siteData.js'

const NAV_LINKS = [
  { name: 'Home', href: '#home', icon: FiHome },
  { name: 'About', href: '#about', icon: FiUser },
  { name: 'Projects', href: '#projects', icon: FiCode },
  { name: 'Contact', href: '#contact', icon: FiMail },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [desktopCvOpen, setDesktopCvOpen] = useState(false)
  const [mobileCvOpen, setMobileCvOpen] = useState(false)
  const desktopDropdownRef = useRef(null)
  const mobileDropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)

      const sectionIds = NAV_LINKS.map(link => link.href.substring(1))
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handlePointerDown = (e) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(e.target)) {
        setDesktopCvOpen(false)
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(e.target)) {
        setMobileCvOpen(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setDesktopCvOpen(false)
        setMobileCvOpen(false)
      }
    }

    if (desktopCvOpen || mobileCvOpen) {
      document.addEventListener('mousedown', handlePointerDown)
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [desktopCvOpen, mobileCvOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    setMobileCvOpen(false)
    setDesktopCvOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const CV_FILES = {
    Technical: { url: '/downloads/Obaloluwa_Fajinmi_Technical_CV.pdf', filename: 'Obaloluwa_Fajinmi_Technical_CV.pdf' },
    General: { url: '/downloads/Obaloluwa_Fajinmi_General_CV.pdf', filename: 'Obaloluwa_Fajinmi_General_CV.pdf' }
  }

  const handleCvDownload = (type) => {
    const file = CV_FILES[type]
    const link = document.createElement('a')
    link.href = file.url
    link.download = file.filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setDesktopCvOpen(false)
    setMobileCvOpen(false)
    setMobileMenuOpen(false)
  }

  const renderCvOptions = (itemClassName) => (
    <>
      <button className={itemClassName} role="menuitem" onClick={() => handleCvDownload('Technical')}>
        <span>Technical CV</span>
        <span className="cv-description">For developer & tech roles</span>
      </button>
      <button className={itemClassName} role="menuitem" onClick={() => handleCvDownload('General')}>
        <span>General CV</span>
        <span className="cv-description">For general opportunities</span>
      </button>
    </>
  )

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
            <div className="logo-icon">{SITE_DATA.initials}</div>
            <div className="logo-text">
              <div className="logo-name">{SITE_DATA.nickname}</div>
              <div className="logo-title">{SITE_DATA.title}</div>
            </div>
          </a>

          <ul className="navbar-links">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon
              const isActive = activeSection === link.href.substring(1)
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={isActive ? 'active' : ''}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <Icon size={18} />
                    {link.name}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="cv-dropdown" ref={desktopDropdownRef}>
            <button
              className="cv-download-btn"
              onClick={() => {
                setDesktopCvOpen((open) => !open)
                setMobileCvOpen(false)
              }}
              aria-haspopup="menu"
              aria-expanded={desktopCvOpen}
              aria-controls="desktop-cv-menu"
            >
              <FiDownload size={18} />
              <span>Download CV</span>
              <FiChevronDown size={16} className={`dropdown-icon ${desktopCvOpen ? 'open' : ''}`} />
            </button>
            {desktopCvOpen && (
              <div className="cv-dropdown-menu open" id="desktop-cv-menu" role="menu">
                {renderCvOptions('cv-dropdown-item')}
              </div>
            )}
          </div>

          <button
            className="mobile-toggle"
            onClick={() => {
              setMobileMenuOpen((open) => !open)
              setDesktopCvOpen(false)
              setMobileCvOpen(false)
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} id="mobile-menu">
        <ul className="mobile-menu-links">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon
            return (
              <li key={link.name}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  <Icon size={24} style={{ marginRight: '12px', verticalAlign: 'middle' }} />
                  {link.name}
                </a>
              </li>
            )
          })}
          <li>
            <div className="mobile-cv-menu" ref={mobileDropdownRef}>
              <button
                className="mobile-cv-btn"
                onClick={() => {
                  setMobileCvOpen((open) => !open)
                  setDesktopCvOpen(false)
                }}
                aria-haspopup="menu"
                aria-expanded={mobileCvOpen}
                aria-controls="mobile-cv-menu"
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FiDownload size={24} />
                  Download CV
                </span>
                <FiChevronDown size={18} className={`dropdown-icon ${mobileCvOpen ? 'open' : ''}`} />
              </button>
              {mobileCvOpen && (
                <div className="mobile-cv-dropdown-menu open" id="mobile-cv-menu" role="menu">
                  {renderCvOptions('mobile-cv-dropdown-item')}
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
