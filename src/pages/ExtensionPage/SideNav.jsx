import React, { useState } from 'react';
import '../../styles/components/sidenav.css';
import { Link, useLocation } from 'react-router';

function SideNav() {
    const location = useLocation();

    return (
        <aside className='sidenav'>
            <nav>
                <ul>
                    <li>
                        <Link
                            to='/extension'
                            className={`sidebar-link ${
                                location.pathname === '/extension' ? 'active' : ''
                            }`}>
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
                                        location.pathname === '/extension/modules/about-us'
                                            ? 'active'
                                            : ''
                                    }`}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/big-orange-deal'
                                    className={`sidebar-link ${
                                        location.pathname === '/extension/modules/big-orange-deal'
                                            ? 'active'
                                            : ''
                                    }`}>
                                    Big Orange Deal
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/components'
                                    className={`sidebar-link ${
                                        location.pathname === '/extension/modules/components'
                                            ? 'active'
                                            : ''
                                    }`}>
                                    Components
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/entry'
                                    className={`sidebar-link ${
                                        location.pathname === '/extension/modules/entry'
                                            ? 'active'
                                            : ''
                                    }`}>
                                    Entry
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/customer-service-info'
                                    className={`sidebar-link ${
                                        location.pathname ===
                                        '/extension/modules/customer-service-info'
                                            ? 'active'
                                            : ''
                                    }`}>
                                    Customer Service Info
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/footer'
                                    className={`sidebar-link ${
                                        location.pathname === '/extension/modules/footer'
                                            ? 'active'
                                            : ''
                                    }`}>
                                    Footer
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/home'
                                    className={`sidebar-link ${
                                        location.pathname === '/extension/modules/home'
                                            ? 'active'
                                            : ''
                                    }`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/volbooks'
                                    className={`sidebar-link ${
                                        location.pathname === '/extension/modules/volbooks'
                                            ? 'active'
                                            : ''
                                    }`}>
                                    VolBooks
                                </Link>

                                <ul>
                                    <li>
                                        <Link
                                            to='/extension/modules/volbooks/inclusive-access'
                                            className={`sidebar-link ${
                                                location.pathname ===
                                                '/extension/modules/volbooks/inclusive-access'
                                                    ? 'active'
                                                    : ''
                                            }`}>
                                            Inclusive Access
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/extension/modules/volbooks/total-access'
                                            className={`sidebar-link ${
                                                location.pathname ===
                                                '/extension/modules/volbooks/total-access'
                                                    ? 'active'
                                                    : ''
                                            }`}>
                                            Total Access
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link
                                    to='/extension/modules/voltech'
                                    className={`sidebar-link ${
                                        location.pathname === '/extension/modules/voltech'
                                            ? 'active'
                                            : ''
                                    }`}>
                                    VolTech
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Style Guide
                        <ul>
                            <li>
                                <Link
                                    to='/extension/style-guide/overview'
                                    className={`sidebar-link ${
                                        location.pathname === '/extension/style-guide/overview'
                                            ? 'active'
                                            : ''
                                    }`}>
                                    Overview
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/extension/style-guide/components'
                                    className={`sidebar-link ${
                                        location.pathname === '/extension/style-guide/components'
                                            ? 'active'
                                            : ''
                                    }`}>
                                    Components
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default SideNav;
