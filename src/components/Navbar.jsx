import { useState } from 'react'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { PiList, PiX } from "react-icons/pi"
import "./navbar.css"
const Navbar = () => {
  // MENU STATE
  const [menuOpen, setMenuOpen] = useState(false)

  // TOGGLE FUNCTION
  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen)
  // }
  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }
  return (
    <header className='Header'>

      <div className='header-container'>

        {/* LOGO */}
        <div className='logo'>
          <h1>
            BUSY <span className='logo-span'>BEE</span>
          </h1>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className='nav-desktop'>
          {/* 
          <Link to="/" className='nav-links'>
            Home
          </Link> */}
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}> Home </NavLink>

          <NavLink to="/service" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>
            Services
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-links active" : "nav-links"}>
            About
          </NavLink>

          {/* <Link to="/contact" className='nav-links'>
        Contact
      </Link> */}

        </nav>

        {/* MENU BUTTON */}
        {/* <button className='menu-toggle' onClick={toggleMenu}> */}
        <button className='menu-toggle' onClick={toggleMenu} aria-label="Toggle navigation menu">
          {
            menuOpen ? <PiX /> : <PiList />
          }

        </button>

      </div>

      {/* MOBILE MENU */}

      {
        menuOpen && (

          <nav className='nav-mobile'>
            <Link
              to="/"
              className='nav-links mobile' onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/service" className='nav-links mobile' onClick={() => setMenuOpen(false)}>
              Services
            </Link>

            <Link to="/about" className='nav-links mobile' onClick={() => setMenuOpen(false)}>
              About
            </Link>

            {/* <Link to="/contact" className='nav-links mobile'>
          Contact
        </Link> */}

          </nav>

        )
      }

    </header>

  )
}

export default Navbar