import React from 'react'
import { FiAward, FiMusic, FiBook, FiCompass, FiFilm, FiActivity } from 'react-icons/fi'
import { FaGamepad } from 'react-icons/fa'
import { HOBBIES } from '../siteData.js'

const ICON_MAP = {
  gamepad: FaGamepad,
  crown: FiAward,
  music: FiMusic,
  mountain: FiCompass,
  book: FiBook,
  film: FiFilm
}

export default function Hobbies() {
  return (
    <section id="hobbies" className="hobbies" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>OFF THE CLOCK</span>
          </div>
          <h2 className="section-title text-gradient">Interests & Hobbies</h2>
          <p className="section-subtitle">
            What I enjoy doing when I am not writing code or engineering systems.
          </p>
        </div>git 

        <div className="hobbies-grid">
          {HOBBIES.map((hobby, idx) => {
            const IconComponent = ICON_MAP[hobby.icon] || FiActivity
            return (
              <div key={idx} className="hobby-card">
                <div className="hobby-icon">
                  <IconComponent size={22} />
                </div>
                <div className="hobby-content">
                  <h3>{hobby.title}</h3>
                  <p>{hobby.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
