import React from 'react'
import { FiCloud, FiCode, FiCpu, FiServer, FiSmartphone, FiTool } from 'react-icons/fi'
import { AI_ASSISTED_ENGINEERING, CURRENTLY_EXPLORING, SKILLS_CATEGORIES } from '../siteData.js'

const CATEGORY_ICONS = {
  code: FiCode,
  server: FiServer,
  smartphone: FiSmartphone,
  cloud: FiCloud,
  wrench: FiTool
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header compact-header">
          <div className="section-tag">
            <span>SKILLS & STACK</span>
          </div>
          <h2 className="section-title text-gradient">Technical Capabilities</h2>
          <p className="section-subtitle">
            The tools and systems I can work with across product delivery.
          </p>
        </div>

        <div className="skills-grid compact-skills-grid">
          {SKILLS_CATEGORIES.map((category) => {
            const IconComponent = CATEGORY_ICONS[category.icon] || FiCode
            return (
              <article key={category.title} className="skill-group-card compact-skill-card">
                <div className="skill-card-header">
                  <div className="skill-card-icon">
                    <IconComponent size={20} />
                  </div>
                  <h3>{category.title}</h3>
                </div>
                <p>{category.description}</p>
                <div className="tag-row">
                  {category.technologies.map((tech) => (
                    <span key={tech} className="skill-tag">{tech}</span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="skills-support-row">
          <div className="ai-assisted-panel compact-support-panel">
            <div>
              <p className="experience-label">AI-ASSISTED WORKFLOW</p>
              <p>{AI_ASSISTED_ENGINEERING.description}</p>
            </div>
            <div className="ai-tool-tags">
              {AI_ASSISTED_ENGINEERING.tools.map((tool) => (
                <span key={tool} className="ai-tool-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="currently-exploring compact-support-panel">
            <div>
              <p className="experience-label">CURRENTLY EXPLORING</p>
            </div>
            <div className="exploring-tags">
              {CURRENTLY_EXPLORING.map((tech) => (
                <span key={tech} className="exploring-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
