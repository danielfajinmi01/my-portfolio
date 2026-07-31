import React, { useState, useEffect } from 'react'
import { FiCode, FiMail, FiGithub, FiLayout, FiServer } from 'react-icons/fi'
import { SITE_DATA } from '../siteData.js'
import accessBankPreview from '../assets/access-bank-live.png'
import mixlrPreview from '../assets/mixlr-live.png'

const CountUp = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (started) return
    let startTime
    let frameId

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount)
      } else {
        setStarted(true)
      }
    }

    const timer = setTimeout(() => {
      frameId = requestAnimationFrame(updateCount)
    }, 500)

    return () => {
      clearTimeout(timer)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [target, duration, started])

  return count
}

export default function Hero() {
  const [typedRole, setTypedRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const roles = SITE_DATA.roles
    const currentRole = roles[roleIndex]
    const timer = setTimeout(() => {
      if (isDeleting) {
        setTypedRole(currentRole.substring(0, typedRole.length - 1))
        if (typedRole === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      } else {
        setTypedRole(currentRole.substring(0, typedRole.length + 1))
        if (typedRole === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timer)
  }, [typedRole, isDeleting, roleIndex])

  const floatingCards = [
    { icon: FiLayout, title: "UI/UX", desc: "Design" },
    { icon: FiCode, title: "Frontend", desc: "Development" },
    { icon: FiServer, title: "Backend", desc: "Architecture" }
  ]

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="badge-dot" />
              <span>{SITE_DATA.tagline}</span>
            </div>

            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">{SITE_DATA.name}</h1>

            <div className="hero-title-wrapper">
              <span className="hero-title">{typedRole}</span>
              <span className="cursor-blink" />
            </div>

            <p className="hero-description">
              {SITE_DATA.bio}
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <FiCode size={18} />
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                <FiMail size={18} />
                Get In Touch
              </a>
              <a
                href={SITE_DATA.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <FiGithub size={18} />
                GitHub
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">
                  <CountUp target={SITE_DATA.stats.yearsExperience} />
                  <span className="stat-plus">+</span>
                </div>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <CountUp target={SITE_DATA.stats.projectsCompleted} />
                  <span className="stat-plus">+</span>
                </div>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <CountUp target={SITE_DATA.stats.deployedProjects} />
                </div>
                <p className="stat-label">Deployed Projects</p>
              </div>
            </div>
          </div>

          <div className="hero-profile">
            <div className="project-showcase">
              <a
                href="https://access-bank-frontend-project.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="project-screenshot project-1"
                title="View Access Bank Clone"
              >
                <img src={accessBankPreview} alt="Access Bank Clone preview - Built by Obaloluwa Kolade Fajinmi" />
              </a>

              <a
                href="https://live-coding-mixlr-qxdap1i4j-danielfajinmi01s-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-screenshot project-2"
                title="View Mixlr Clone"
              >
                <img src={mixlrPreview} alt="Mixlr Clone preview - Built by Obaloluwa Kolade Fajinmi" />
              </a>
            </div>

            <div className="profile-transparent-wrapper">
              <img
                src="/obaloluwa fajinmi transperent.png"
                alt={`${SITE_DATA.name} - Full Stack Developer Portfolio Photo`}
                className="profile-transparent"
              />
            </div>

            <div className="profile-name-badge">
              <h3>{SITE_DATA.nickname}</h3>
              <p>{SITE_DATA.title}</p>
            </div>

            <div className="floating-cards">
              {floatingCards.map((card, idx) => {
                const Icon = card.icon
                return (
                  <div key={idx} className="floating-card">
                    <div className="floating-card-icon">
                      <Icon size={18} />
                    </div>
                    <div className="floating-card-text">
                      <h4>{card.title}</h4>
                      <p>{card.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
