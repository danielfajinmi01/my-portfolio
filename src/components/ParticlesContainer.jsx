import React, { useEffect, useState } from 'react'

export default function ParticlesContainer() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const tempParticles = Array.from({ length: 25 }).map((_, idx) => ({
      id: idx,
      style: {
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        animationDelay: `${Math.random() * 20}s`,
        animationDuration: `${15 + Math.random() * 20}s`,
        transform: `scale(${0.5 + Math.random() * 1.5})`
      }
    }))
    setParticles(tempParticles)
  }, [])

  return (
    <div className="particles-container" aria-hidden="true">
      {particles.map(p => (
        <div key={p.id} className="particle" style={p.style} />
      ))}
    </div>
  )
}
