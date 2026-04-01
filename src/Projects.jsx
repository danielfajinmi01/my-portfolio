import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, viewport } from './animation.js'
import accessBankPreview from './assets/access-bank-live.png'
import mixlrPreview from './assets/mixlr-live.png'

const PROJECTS = [
  {
    name: 'Access Bank Clone',
    brief: "A frontend clone of Access Bank's corporate site with responsive layout and interactive components.",
    previewUrl: 'https://access-bank-frontend-project.vercel.app',
    thumbnailUrl: accessBankPreview,
    stack: ['React', 'Tailwind CSS', 'Custom Hooks', 'Responsive UI'],
    challenge: 'The dropdown menus in the navigation required complex state management and accessibility.',
    solution: 'Implemented a custom hook to manage open/close states, used CSS transitions, and ensured keyboard navigation.',
  },
  {
    name: 'Mixlr Clone',
    brief: 'A frontend replica of the Mixlr audio broadcasting site, focusing on layout fidelity and responsiveness.',
    previewUrl: 'https://live-coding-mixlr-qxdap1i4j-danielfajinmi01s-projects.vercel.app/',
    thumbnailUrl: mixlrPreview,
    stack: ['React', 'Tailwind CSS', 'CSS Grid', 'Flexbox'],
    challenge: "Achieving a pixel-perfect layout that matched the original audio platform's complex grid.",
    solution: 'Utilized CSS Grid and Flexbox with Tailwind utilities, and refactored the component structure for reusability.',
  },
]

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="section"
      style={{ background: 'var(--bg-secondary)' }}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeInUp}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <p className="eyebrow">PROJECTS</p>
        <h2 className="section-title">Selected work</h2>
        <p className="section-copy mb-8 max-w-2xl">
          Two focused frontend builds that highlight responsive systems, interaction detail, and polished execution.
        </p>
        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.name}
              className="card project-card group relative overflow-hidden border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(27,34,48,0.96),rgba(18,26,39,0.98))] shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.34)]"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/80 to-transparent opacity-70" />
              <motion.a
                className="project-thumbnail"
                href={project.previewUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name} live preview`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.1 }}
              >
                <img
                  src={project.thumbnailUrl}
                  alt={`${project.name} live site preview`}
                  className="project-thumbnail-image"
                  loading="lazy"
                />
                <div className="project-thumbnail-content">
                  <span className="project-kicker">Preview</span>
                  <strong>{project.name}</strong>
                  <span>Responsive UI showcase</span>
                </div>
              </motion.a>
              <div className="mb-5 inline-flex rounded-full border border-[color:var(--border)] bg-white/5 px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                Featured Project
              </div>
              <div className="project-card-head">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">{project.name}</h3>
                <a className="project-link" href={project.previewUrl} target="_blank" rel="noreferrer">
                  Live preview
                </a>
              </div>
              <p className="text-[var(--text-muted)]">{project.brief}</p>
              <div className="tag-row">
                {project.stack.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
              <div className="project-notes">
                <h4>Challenges &amp; Solutions</h4>
                <p><strong>Challenge:</strong> {project.challenge}</p>
                <p><strong>Solution:</strong> {project.solution}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
