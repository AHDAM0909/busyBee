import React, { useState, useEffect } from 'react';
import { PiHandSwipeRightLight } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { FaRegSmile } from "react-icons/fa";
import "./home.css"

const Home = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (!products?.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products]);

  const goToSlide = (index) => {
    if (!products?.length) return;
    setActiveIndex(index);
  };

  const nextSlide = () => {
    if (!products?.length) return;
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    if (!products?.length) return;
    setActiveIndex(
      (prev) => (prev - 1 + products.length) % products.length
    );
  };
  return (
    <>

      <div className="carousel">
        <div className="carousel-inner">
          {products.map((image, index) => (
            <div
              key={index}
              className="carousel-images"
            >
              <img
                src={image.images}
                className={
                  index === activeIndex
                    ? "carousel-slide active"
                    : "carousel-slide"
                }
                alt={`slide ${index}`}
              />

              {index === activeIndex && (
                <div className="carousel-description">
                  <h2>{image.name}</h2>
                  <button>Learn More</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="carousel-control prev">{"❮"} </button>
        <button onClick={nextSlide} className="carousel-control next">{"❯"}</button>
        <div className="carousel-indicators">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={index === activeIndex ? 'dot active' : 'dot'}
            />
          ))}
        </div>
      </div>
      <div className='how-it-works'>
        <div className='how-it-works-content'>
          <h1>How ServiceLinks Works</h1>
        </div>

        <div className="allworkStep">

          {/* CARD 1 */}
          <div className='how-it-works-steps '>

            <div className='icon'>
              <i className=''>
                <PiHandSwipeRightLight />
              </i>
            </div>

            <div className='workService'>
              <h3 className='step-title-underline'>
                1. Select Your Service
              </h3>

              <p>
                Choose from our elite range of Chef,
                Laundry, or Professional Cleaning
                services with a single tap.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className='how-it-works-steps '>

            <div className='icon'>
              <i >
                <SlCalender />
              </i>
            </div>

            <div className='workService'>
              <h3 className='step-title-underline'>
                2. Choose a Schedule
              </h3>

              <p>
                Pick a date and time that fits your
                busy life. We offer flexible scheduling
                to suit your specific needs.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className='how-it-works-steps 
                   '>

            <div className='icon'>
              <i >
                <FaRegSmile />
              </i>
            </div>

            <div className='workService'>
              <h3 className='step-title-underline'>
                3. Relax & Enjoy
              </h3>

              <p>
                Sit back and enjoy professional
                service delivery from trusted experts.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="downloadService">
        <div>
          <div className='downloadService-container'>
            <h1>Download the BusyBee App</h1>
          </div>

          <div className="downloadService-content">
            <p>Every professional on our platform undergoes a rigorous vetting process and security background check. Your safety and peace of mind are our highest priorities while we bring premium service to your home.</p>
          </div>
          <div className="downloadService-link">
            <p><span>DOWNLOAD ON THE </span> APP STORE</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className='footer-container'>
          <div className='logo'>
            <h1>
              BUSY <span className='logo-span'>BEE</span>
            </h1>
            <p>Premium home service designed for modern African living </p>
          </div>
          <div className="footer-quicklinks">
            <h1>QUICKLINKS</h1>
            <ul>
              <li>Home</li>
            </ul>
          </div>

        </div>
        <p className='copyright'>© 2026 BusyBee. All rights reserved.</p>
      </div>
    </>
  )
}

export default Home