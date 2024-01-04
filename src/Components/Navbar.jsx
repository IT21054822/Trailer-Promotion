import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'



function Navbar() {
    
  return (
    <div className="navbar">
        <div className="navbar-container">
            <div className="nav-logo">
                TRAILERS.com
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to ='/Products'>Products</Link></li>
                <li> <Link to = '/Signup'>SIGN UP</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
