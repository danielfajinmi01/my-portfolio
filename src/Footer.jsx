import React from 'react'
import { FaGithub, FaLinkedinIn, FaUpwork, FaXTwitter } from 'react-icons/fa6'
import { SOCIAL_LINKS } from './siteData.js'

const SOCIAL_ICONS = {
  github: FaGithub,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  upwork: FaUpwork,
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row px-4 sm:px-6 lg:px-8">
        <small>Copyright {new Date().getFullYear()} Obaloluwa Fajinmi</small>
        <div className="footer-links">
          <a className="link" href="#hero">Top</a>
          <a className="link" href="#projects">Projects</a>
          <a className="link" href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map(({ key, href, label }) => {
            const Icon = SOCIAL_ICONS[key]

            return (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/5 text-[var(--text-muted)] transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[var(--accent)]"
              >
                <Icon className="text-base" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
