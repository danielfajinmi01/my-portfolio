import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiBriefcase, FiArrowUp } from 'react-icons/fi'
import { SITE_DATA } from '../siteData.js'

const SOCIAL_ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
  x: FiTwitter,
  upwork: FiBriefcase
}

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">{SITE_DATA.initials}</div>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>{SITE_DATA.name}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{SITE_DATA.title}</p>
            </div>
          </div>

          <div className="footer-links">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
            <a href="#journey" onClick={(e) => handleNavClick(e, '#journey')}>Journey</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
          </div>

          <div className="footer-social">
            {Object.keys(SITE_DATA.socialLinks).map((key) => {
              const IconComponent = SOCIAL_ICONS[key] || FiGithub
              const url = SITE_DATA.socialLinks[key]
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={key.toUpperCase()}
                >
                  <IconComponent size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {SITE_DATA.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
