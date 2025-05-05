import React from 'react';
import Navbar from '../../components/navbar/navbar';
import './app-page.css';
import AppSideNav from './SideNav';
import { Outlet } from 'react-router';

function AppPage() {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <AppSideNav />
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
