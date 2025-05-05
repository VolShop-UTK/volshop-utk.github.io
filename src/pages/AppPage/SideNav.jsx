import React from 'react';
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
                            to='/app'
                            className={`sidebar-link ${
                                location.pathname === '/app' ? 'active' : ''
                            }`}>
                            Overview
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/app/restlets'
                            className={`sidebar-link ${
                                location.pathname === '/restlets' ? 'active' : ''
                            }`}>
                            RESTlets
                        </Link>
                    </li>
                    <li>Proxy Server</li>
                    <li>Frontend</li>
                    <li>Style Guide</li>
                </ul>
            </nav>
        </aside>
    );
}

export default SideNav;
