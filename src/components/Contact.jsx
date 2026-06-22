import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiBriefcase, FiSend } from 'react-icons/fi'
import { SITE_DATA } from '../siteData.js'

const SOCIAL_ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
  x: FiTwitter,
  upwork: FiBriefcase
}

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim() ?? ''
    const email = formData.get('email')?.toString().trim() ?? ''
    const subjectVal = formData.get('subject')?.toString().trim() ?? ''
    const message = formData.get('message')?.toString().trim() ?? ''

    const subject = encodeURIComponent(subjectVal || `Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )

    setStatus('sent')
    window.location.href = `mailto:${SITE_DATA.email}?subject=${subject}&body=${body}`
    setTimeout(() => setStatus('idle'), 3000)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="section-tag">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-title text-gradient">Let's Work Together</h2>
          <p className="section-subtitle">
            Have an open role, freelance contract, or project scope? Let's talk and build something exceptional.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left Column: Contact Cards & Socials */}
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h3>Contact Information</h3>
            <p>
              I'm always excited to collaborate on new challenges. Whether you want to discuss a project, consult on technical layouts, or just say hello, feel free to reach out!
            </p>

            <div className="contact-cards">
              <a href={`mailto:${SITE_DATA.email}`} className="contact-card">
                <div className="contact-card-icon">
                  <FiMail size={22} />
                </div>
                <div className="contact-card-content">
                  <h4>Email Me</h4>
                  <p>{SITE_DATA.email}</p>
                </div>
              </a>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <FiMapPin size={22} />
                </div>
                <div className="contact-card-content">
                  <h4>Location</h4>
                  <p>{SITE_DATA.location}</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              {Object.keys(SITE_DATA.socialLinks).map((key) => {
                const IconComponent = SOCIAL_ICONS[key] || FiGithub
                const url = SITE_DATA.socialLinks[key]
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={key.toUpperCase()}
                  >
                    <IconComponent size={22} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="contact-form-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="contact-form-header">
              <h3>Send A Message</h3>
              <p>Fill out the form below to open your system's email application with the prefilled message details.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required placeholder="e.g. John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" required placeholder="e.g. john@example.com" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="e.g. Project Consultation" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="Describe your project goals or inquiries..." />
              </div>

              <button type="submit" className="submit-btn" disabled={status === 'sent'}>
                <FiSend size={18} />
                <span>{status === 'sent' ? 'Opening Mail Client...' : 'Send Message'}</span>
              </button>

              {status === 'sent' && (
                <div className="form-message success">
                  <span>Launching your default email client...</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
