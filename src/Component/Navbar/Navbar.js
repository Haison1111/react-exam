import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import "./Navbar.css"
import { Location } from 'react-router-dom'

const Navbar = () => {
 
//  const isActive = location.pathname === to ;

  return (
    <div className='navbar'>
        <NavLink exact="true" to="/All" activeclassname="active" className="navlink">
            <p> All </p>
        </NavLink>
        <NavLink exact="true" to="/Active" activeclassname="active" className="navlink">
            <p> Active </p>
        </NavLink>
        <NavLink exact="true" to="/Completed" activeclassname="active" className="navlink" >
            <p> Completed </p>
        </NavLink>
    </div>
  )
}

export default Navbar