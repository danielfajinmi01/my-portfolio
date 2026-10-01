import React from 'react'
import { FiBriefcase, FiCheck } from 'react-icons/fi'
import { EXPERIENCE } from '../siteData.js'

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header compact-header">
          <div className="section-tag">
            <span>EXPERIENCE</span>
          </div>
          <h2 className="section-title text-gradient">Professional work, clearly scoped.</h2>
          <p className="section-subtitle">
            Where I have applied engineering work in a professional product context.
          </p>
        </div>

        <div className="experience-grid">
          {EXPERIENCE.map((item) => (
            <article className="experience-card" key={item.company}>
              <div className="experience-card-header">
                <div className="experience-icon">
                  <FiBriefcase size={20} />
                </div>
                <div>
                  <p className="experience-label">{item.label}</p>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
              </div>

              <ul className="experience-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>
                    <FiCheck size={14} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
