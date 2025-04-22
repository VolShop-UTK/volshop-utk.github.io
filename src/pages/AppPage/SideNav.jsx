import React from 'react';
import '../../styles/components/sidenav.css';

function SideNav() {
    return (
        <aside className='sidenav'>
            <nav>
                <ul>
                    <li>
                        Overview
                        <ul>
                            <li>Technologies</li>
                            <li>Structure</li>
                        </ul>
                    </li>
                    <li>RESTlets</li>
                    <li>Proxy Server</li>
                    <li>Frontend</li>
                    <li>Style Guide</li>
                </ul>
            </nav>
        </aside>
    );
}

export default SideNav;
