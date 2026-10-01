import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Journey from './components/Journey.jsx'
import Hobbies from './components/Hobbies.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import ParticlesContainer from './components/ParticlesContainer.jsx'
import ScrollTopButton from './components/ScrollTopButton.jsx'

export default function App() {
  return (
    <div className="app-shell">
      {/* Vercel Web Visitor Analytics & Speed Performance Tracking */}
      <Analytics />
      <SpeedInsights />

      {/* Global layouts and trackers */}
      <ScrollProgress />
      <ParticlesContainer />
      <div className="bg-grid" />

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Journey />
        <Hobbies />
        <Contact />
      </main>

      <Footer />
      <ScrollTopButton />
    </div>
  )
}
