import React, { useState } from 'react';
import '../../styles/components/sidenav.css';
import { Link } from 'react-router';

function SideNav() {
    const [activeLink, setActiveLink] = useState('overview');

    const handleLinkClick = (linkId) => {
        setActiveLink(linkId);
    };

    return (
        <aside className='sidenav'>
            <nav>
                <ul>
                    <li>
                        <Link
                            to='/extension'
                            className={`sidebar-link ${activeLink === 'overview' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('overview')}>
                            Overview
                        </Link>
                    </li>
                    <li>
                        Modules
                        <ul>
                            <li>
                                <Link
                                    to='/extension/modules/about-us'
                                    className={`sidebar-link ${
                                        activeLink === 'aboutUs' ? 'active' : ''
                                    }`}
                                    onClick={() => handleLinkClick('aboutUs')}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/big-orange-deal'
                                    className={`sidebar-link ${
                                        activeLink === 'bod' ? 'active' : ''
                                    }`}
                                    onClick={() => handleLinkClick('bod')}>
                                    Big Orange Deal
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/components'
                                    className={`sidebar-link ${
                                        activeLink === 'component' ? 'active' : ''
                                    }`}
                                    onClick={() => handleLinkClick('component')}>
                                    Components
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/controller'
                                    className={`sidebar-link ${
                                        activeLink === 'controller' ? 'active' : ''
                                    }`}
                                    onClick={() => handleLinkClick('controller')}>
                                    Controller
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/customer-service-info'
                                    className={`sidebar-link ${
                                        activeLink === 'customer-service' ? 'active' : ''
                                    }`}
                                    onClick={() => handleLinkClick('customer-service')}>
                                    Customer Service Info
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/footer'
                                    className={`sidebar-link ${
                                        activeLink === 'footer' ? 'active' : ''
                                    }`}
                                    onClick={() => handleLinkClick('footer')}>
                                    Footer
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/home'
                                    className={`sidebar-link ${
                                        activeLink === 'home' ? 'active' : ''
                                    }`}
                                    onClick={() => handleLinkClick('home')}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/total-access'
                                    className={`sidebar-link ${
                                        activeLink === 'total-access' ? 'active' : ''
                                    }`}
                                    onClick={() => handleLinkClick('total-access')}>
                                    Total Access
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/volbooks'
                                    className={`sidebar-link ${
                                        activeLink === 'volbooks' ? 'active' : ''
                                    }`}
                                    onClick={() => handleLinkClick('volbooks')}>
                                    VolBooks
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/voltech'
                                    className={`sidebar-link ${
                                        activeLink === 'voltech' ? 'active' : ''
                                    }`}
                                    onClick={() => handleLinkClick('voltech')}>
                                    VolTech
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>Style Guide</li>
                </ul>
            </nav>
        </aside>
    );
}

export default SideNav;
