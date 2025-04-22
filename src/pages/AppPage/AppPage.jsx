import React from 'react';
import Navbar from '../../components/navbar/navbar';
import './app-page.css';
import AppSideNav from './SideNav';

function AppPage() {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <AppSideNav />
                <div className='content-wrapper'>
                    <div className='content app-content'>
                        <h1>VolShop App</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppPage;
