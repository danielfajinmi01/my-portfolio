import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, viewport } from './animation.js'

const TYPEWRITER_WORDS = ['Fullstack', 'Backend', 'Frontend']

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[wordIndex]
    const isWordComplete = typedText === currentWord
    const isWordCleared = typedText === ''

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.slice(0, typedText.length + 1))

        if (isWordComplete) {
          setIsDeleting(true)
        }
        return
      }

      setTypedText(currentWord.slice(0, typedText.length - 1))

      if (isWordCleared) {
        setIsDeleting(false)
        setWordIndex((wordIndex + 1) % TYPEWRITER_WORDS.length)
      }
    }, !isDeleting ? (isWordComplete ? 1100 : 105) : (isWordCleared ? 240 : 65))

    return () => window.clearTimeout(timeout)
  }, [isDeleting, typedText, wordIndex])

  return (
    <motion.section
      id="hero"
      className="section hero"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeInUp}
    >
      <div className="container hero-grid px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="hero-copy-wrap">
          <p className="eyebrow">FULL STACK DEVELOPER</p>
          <h1 className="hero-title">
            I am a <span className="hero-name">Fullstack-minded</span>
          </h1>
          <div className="typewriter-shell" aria-live="polite">
            <span className="typewriter-prefix">Developer shaped by</span>
            <span className="accent">{typedText}</span>
            <span className="typewriter-cursor" aria-hidden="true" />
          </div>
          <p className="hero-copy">
            I design and develop responsive web apps with React, Node.js, Express and MongoDB.
            Available for freelance and remote contracts.
          </p>
          <div className="hero-cta-row">
            <a className="btn btn-primary" href="#projects">View projects</a>
            <a className="btn btn-ghost" href="#contact">Contact me</a>
          </div>
        </motion.div>
        <motion.aside
          className="hero-panel hero-visual card border border-[color:var(--border)] bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-sm"
          variants={fadeInUp}
        >
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-orb hero-orb-three" />
          <div className="hero-panel-inner">
            <p className="panel-title">Quick summary</p>
            <ul>
              <li>Expert in building production web apps</li>
              <li>Frontend and API architecture</li>
              <li>Clean UI and performance-first implementation</li>
            </ul>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  )
}
