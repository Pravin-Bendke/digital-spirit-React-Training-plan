import React from 'react'
import Home from './Home'
import About from './About'
import DashBoard from './DashBoard'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/' className={({isActive})=>isActive?"active-link":""}>Home</NavLink>
            </li>  
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>  
            <li>
                <NavLink to='/dashboard'>DashBoard</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar