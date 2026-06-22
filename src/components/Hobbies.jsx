import React from 'react'
import { motion } from 'framer-motion'
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
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="hobbies" className="hobbies" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="section-tag">
            <span>OFF THE CLOCK</span>
          </div>
          <h2 className="section-title text-gradient">Interests & Hobbies</h2>
          <p className="section-subtitle">
            What I enjoy doing when I am not writing code or engineering systems.
          </p>
        </motion.div>

        <motion.div
          className="hobbies-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {HOBBIES.map((hobby, idx) => {
            const IconComponent = ICON_MAP[hobby.icon] || FiActivity
            return (
              <motion.div
                key={idx}
                className="hobby-card"
                variants={fadeInUp}
                whileHover={{ y: -5, borderColor: 'var(--text-secondary)' }}
              >
                <div className="hobby-icon">
                  <IconComponent size={22} />
                </div>
                <div className="hobby-content">
                  <h3>{hobby.title}</h3>
                  <p>{hobby.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
