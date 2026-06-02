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
      </div>
  )
}
export default About;