import React from 'react';
import './navbar.css';
import { Link } from 'react-router';
import logo from '../../assets/VolShopCMYK.png';
import github from '../../assets/icons/github.svg';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to={'/'} style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt='volshop logo' className='navbar-logo' />
                </Link>
                <nav>
                    <Link to={'/app'} className='navbar-link'>
                        VS App
                    </Link>
                    <Link to='/extension' className='navbar-link'>
                        Extension
                    </Link>
                    <a href='/theme' className='navbar-link'>
                        Theme
                    </a>
                    <a href='https://github.com/VolShop-UTK' className='navbar-link'>
                        SuiteScripts
                    </a>
                    <a href='https://github.com/VolShop-UTK' className='navbar-link'>
                        Import Scripts
                    </a>
                    <a href='https://github.com/VolShop-UTK' className='navbar-link'>
                        <img src={github} alt='GitHub Logo' />
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
