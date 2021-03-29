import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaPizzaSlice } from 'react-icons/fa'

export const Navbar: React.FC = () => {
    return (
        <div className="nav-wrapper">
            <div className="nav-logo">
                <Link to="/" className="nav-logo__link">React Pizza<FaPizzaSlice className="nav-logo__icon" /></Link>
            </div>
            <div className="nav-menu">
                <Link to="/" className="nav-menu__link">Homepage</Link>
                <Link to="/menu" className="nav-menu__link">Menu</Link>
                <Link to="/constructor" className="nav-menu__link">Constructor</Link>
                <Link to="/about" className="nav-menu__link">Company</Link>
            </div>
        </div>
    )
}