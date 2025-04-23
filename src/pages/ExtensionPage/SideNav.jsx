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
                                    to='/extension/about-us'
                                    className={`sidebar-link ${
                                        activeLink === 'aboutUs' ? 'active' : ''
                                    }`}
                                    onClick={() => handleLinkClick('aboutUs')}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/big-orange-deal'
                                    className={`sidebar-link ${
                                        activeLink === 'bod' ? 'active' : ''
                                    }`}
                                    onClick={() => handleLinkClick('bod')}>
                                    Big Orange Deal
                                </Link>
                            </li>
                            <li>Components</li>
                            <li>Controller</li>
                            <li>Customer Service Info</li>
                            <li>Footer</li>
                            <li>Home</li>
                            <li>Total Access</li>
                            <li>VolBooks</li>
                            <li>VolTech</li>
                        </ul>
                    </li>
                    <li>Style Guide</li>
                </ul>
            </nav>
        </aside>
    );
}

export default SideNav;
