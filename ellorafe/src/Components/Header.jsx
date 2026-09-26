import React from 'react'

import { Link } from 'react-router-dom';



function Header() {
  return (
   <>
    <header>
      <nav className="navbar mb-7">
        <div className="logo">
          <a href="/" className='fa-fade custom-icon'>Ellora LIves</a>
          
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to='/features'>Features</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/role'>Login/signUp</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>




 
    
   

    




   </>
  )
}

export default Header
