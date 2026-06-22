import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

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
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCvDropdownOpen(false)
      }
    }
    if (cvDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [cvDropdownOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCvDownload = (type) => {
    alert(`${type} CV placeholder. CV files will be configured here!`)
    setCvDropdownOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
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

          <div className="cv-dropdown" ref={dropdownRef}>
            <button className="cv-download-btn" onClick={() => setCvDropdownOpen(!cvDropdownOpen)}>
              <FiDownload size={18} />
              <span>Download CV</span>
              <FiChevronDown size={16} className={`dropdown-icon ${cvDropdownOpen ? 'open' : ''}`} />
            </button>
            <AnimatePresence>
              {cvDropdownOpen && (
                <motion.div
                  className="cv-dropdown-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <button className="cv-dropdown-item" onClick={() => handleCvDownload('Technical')}>
                    <span>Technical CV</span>
                    <span className="cv-description">For developer & tech roles</span>
                  </button>
                  <button className="cv-dropdown-item" onClick={() => handleCvDownload('General')}>
                    <span>General CV</span>
                    <span className="cv-description">For general opportunities</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-menu-links">
          {NAV_LINKS.map((link, idx) => {
            const Icon = link.icon
            return (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1 }}
              >
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  <Icon size={24} style={{ marginRight: '12px', verticalAlign: 'middle' }} />
                  {link.name}
                </a>
              </motion.li>
            )
          })}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: NAV_LINKS.length * 0.1 }}
          >
            <div className="mobile-cv-menu">
              <button className="mobile-cv-btn" onClick={() => setCvDropdownOpen(!cvDropdownOpen)}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FiDownload size={24} />
                  Download CV
                </span>
                <FiChevronDown size={18} className={`dropdown-icon ${cvDropdownOpen ? 'open' : ''}`} />
              </button>
              <AnimatePresence>
                {cvDropdownOpen && (
                  <motion.div
                    className="mobile-cv-dropdown-menu"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button className="mobile-cv-dropdown-item" onClick={() => handleCvDownload('Technical')}>
                      <span>Technical CV</span>
                      <span className="cv-description">For developer & tech roles</span>
                    </button>
                    <button className="mobile-cv-dropdown-item" onClick={() => handleCvDownload('General')}>
                      <span>General CV</span>
                      <span className="cv-description">For general opportunities</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.li>
        </ul>
      </div>
    </>
  )
}
