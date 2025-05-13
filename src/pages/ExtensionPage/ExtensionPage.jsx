import { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import SideNav from '../../components/SideNav';
import ScrollToAnchor from '../../components/ScrollToAnchor';
import { Outlet } from 'react-router';
import './extension-page.css';

function ExtensionPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const closeSidebar = () => setIsSidebarOpen(false);
    const sidebarItems = [
        { label: 'Overview', href: '/extension' },
        {
            label: 'Modules',
            children: [
                { label: 'About Us', href: '/extension/modules/about-us' },
                { label: 'Big Orange Deal', href: '/extension/modules/big-orange-deal' },
                { label: 'Components', href: '/extension/modules/components' },
                { label: 'Entry', href: '/extension/modules/entry' },
                {
                    label: 'Customer Service Info',
                    href: '/extension/modules/customer-service-info',
                },
                { label: 'Footer', href: '/extension/modules/footer' },
                { label: 'Home', href: '/extension/modules/home' },
                {
                    label: 'VolBooks',
                    href: '/extension/modules/volbooks',
                    children: [
                        {
                            label: 'Inclusive Access',
                            href: '/extension/modules/volbooks/inclusive-access',
                        },
                        { label: 'Total Access', href: '/extension/modules/volbooks/total-access' },
                    ],
                },
                { label: 'VolTech', href: '/extension/modules/voltech' },
            ],
        },
        {
            label: 'Style Guide',
            children: [
                { label: 'Overview', href: '/extension/style-guide/overview' },
                { label: 'Components', href: '/extension/style-guide/components' },
            ],
        },
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
                    <div className='content'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExtensionPage;
