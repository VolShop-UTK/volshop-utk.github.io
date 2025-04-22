import React from 'react';
import '../../styles/sidenav.css';

function SideNav() {
    return (
        <aside className='sidenav'>
            <nav>
                <ul>
                    <li>
                        Overview
                        <ul>
                            <li>Structure</li>
                            <li>Technologies</li>
                        </ul>
                    </li>
                    <li>
                        Modules
                        <ul>
                            <li>About Us</li>
                            <li>Big Orange Deal</li>
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
