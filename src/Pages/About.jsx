import React from 'react'
import "./About.css"
import busybeeLogo from "../assets/images/busybeeLogo.jpeg"

const About = () => {
  return (
    <div className='about-container'>
      <secton className="about-hero">
        <div className="about-hero-content">
            <img src={busybeeLogo} alt="Busybee Logo" className='about-Logo'/>
                <h1>About Us</h1>
                <p>Connecting busy Professionals with trusted service providers for everyday household needs</p>
                
        </div>
      </secton>
      <section className="about-mission">
        <div className="about-mission-content">
          <h2>Our Mission</h2>
          <p>At BusyBee, our mission is to simplify everyday living by Connecting busy professionals and families with trusted, reliable service providers. we aim to save time, reduce stress, and bring quality services closer to the people who need them most.</p>
        </div>
      </section>
      </div>
  )
}
export default About;