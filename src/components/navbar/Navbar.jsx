import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router';
import logo from '../../assets/VolShopCMYK.png';
import github from '../../assets/icons/github.svg';

function Navbar() {
    return (
        <div class='navbar'>
            <div className='navbar-container'>
                <NavLink to={'/'} style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt='volshop logo' class='navbar-logo' />
                </NavLink>
                <nav>
                    <NavLink to={'/app'} className='navbar-link'>
                        VS App
                    </NavLink>
                    <a href='https://github.com/VolShop-UTK' class='navbar-link'>
                        Extension
                    </a>
                    <a href='https://github.com/VolShop-UTK' class='navbar-link'>
                        Theme
                    </a>
                    <a href='https://github.com/VolShop-UTK' class='navbar-link'>
                        SuiteScripts
                    </a>
                    <a href='https://github.com/VolShop-UTK' class='navbar-link'>
                        Import Scripts
                    </a>
                    <a href='https://github.com/VolShop-UTK' class='navbar-link'>
                        <img src={github} alt='GitHub Logo' />
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
