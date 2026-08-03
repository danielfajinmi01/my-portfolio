import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiGithub, FiExternalLink, FiLock, FiTerminal, FiDownload } from 'react-icons/fi'
import { SITE_DATA, PROJECTS } from '../siteData.js'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    if (!cards.length || !sectionRef.current) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 300px)', () => {
      // 1. Initial State Setup: Card 0 visible, cards 1..N below stage
      cards.forEach((card, i) => {
        if (i !== 0) {
          gsap.set(card, { yPercent: 105, scale: 0.96 })
        } else {
          gsap.set(card, { yPercent: 0, scale: 1 })
        }
      })

      // 2. Timeline Pinned Scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: `+=${cards.length * 750}`,
          pin: true,
          scrub: 0.4,
          anticipatePin: 1
        }
      })

      // 3. Sequentially stack cards with zero bottom overflow
      cards.forEach((card, i) => {
        if (i === 0) return

        const prevCards = cards.slice(0, i)

        // Incoming card slides up into stage
        tl.to(card, {
          yPercent: 0,
          scale: 1,
          duration: 1,
          ease: 'power1.out'
        })

        // Scale previous cards cleanly without pushing them down
        prevCards.forEach((prevCard, pIdx) => {
          const depth = i - pIdx
          tl.to(
            prevCard,
            {
              scale: Math.max(0.92, 1 - depth * 0.025),
              y: 0,
              duration: 1,
              ease: 'power1.out'
            },
            '<'
          )
        })
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section id="projects" className="projects-pin-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '0.5rem' }}>
          <div className="section-tag" style={{ marginBottom: '0.35rem', padding: '0.3rem 0.8rem' }}>
            <span>SELECTED WORK</span>
          </div>
          <h2 className="section-title text-gradient" style={{ marginBottom: '0.25rem', fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)' }}>Featured Projects</h2>
          <p className="section-subtitle" style={{ fontSize: '0.875rem' }}>
            Scroll down to stack through featured web platforms and mobile apps.
          </p>
        </div>

        {/* Pinned Card Stack Stage (Zero Bottom Overflow) */}
        <div className="cards-stack-stage" ref={stageRef}>
          {PROJECTS.map((project, index) => {
            const statusClass = project.status === 'deployed' ? 'deployed' : 'in-development'
            const projectNumber = String(index + 1).padStart(2, '0')
            const totalCount = String(PROJECTS.length).padStart(2, '0')

            return (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="stack-card-item"
                style={{ zIndex: index + 1 }}
              >
                <article className="card-inner">
                  {/* Left Column: Image Box */}
                  <div className="card-image-box">
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className={`card-img ${project.type?.toLowerCase().includes('mobile') ? 'mobile' : 'web'}`}
                    />
                  </div>

                  {/* Right Column: Information & Actions */}
                  <div className="card-content-box">
                    <div>
                      <div className="card-header-meta">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                          <span className="project-type">{project.type}</span>
                          <span className={`project-status ${statusClass}`}>
                            {project.statusLabel
                              ? `• ${project.statusLabel}`
                              : (project.status === 'deployed' ? '• Deployed' : '• In Development')
                            }
                          </span>
                        </div>
                        <span className="card-index-badge">{projectNumber} / {totalCount}</span>
                      </div>

                      <div className="card-title-row">
                        {project.icon && (
                          <img
                            src={project.icon}
                            alt=""
                            className="card-logo-icon"
                          />
                        )}
                        <h3 className="card-title">{project.title}</h3>
                      </div>
                      
                      <p className="card-desc">{project.description}</p>

                      <div className="card-tech-stack">
                        {project.technologies.slice(0, 4).map(tech => (
                          <span key={tech} className="tech-pill">{tech}</span>
                        ))}
                      </div>

                      <div className="card-scope-notes">
                        <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                          <FiTerminal size={12} /> Scope & Execution Details
                        </p>
                        <p><strong>Role:</strong> {project.role}</p>
                        <p><strong>Core Focus:</strong> {project.features[0]}</p>
                      </div>
                    </div>

                    <div className="card-links-row">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link primary"
                        >
                          <FiExternalLink size={14} /> Live Demo
                        </a>
                      )}

                      {project.apkUrl && (
                        <a
                          href={project.apkUrl}
                          download="RoyalNotes.apk"
                          className="project-link primary"
                          style={{
                            background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
                            color: '#ffffff',
                            border: 'none',
                            boxShadow: '0 4px 14px rgba(139, 92, 246, 0.4)'
                          }}
                        >
                          <FiDownload size={14} /> Download APK
                        </a>
                      )}

                      {!project.liveUrl && !project.apkUrl && (
                        <span className="project-link disabled private">
                          <FiLock size={14} style={{ marginRight: '5px' }} /> Ongoing Build
                        </span>
                      )}

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          <FiGithub size={14} /> Repository
                        </a>
                      ) : (
                        project.github === null && (
                          <span className="project-link disabled">Code Private</span>
                        )
                      )}
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
