import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaAlignJustify, FaAlignRight, FaPizzaSlice } from 'react-icons/fa'
import styled from 'styled-components'

type MobileMenuProps = {
    active?: boolean
}

const MobileMenu = styled.div<MobileMenuProps>`
    transform:${({ active }) => active ? 'translateX(0)' : 'translateX(-100%)'};
    position:fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    z-index:1000;
    background-color: #fff;
    transition:0.6s all ease;
`

export const Navbar: React.FC = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="nav-wrapper">
            <nav className="navbar">
                <MobileMenu active={isMobileMenuOpen} >
                    <div style={{ backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div className="nav-logo">
                            <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="nav-logo__link" style={{ color: 'white' }}>React Pizza<FaPizzaSlice className="nav-logo__icon" /></Link>
                        </div>
                        <div className="nav-mobile-menu__icon">
                            <FaAlignRight style={{ color: 'white' }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            />
                        </div>
                    </div>
                    <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="nav-menu__link">Homepage</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} to="/menu" className="nav-menu__link">Menu</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} to="/constructor" className="nav-menu__link">Constructor</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} to="/about" className="nav-menu__link">Company</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} to="/cart" style={{ backgroundColor: 'red', fontSize: '26px' }} className="nav-menu__link">Cart</Link>
                </MobileMenu>
                <div className="nav-logo">
                    <Link to="/" className="nav-logo__link">React Pizza<FaPizzaSlice className="nav-logo__icon" /></Link>
                </div>
                <div className="nav-mobile-menu__icon">
                    {isMobileMenuOpen ?
                        <FaAlignRight
                            onClick={() => setIsMobileMenuOpen(false)}
                        /> :
                        <FaAlignJustify
                            onClick={() => setIsMobileMenuOpen(true)}
                        />}</div>
                <div className="nav-menu">
                    <Link to="/" className="nav-menu__link">Homepage</Link>
                    <Link to="/menu" className="nav-menu__link">Menu</Link>
                    <Link to="/constructor" className="nav-menu__link">Constructor</Link>
                    <Link to="/about" className="nav-menu__link">Company</Link>
                    <Link to="/cart" style={{ backgroundColor: 'red', fontSize: '26px' }} className="nav-menu__link">Cart</Link>
                </div>
            </nav>
        </div >
    )
}