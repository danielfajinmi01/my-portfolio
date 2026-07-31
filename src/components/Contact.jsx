import React, { useState } from 'react'
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
    const firstName = formData.get('firstName')?.toString().trim() ?? ''
    const lastName = formData.get('lastName')?.toString().trim() ?? ''
    const email = formData.get('email')?.toString().trim() ?? ''
    const subjectVal = formData.get('subject')?.toString().trim() ?? ''
    const message = formData.get('message')?.toString().trim() ?? ''

    const fullName = `${firstName} ${lastName}`.trim() || 'Portfolio Visitor'
    const subject = encodeURIComponent(subjectVal || `Portfolio consultation request from ${fullName}`)
    const body = encodeURIComponent(
      `Visitor Details:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\n\nProject / Consultation Message:\n${message}`
    )

    setStatus('sent')
    window.location.href = `mailto:${SITE_DATA.email}?subject=${subject}&body=${body}`
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-title text-gradient">Let's Work Together</h2>
          <p className="section-subtitle">
            Have an open role, freelance contract, or project scope? Fill in your details below to get connected.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Cards & Socials */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              I'm always excited to collaborate on new challenges. Whether you want to discuss a project, consult on technical layouts, or talk about remote opportunities, feel free to reach out!
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
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-container">
            <div className="contact-form-header">
              <h3>Send A Message</h3>
              <p>Enter your contact details below to send your consultation or project inquiry.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" required placeholder="e.g. John" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required placeholder="e.g. Doe" />
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="e.g. john@example.com" />
              </div>

              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="e.g. Remote Contract / Project Inquiry" />
              </div>

              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="Describe your project goals or contract requirements..." />
              </div>

              <button type="submit" className="submit-btn" disabled={status === 'sent'} style={{ marginTop: '1.25rem' }}>
                <FiSend size={18} />
                <span>{status === 'sent' ? 'Opening Mail Client...' : 'Send Message'}</span>
              </button>

              {status === 'sent' && (
                <div className="form-message success">
                  <span>Launching your default email client with your details...</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
