import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiPostman,
  SiVite,
  SiSqlite,
  SiRedux,
  SiHtml5,
  SiCss,
  SiExpo,
  SiFramer
} from 'react-icons/si'
import { SITE_DATA, SKILLS_CATEGORIES } from '../siteData.js'
import { FiCode, FiServer, FiSmartphone, FiTool } from 'react-icons/fi'

const CATEGORY_ICONS = {
  code: FiCode,
  server: FiServer,
  smartphone: FiSmartphone,
  wrench: FiTool
}

const ALL_TECH_ITEMS = [
  { label: 'React', icon: SiReact, color: '#61DAFB' },
  { label: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
  { label: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { label: 'Express', icon: SiExpress, color: '#000000' },
  { label: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { label: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { label: 'Git', icon: SiGit, color: '#F05032' },
  { label: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { label: 'Vite', icon: SiVite, color: '#646CFF' },
  { label: 'SQLite', icon: SiSqlite, color: '#003B57' },
  { label: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { label: 'CSS3', icon: SiCss, color: '#1572B6' },
  { label: 'Expo', icon: SiExpo, color: '#000020' },
  { label: 'Framer Motion', icon: SiFramer, color: '#0055FF' }
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'workflow', label: 'Workflow & Tools' }
  ]

  const filteredCategories = activeTab === 'all'
    ? SKILLS_CATEGORIES
    : SKILLS_CATEGORIES.filter(cat => cat.icon === (
        activeTab === 'frontend' ? 'code' :
        activeTab === 'backend' ? 'server' :
        activeTab === 'mobile' ? 'smartphone' : 'wrench'
      ))

  // Separate tech list into two halves for the scrolling marquees
  const midIndex = Math.ceil(ALL_TECH_ITEMS.length / 2)
  const track1 = [...ALL_TECH_ITEMS.slice(0, midIndex), ...ALL_TECH_ITEMS.slice(0, midIndex)]
  const track2 = [...ALL_TECH_ITEMS.slice(midIndex), ...ALL_TECH_ITEMS.slice(midIndex)]

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="section-tag">
            <span>SKILLS & STACK</span>
          </div>
          <h2 className="section-title text-gradient">Technology Stack</h2>
          <p className="section-subtitle">
            A curated set of tools and technologies I use to build scalable products.
          </p>
        </motion.div>

        {/* Scrolling Marquees */}
        <div className="skills-carousel-wrapper">
          <div className="skills-carousel">
            <div className="skills-track track-left">
              {track1.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="skill-logo-item">
                    <span style={{ display: 'flex', color: item.color }}>
                      <Icon size={24} />
                    </span>
                    <span className="skill-logo-name">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="skills-carousel" style={{ marginTop: '0.5rem' }}>
            <div className="skills-track track-right">
              {track2.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="skill-logo-item">
                    <span style={{ display: 'flex', color: item.color }}>
                      <Icon size={24} />
                    </span>
                    <span className="skill-logo-name">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Tab Selectors */}
        <div className="skills-tabs" style={{ marginTop: '4rem' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`skills-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filtered Grid Cards */}
        <motion.div
          className="skills-grid"
          layout
          style={{ marginTop: '2.5rem' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, idx) => {
              const IconComponent = CATEGORY_ICONS[cat.icon] || FiCode
              return (
                <motion.article
                  key={cat.title}
                  className="card skill-group-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'var(--text-primary)',
                      color: 'var(--bg-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComponent size={20} />
                    </div>
                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{cat.title}</h3>
                  </div>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {cat.description}
                  </p>

                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                    Key Focus Areas
                  </h4>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {cat.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>

                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                    Technologies & Libraries
                  </h4>
                  <div className="tag-row">
                    {cat.technologies.map(tech => (
                      <span key={tech} className="skill-tag">{tech}</span>
                    ))}
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
