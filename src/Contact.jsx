import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, viewport } from './animation.js'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <motion.section
      id="contact"
      className="section"
      style={{ background: 'var(--bg-secondary)' }}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeInUp}
    >
      <div className="container contact-grid px-4 sm:px-6 lg:px-8">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2 className="section-title">Let us work together</h2>
          <p className="section-copy">
            Share your project scope, timeline and goals. I will reply with a clean implementation approach.
          </p>
          <p><a className="link" href="danielfainmi19@gamil.com">danielfainmi19@gamil.com</a></p>
        </div>

        <motion.form className="card contact-form border border-[color:var(--border)] bg-white/5 shadow-[0_20px_55px_rgba(0,0,0,0.22)]" onSubmit={handleSubmit} variants={fadeInUp}>
          <label>
            Name
            <input type="text" required name="name" />
          </label>
          <label>
            Email
            <input type="email" required name="email" />
          </label>
          <label>
            Message
            <textarea required name="message" rows="4" />
          </label>
          <button className="btn btn-primary" type="submit">
            {status === 'sent' ? 'Message sent' : 'Send message'}
          </button>
        </motion.form>
      </div>
    </motion.section>
  )
}
