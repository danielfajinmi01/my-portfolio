import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiServer, FiSmartphone, FiTool, FiActivity, FiGlobe, FiMessageSquare, FiHeart } from 'react-icons/fi'
import { SITE_DATA, SKILLS_CATEGORIES } from '../siteData.js'

const ICON_MAP = {
  code: FiCode,
  server: FiServer,
  smartphone: FiSmartphone,
  wrench: FiTool
}

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const statItems = [
    { label: "Projects Delivered", value: `${SITE_DATA.stats.projectsCompleted}+`, icon: FiActivity },
    { label: "Remote Availability", value: "Global", icon: FiGlobe },
    { label: "Response SLA", value: "< 24 Hours", icon: FiMessageSquare }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="section-tag">
            <span>ABOUT ME</span>
          </div>
          <h2 className="section-title text-gradient">Practical engineering with product thinking.</h2>
          <p className="section-subtitle">
            I bridge the gap between creative visual designs and structured technical architecture to build robust, scalable applications.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Left Column: Intro & Stats */}
          <motion.div
            className="about-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h3>Who I Am</h3>
            <p>
              I help founders, businesses, and engineering teams move from raw product ideas to reliable, high-fidelity web and mobile products.
            </p>
            <p>
              My engineering philosophy focuses on writing clean, maintainable codebases, designing accessible and responsive user interfaces, and establishing automated, hassle-free deployment workflows.
            </p>

            <div className="about-stats">
              {statItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="about-stat-item">
                    <div className="about-stat-number">{item.value}</div>
                    <div className="about-stat-label">{item.label}</div>
                  </div>
                )
              })}
            </div>

            <div className="startup-highlight" style={{ marginTop: '2.5rem' }}>
              <div className="highlight-badge">Remote Consulting</div>
              <h4>Freelance & Contract Work</h4>
              <p>
                Available to collaborate on <strong>fullstack systems</strong>. I prioritize transparent communication, pixel-perfect UI execution, and performant backend APIs.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Skill Category Cards */}
          <motion.div
            className="about-cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {SKILLS_CATEGORIES.map((category, idx) => {
              const IconComponent = ICON_MAP[category.icon] || FiCode
              return (
                <motion.div
                  key={idx}
                  className="about-card"
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                >
                  <div className="about-card-header">
                    <div className="about-card-icon">
                      <IconComponent size={24} />
                    </div>
                    <h4>{category.title}</h4>
                  </div>
                  <p>{category.description}</p>
                  <div className="tech-tags">
                    {category.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
