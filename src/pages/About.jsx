import React from 'react'
import "./about.css"
import busybeelogo from "../assets/images/busybeelogo.jpeg"
import chef from "../assets/images/chef.png" 
import housekeeping from "../assets/images/housekeeping.png"
import laundry from "../assets/images/laundry.png"

const About = () => {
  return (
    <div className='about-container'>
      <section className="about-hero">
        <div className="about-hero-content">
            <img src={busybeelogo} alt="Busybee Logo" className='about-Logo'/>
                <h1>About Us</h1>
                <p>Connecting busy Professionals with trusted service providers for everyday household needs</p> 
                
        </div>
      </section>
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
                        <img src={housekeeping} alt='Housekeeping'/>
                        <h3>Housekeeping</h3>
                        <p>Professional cleaning and housekeeping services tailored to your schedule</p>
                      </div>
                      <div className='Service-card'>
                        <img src={laundry} alt='Laundry Service'/>
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
             <section className='about-cta'>
              <div className='about-cta-content'>
                <h2>Ready to Simplify Your Daily Routine?</h2>
                <p>Let BusyBee connect you with trusted professionals for your household and lifestyle needs</p>
                <button>Explore Services</button>
              </div>
             </section>
      </div>
  )
}
export default About;