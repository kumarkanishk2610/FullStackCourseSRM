import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = ({handleLogout}) => {
    return(
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-brand'>
                    <Link to='/' className='navbar-logo'>Chatapp</Link>
                </div>
                <ul className='navbar-nav'>
                    <li className='navbar-item'>
                        <Link to='/register' className='navbar-link'>Register</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to='/Login' className='navbar-link'>Login</Link>
                    </li>
                    <li className='navbar-item'>
                        <button className='nav-link' onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </div>
            {/* <div className='navbar-logo'>logo</div>
            <ul className='navbar'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul> */}
        </nav>
    );
};

export default Navbar;