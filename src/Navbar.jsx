import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { FaUpwork, FaXTwitter } from 'react-icons/fa6'
import { fadeInUp, viewport } from './animation.js'
import { SOCIAL_LINKS } from './siteData.js'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL_ICONS = {
  github: FaGithub,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  upwork: FaUpwork,
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="site-header">
      <motion.nav
        className="nav-row mx-auto flex min-h-[68px] max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="show"
        variants={fadeInUp}
      >
        <ul className="nav-links">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="link nav-link group relative inline-flex items-center py-2"
                whileHover={{ scale: 1.04, y: -1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span>{link.label}</span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-[2px] h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          {SOCIAL_LINKS.map(({ key, href, label }) => {
            const Icon = SOCIAL_ICONS[key]

            return (
              <motion.a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/5 text-[var(--text-muted)] transition-colors duration-300 hover:border-[color:var(--accent)] hover:text-[var(--accent)]"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                variants={fadeInUp}
              >
                <Icon className="text-base" />
              </motion.a>
            )
          })}
        </div>

        <a className="hire-link" href="#contact" onClick={e => handleNavClick(e, '#contact')}>
          Hire me
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Open menu">
          Menu
        </button>
      </motion.nav>

      {menuOpen && (
        <div className="mobile-nav-wrap">
          <motion.ul
            className="mobile-nav-list px-4 sm:px-6"
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            viewport={viewport}
          >
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={e => handleNavClick(e, link.href)} className="link nav-link">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex flex-wrap gap-3 pt-2">
              {SOCIAL_LINKS.map(({ key, href, label }) => {
                const Icon = SOCIAL_ICONS[key]

                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/5 text-[var(--text-muted)] transition duration-300 hover:border-[color:var(--accent)] hover:text-[var(--accent)]"
                  >
                    <Icon className="text-base" />
                  </a>
                )
              })}
            </li>
            <li>
              <a href="#contact" onClick={e => handleNavClick(e, '#contact')} className="hire-link mobile-hire-link">
                Hire me
              </a>
            </li>
          </motion.ul>
        </div>
      )}
    </header>
  )
}
