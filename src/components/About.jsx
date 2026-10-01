import React from 'react'

export default function About() {
  const statItems = [
    { label: "Years Building", value: "2+" },
    { label: "Product Delivery", value: "Web + Mobile" },
    { label: "Available", value: "Remote" }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>ABOUT ME</span>
          </div>
          <h2 className="section-title text-gradient">Practical engineering with product thinking.</h2>
        </div>

        <div className="about-simple">
          <div className="about-intro">
            <p>I build polished digital products across frontend, backend and mobile.</p>
            <p>
              I'm frontend-specialized, but comfortable taking products beyond the interface, working with APIs, backend services, deployment and mobile delivery.
            </p>
          </div>

          <div className="about-stats">
            {statItems.map((item) => (
              <div key={item.label} className="about-stat-item">
                <div className="about-stat-number">{item.value}</div>
                <div className="about-stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
