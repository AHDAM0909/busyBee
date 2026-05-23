import { useState } from 'react'
import { Link } from "react-router-dom";
import { PiList, PiX } from "react-icons/pi"
import "./Navbar.css"
const Navbar = () => {
  // MENU STATE
  const [menuOpen, setMenuOpen] = useState(false)

  // TOGGLE FUNCTION
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
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

      <Link to="/" className='nav-links'>
        Home
      </Link>

      <Link to="/services" className='nav-links'>
        Services
      </Link>

      <Link to="/about" className='nav-links'>
        About
      </Link>

      <Link to="/contact" className='nav-links'>
        Contact
      </Link>

    </nav>

    {/* MENU BUTTON */}
    <button className='menu-toggle' onClick={toggleMenu}>

      {
        menuOpen ? <PiX /> : <PiList />
      }

    </button>

  </div>

  {/* MOBILE MENU */}

  {
    menuOpen && (

      <nav className='nav-mobile'>

        <Link to="/" className='nav-links mobile'>
          Home
        </Link>

        <Link to="/services" className='nav-links mobile'>
          Services
        </Link>

        <Link to="/about" className='nav-links mobile'>
          About
        </Link>

        <Link to="/contact" className='nav-links mobile'>
          Contact
        </Link>

      </nav>

    )
  }

</header>

  )
}

export default Navbar