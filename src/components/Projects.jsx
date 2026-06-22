import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiLock, FiTerminal } from 'react-icons/fi'
import { SITE_DATA, PROJECTS } from '../siteData.js'

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="section-tag">
            <span>SELECTED WORK</span>
          </div>
          <h2 className="section-title text-gradient">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of web platforms and mobile builds, representing frontend execution, backend state sync, and custom UI design.
          </p>
        </motion.div>

        <div className="projects-list">
          {PROJECTS.map((project, index) => {
            const isDeployed = project.status === 'deployed'
            const statusClass = project.status === 'deployed' ? 'deployed' : 'in-development'
            const projectNumber = String(index + 1).padStart(2, '0')

            return (
              <motion.article
                key={project.id}
                className="project-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
              >
                <span className="project-number">{projectNumber}</span>

                {/* Left: Project Image */}
                <div className="project-image-container">
                  <div className="project-image-inner">
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className="project-img"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Right: Project Information */}
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-type">{project.type}</span>
                    <span className={`project-status ${statusClass}`}>
                      {project.status === 'deployed' ? '• Deployed' : '• In Development'}
                    </span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tech-stack">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>

                  {/* Challenge & Solution details */}
                  <div className="project-notes" style={{ marginBottom: '2rem' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FiTerminal size={14} />
                      Scope Details
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0.4rem 0' }}>
                      <strong>Execution Role:</strong> {project.role}
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0.4rem 0' }}>
                      <strong>Key Core Focus:</strong> {project.features[0]}
                    </p>
                  </div>

                  <div className="project-links">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link primary"
                      >
                        <FiExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="project-link disabled private">
                        <FiLock size={16} style={{ marginRight: '6px' }} />
                        Ongoing Build
                      </span>
                    )}

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        <FiGithub size={16} />
                        Repository
                      </a>
                    ) : (
                      project.github === null && (
                        <span className="project-link disabled">
                          Code Private
                        </span>
                      )
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          className="projects-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p>Want to see more of my coding work and backend repositories?</p>
          <a
            href={SITE_DATA.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FiGithub size={18} />
            Explore More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
