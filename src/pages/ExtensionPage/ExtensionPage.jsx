import React from 'react';
import Navbar from '../../components/navbar/navbar';
import ExtensionSideNav from './SideNav';
import './extension-page.css';
import ScrollToAnchor from '../../components/ScrollToAnchor';
import { Outlet } from 'react-router';

function ExtensionPage() {
    return (
        <>
            <ScrollToAnchor />
            <Navbar />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ExtensionSideNav />
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
