import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, viewport } from './animation.js'

export default function About() {
  return (
    <motion.section
      id="about"
      className="section"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeInUp}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <p className="eyebrow">ABOUT</p>
        <h2 className="section-title">Practical engineering with product thinking.</h2>
        <div className="about-grid">
          <p className="section-copy">
            I help founders and teams move from ideas to reliable, user-friendly web products.
            My focus is building maintainable codebases, clear interfaces, and smooth deployment workflows.
          </p>
          <div className="stats-grid">
            <article className="card stat-card border border-[color:var(--border)] bg-white/5 shadow-[0_14px_35px_rgba(0,0,0,0.18)]"><strong>15+</strong><span>Projects delivered</span></article>
            <article className="card stat-card border border-[color:var(--border)] bg-white/5 shadow-[0_14px_35px_rgba(0,0,0,0.18)]"><strong>99%</strong><span>Client satisfaction target</span></article>
            <article className="card stat-card border border-[color:var(--border)] bg-white/5 shadow-[0_14px_35px_rgba(0,0,0,0.18)]"><strong>24/7</strong><span>Communication discipline</span></article>
            <article className="card stat-card border border-[color:var(--border)] bg-white/5 shadow-[0_14px_35px_rgba(0,0,0,0.18)]"><strong>Remote</strong><span>Global availability</span></article>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
