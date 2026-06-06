import React from 'react'
import "./About.css"
import busybeeLogo from "../assets/images/busybeeLogo.jpeg"
import chef from "../assets/images/chef.png" 
import Housekeeping from "../assets/images/Housekeeping.png"
import Laundry from "../assets/images/Laundry.png"

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
             <section className="about-services">
               <div className="about-services-content">
                  <h2>Our Services</h2>
                     <div className="service-grid">
                      <div className='Service-card'>
                        <img src={Housekeeping} alt='Housekeeping'/>
                        <h3>Housekeeping</h3>
                        <p>Professional cleaning and housekeeping services tailored to your schedule</p>
                      </div>
                      <div className='Service-card'>
                        <img src={Laundry} alt='Laundry Service'/>
                        <h3>Laundry</h3>
                        <p>Convenieent Laundry services designed to save your time and effort</p>
                             </div>
                          <div className='Service-card'>
                            <img src={chef} alt='Private Chef'/>
                             <h3>Private chef</h3>                   
                    <p>Enjoy freshly prepared meals  from experienced culinary professionals</p>
                          </div>       
                      </div>   
               </div>
             </section>
             <section className="Why-us">
                  <div className='Why-us-content'>
                    <h2>Why Choose BusyBee</h2>
                    <div className='Why-grid'>
                     <div className='Why-card'>
                       <h3>Verified Professionals</h3>
                      <p>Every service provider is carefully selected to ensure quality and reliability.</p>
                     </div>
                     <div className='Why-card'>
                      <h3>Flexible Scheduling</h3>
                      <p>Book services at times that fits your busy lifestyle.</p>
                     </div>
                     <div className='Why-card'>
                      <h3>Quality Service</h3>
                      <p>We focus on delivering exceptional experiences for every customer</p>
                     </div>
                      <div className='Why-card'>
                        <h3>Customer Satisfaction</h3>
                        <p> Your comfort and peace of mind remain our highest priorities.</p>
                      </div>
                    </div>

                  </div>
             </section>
      </div>
  )
}
export default About;