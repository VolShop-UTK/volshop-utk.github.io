import React from 'react';
import './navbar.css';
import logo from '../../assets/VolShopCMYK.png';

function Navbar() {
    return (
        <div class='navbar'>
            <div className='navbar-container'>
                <img src={logo} alt='volshop logo' class='navbar-logo' />
                <nav>
                    <a href='https://github.com/VolShop-UTK' class='navbar-link'>
                        GitHub
                    </a>
                    <a href='https://www.utvolshop.com/' class='navbar-link'>
                        Webstore
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
