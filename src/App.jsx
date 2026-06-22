import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
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
      {/* Global layouts and trackers */}
      <ScrollProgress />
      <ParticlesContainer />
      <div className="bg-grid" />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
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
