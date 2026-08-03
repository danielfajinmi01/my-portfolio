import React, { useState } from 'react'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiBriefcase, FiSend, FiLoader, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { SITE_DATA } from '../siteData.js'

const SOCIAL_ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
  x: FiTwitter,
  upwork: FiBriefcase
}

// Create a form at https://formspree.io/forms and set VITE_FORMSPREE_FORM_ID in .env(.local)
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID
const FORMSPREE_ENDPOINT = FORMSPREE_FORM_ID ? `https://formspree.io/f/${FORMSPREE_FORM_ID}` : null

const STATUS_COPY = {
  sending: 'Sending your message...',
  sent: "Message sent! I'll get back to you within 24 hours.",
  error: "Something went wrong sending your message. Please email me directly instead."
}

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!FORMSPREE_ENDPOINT) {
      console.error('Contact form is not configured: missing VITE_FORMSPREE_FORM_ID environment variable.')
      setStatus('error')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      })

      if (response.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 5000)
    }
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

              <button type="submit" className="submit-btn" disabled={status === 'sending' || status === 'sent'} style={{ marginTop: '1.25rem' }}>
                {status === 'sending' ? <FiLoader size={18} className="spin" /> : <FiSend size={18} />}
                <span>{status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent' : 'Send Message'}</span>
              </button>

              {status === 'sent' && (
                <div className="form-message success">
                  <FiCheck size={16} />
                  <span>{STATUS_COPY.sent}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="form-message error">
                  <FiAlertCircle size={16} />
                  <span>{STATUS_COPY.error}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
