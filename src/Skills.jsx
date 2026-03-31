import React from 'react'
import { motion } from 'framer-motion'
import {
  SiExpress,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'
import { fadeInUp, viewport } from './animation.js'

const SKILLS = [
  { group: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'Accessibility'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Firebase'] },
  { group: 'Workflow', items: ['Git', 'Postman', 'Vite', 'Deployment'] },
]

const STACK_ICONS = [
  { label: 'React', icon: SiReact },
  { label: 'JavaScript', icon: SiJavascript },
  { label: 'Tailwind CSS', icon: SiTailwindcss },
  { label: 'Node.js', icon: SiNodedotjs },
  { label: 'Express', icon: SiExpress },
  { label: 'MongoDB', icon: SiMongodb },
  { label: 'Firebase', icon: SiFirebase },
  { label: 'Git', icon: SiGit },
  { label: 'Postman', icon: SiPostman },
  { label: 'Vite', icon: SiVite },
]

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="section"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeInUp}
    >
      <div className="container">
        <p className="eyebrow">SKILLS</p>
        <h2 className="section-title">Technology stack</h2>
        <div className="stack-marquee" aria-label="Scrolling technology stack icons">
          <div className="stack-track">
            {[...STACK_ICONS, ...STACK_ICONS].map(({ label, icon: Icon }, index) => (
              <div key={`${label}-${index}`} className="stack-pill">
                <Icon className="text-lg" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-grid">
          {SKILLS.map(group => (
            <article key={group.group} className="card skill-group-card">
              <h3>{group.group}</h3>
              <div className="tag-row">
                {group.items.map(item => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
