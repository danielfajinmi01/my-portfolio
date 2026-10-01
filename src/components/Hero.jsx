import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { FiCode, FiMail, FiGithub, FiCpu, FiLayers, FiServer } from 'react-icons/fi'
import { SITE_DATA } from '../siteData.js'
import moovablePreview from '../assets/moovable-preview.png'
import igceNetworkPreview from '../assets/igce-network-preview.png'

const CountUp = ({ target, duration = 2000, active }) => {
  const [count, setCount] = useState(0)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (!active || finished) return
    let startTime
    let frameId

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount)
      } else {
        setFinished(true)
      }
    }

    frameId = requestAnimationFrame(updateCount)

    return () => {
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [target, duration, active, finished])

  return count
}

export default function Hero() {
  const [typedRole, setTypedRole] = useState('')
  const [typedCapability, setTypedCapability] = useState('')
  const [capabilityIndex, setCapabilityIndex] = useState(0)
  const [isDeletingCapability, setIsDeletingCapability] = useState(false)
  const [roleComplete, setRoleComplete] = useState(false)
  const [statsInView, setStatsInView] = useState(false)
  const statsRef = useRef(null)
  const floatingCardsRef = useRef([])

  useEffect(() => {
    const el = statsRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const primaryRole = SITE_DATA.roles[0] || SITE_DATA.title

    if (reduceMotion) {
      setTypedRole(primaryRole)
      setRoleComplete(true)
      return
    }

    if (roleComplete) return

    const timer = setTimeout(() => {
      setTypedRole(primaryRole.substring(0, typedRole.length + 1))
      if (typedRole.length + 1 === primaryRole.length) {
        setRoleComplete(true)
      }
    }, 95)

    return () => clearTimeout(timer)
  }, [typedRole, roleComplete])

  useEffect(() => {
    if (!roleComplete) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const capabilities = SITE_DATA.secondaryRoles

    if (reduceMotion) {
      setTypedCapability(capabilities[0])
      return
    }

    const currentCapability = capabilities[capabilityIndex]
    const timer = setTimeout(() => {
      if (isDeletingCapability) {
        const nextValue = currentCapability.substring(0, typedCapability.length - 1)
        setTypedCapability(nextValue)
        if (nextValue === '') {
          setIsDeletingCapability(false)
          setCapabilityIndex((prev) => (prev + 1) % capabilities.length)
        }
      } else {
        const nextValue = currentCapability.substring(0, typedCapability.length + 1)
        setTypedCapability(nextValue)
        if (nextValue === currentCapability) {
          setTimeout(() => setIsDeletingCapability(true), 1800)
        }
      }
    }, isDeletingCapability ? 45 : 80)

    return () => clearTimeout(timer)
  }, [typedCapability, capabilityIndex, isDeletingCapability, roleComplete])

  useEffect(() => {
    const cards = floatingCardsRef.current.filter(Boolean)
    if (!cards.length) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
      const entrance = gsap.fromTo(
        cards,
        { opacity: 0, y: 16, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: 'power2.out',
          stagger: 0.12,
          delay: 0.35
        }
      )

      const floats = cards.map((card, index) =>
        gsap.to(card, {
          y: index === 1 ? -8 : -10,
          duration: 4.8 + index * 0.45,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: index * 0.35
        })
      )

      return () => {
        entrance.kill()
        floats.forEach((tween) => tween.kill())
      }
    })

    mm.add('(max-width: 900px), (prefers-reduced-motion: reduce)', () => {
      gsap.set(cards, { clearProps: 'opacity,transform' })
    })

    return () => mm.revert()
  }, [])

  const floatingCards = [
    { icon: FiLayers, title: "Frontend Engineering", desc: "Interfaces & Systems" },
    { icon: FiServer, title: "Full-Stack Systems", desc: "Web & APIs" },
    { icon: FiCpu, title: "AI-Assisted Engineering", desc: "Agents & Debugging" }
  ]

  const showcaseProjects = [
    {
      title: "Moovable",
      role: "Frontend Engineer",
      context: "Logistics Technology Platform",
      image: moovablePreview,
      href: "https://getmoovable.com/",
      external: true,
      className: "project-1"
    },
    {
      title: "IGCE Network",
      role: "Full Stack Developer",
      context: "Telecommunications Platform",
      image: igceNetworkPreview,
      href: "https://igecnet.com",
      external: true,
      className: "project-2"
    }
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

            <p className="hero-capability-line" aria-live="polite">
              {roleComplete ? typedCapability : ''}
            </p>

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

            <div className="hero-stats" ref={statsRef}>
              {SITE_DATA.heroStats.map((item) => (
                <div className="stat-item" key={item.label}>
                  <div className="stat-number text-stat">
                    {item.value === '2+' ? (
                      <>
                        <CountUp target={SITE_DATA.stats.yearsExperience} active={statsInView} />
                        <span className="stat-plus">+</span>
                      </>
                    ) : item.value}
                  </div>
                  <p className="stat-label">{item.label}</p>
                  <p className="stat-detail">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-profile">
            <div className="project-showcase">
              {showcaseProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noopener noreferrer" : undefined}
                  className={`project-screenshot ${project.className}`}
                  title={`${project.title} - ${project.context}`}
                >
                  <img src={project.image} alt={`${project.title} preview`} />
                  <span className="showcase-overlay">
                    <span className="showcase-title">{project.title}</span>
                    <span className="showcase-role">{project.role}</span>
                    <span className="showcase-context">{project.context}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="profile-transparent-wrapper">
              <img
                src="/obaloluwa fajinmi transperent.png"
                alt={`${SITE_DATA.name} - Software Engineer Portfolio Photo`}
                className="profile-transparent"
              />
            </div>

            <div className="profile-name-badge">
              <p>{SITE_DATA.title}</p>
            </div>

            <div className="floating-cards">
              {floatingCards.map((card, idx) => {
                const Icon = card.icon
                return (
                  <div
                    key={idx}
                    ref={(el) => (floatingCardsRef.current[idx] = el)}
                    className="floating-card"
                  >
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
