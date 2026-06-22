import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiMail, FiGithub, FiLayout, FiServer } from 'react-icons/fi'
import { SITE_DATA } from '../siteData.js'
import accessBankPreview from '../assets/access-bank-live.png'
import mixlrPreview from '../assets/mixlr-live.png'

const CountUp = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (started) return
    let startTime
    let frameId

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount)
      } else {
        setStarted(true)
      }
    }

    const timer = setTimeout(() => {
      frameId = requestAnimationFrame(updateCount)
    }, 500)

    return () => {
      clearTimeout(timer)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [target, duration, started])

  return count
}

export default function Hero() {
  const [typedRole, setTypedRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const roles = SITE_DATA.roles
    const currentRole = roles[roleIndex]
    const timer = setTimeout(() => {
      if (isDeleting) {
        setTypedRole(currentRole.substring(0, typedRole.length - 1))
        if (typedRole === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      } else {
        setTypedRole(currentRole.substring(0, typedRole.length + 1))
        if (typedRole === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timer)
  }, [typedRole, isDeleting, roleIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const floatingCards = [
    { icon: FiLayout, title: "UI/UX", desc: "Design" },
    { icon: FiCode, title: "Frontend", desc: "Development" },
    { icon: FiServer, title: "Backend", desc: "Architecture" }
  ]

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-container">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-badge" variants={itemVariants}>
              <div className="badge-dot" />
              <span>{SITE_DATA.tagline}</span>
            </motion.div>

            <motion.p className="hero-greeting" variants={itemVariants}>Hi, I'm</motion.p>
            <motion.h1 className="hero-name" variants={itemVariants}>{SITE_DATA.name}</motion.h1>

            <motion.div className="hero-title-wrapper" variants={itemVariants}>
              <span className="hero-title">{typedRole}</span>
              <span className="cursor-blink" />
            </motion.div>

            <motion.p className="hero-description" variants={itemVariants}>
              {SITE_DATA.bio}
            </motion.p>

            <motion.div className="hero-buttons" variants={itemVariants}>
              <a href="#projects" className="btn btn-primary">
                <FiCode size={18} />
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                <FiMail size={18} />
                Get In Touch
              </a>
              <a
                href={SITE_DATA.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <FiGithub size={18} />
                GitHub
              </a>
            </motion.div>

            <motion.div className="hero-stats" variants={itemVariants}>
              <div className="stat-item">
                <div className="stat-number">
                  <CountUp target={SITE_DATA.stats.yearsExperience} />
                  <span className="stat-plus">+</span>
                </div>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <CountUp target={SITE_DATA.stats.projectsCompleted} />
                  <span className="stat-plus">+</span>
                </div>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <CountUp target={SITE_DATA.stats.deployedProjects} />
                </div>
                <p className="stat-label">Deployed Projects</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-profile"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="project-showcase">
              <motion.a
                href="https://access-bank-frontend-project.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="project-screenshot project-1"
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 8 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                title="View Access Bank Clone"
              >
                <img src={accessBankPreview} alt="Access Bank Clone preview" />
              </motion.a>

              <motion.a
                href="https://live-coding-mixlr-qxdap1i4j-danielfajinmi01s-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-screenshot project-2"
                initial={{ opacity: 0, x: 80, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: -5 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                title="View Mixlr Clone"
              >
                <img src={mixlrPreview} alt="Mixlr Clone preview" />
              </motion.a>
            </div>

            <motion.div
              className="profile-transparent-wrapper"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img
                src="/obaloluwa fajinmi transperent.png"
                alt={SITE_DATA.name}
                className="profile-transparent"
              />
            </motion.div>

            <motion.div
              className="profile-name-badge"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h3>{SITE_DATA.nickname}</h3>
              <p>{SITE_DATA.title}</p>
            </motion.div>

            <div className="floating-cards">
              {floatingCards.map((card, idx) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={idx}
                    className="floating-card"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + idx * 0.2, duration: 0.5 }}
                  >
                    <div className="floating-card-icon">
                      <Icon size={18} />
                    </div>
                    <div className="floating-card-text">
                      <h4>{card.title}</h4>
                      <p>{card.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
