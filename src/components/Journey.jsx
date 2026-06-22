import React from 'react'
import { motion } from 'framer-motion'
import { FiBookOpen, FiCode, FiServer, FiSmartphone, FiMonitor, FiCheck } from 'react-icons/fi'
import { FaRocket } from 'react-icons/fa'
import { TIMELINE } from '../siteData.js'

const ICON_MAP = {
  book: FiBookOpen,
  desktop: FiMonitor,
  code: FiCode,
  server: FiServer,
  mobile: FiSmartphone,
  rocket: FaRocket
}

export default function Journey() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="journey" className="journey" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="section-tag">
            <span>MY PATH</span>
          </div>
          <h2 className="section-title text-gradient">Development Journey</h2>
          <p className="section-subtitle">
            A chronological look at my progress, technical integrations, and key engineering milestones.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="journey-stats-bar"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="journey-stat-item">
            <span className="journey-stat-value">2024</span>
            <span className="journey-stat-label">Journey Started</span>
          </div>
          <div className="journey-progress-bar-wrapper">
            <div className="journey-progress-bar">
              <div className="journey-progress-fill" style={{ width: '85%' }} />
            </div>
            <span className="journey-progress-text">Fullstack Road: 85% Completed</span>
          </div>
          <div className="journey-stat-item">
            <span className="journey-stat-value">Active</span>
            <span className="journey-stat-label">Status: Freelancing</span>
          </div>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="journey-timeline">
          <div className="timeline-line">
            <div className="timeline-line-progress" style={{ height: '100%' }} />
          </div>

          {TIMELINE.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || FiCode
            const isLeft = index % 2 === 0
            const alignmentClass = isLeft ? 'left' : 'right'
            const isCompleted = item.year !== 'Ongoing'

            return (
              <motion.div
                key={index}
                className={`timeline-item ${alignmentClass} ${isCompleted ? 'completed' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, x: isLeft ? -50 : 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
              >
                <div className="timeline-dot">
                  <div className="timeline-dot-inner">
                    <IconComponent size={16} />
                  </div>
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div className="timeline-card-icon">
                      <IconComponent size={20} />
                    </div>
                    <div className="timeline-card-meta">
                      <span className="timeline-year">{item.year}</span>
                      <span className="timeline-type">
                        {item.type.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.description}</p>

                  <ul className="timeline-achievements">
                    {item.achievements.map((ach, i) => (
                      <li key={i}>
                        <FiCheck size={14} className="timeline-check" style={{ color: 'var(--text-primary)', marginRight: '8px', flexShrink: 0 }} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
