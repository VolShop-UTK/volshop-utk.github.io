import { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import SideNav from '../../components/SideNav';
import ScrollToAnchor from '../../components/ScrollToAnchor';
import { Outlet } from 'react-router';
import './app-page.css';

function AppPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const closeSidebar = () => setIsSidebarOpen(false);
    const sidebarItems = [
        { label: 'Overview', href: '/app' },
        { label: 'RESTlets', href: '/app/restlets' },
        { label: 'Proxy Server' },
        {
            label: 'Frontend',
            children: [{ label: 'State Management', href: '/app/frontend/state-management' }],
        },
        { label: 'Style Guide' },
    ];

    return (
        <>
            <ScrollToAnchor />
            <Navbar />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <button className='menu-button' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    ☰
                </button>

                <SideNav isOpen={isSidebarOpen} items={sidebarItems} onLinkClick={closeSidebar} />
                <div className='content-wrapper'>
                    <div className='content app-content'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppPage;
