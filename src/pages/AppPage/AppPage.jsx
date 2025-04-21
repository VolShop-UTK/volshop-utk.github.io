import React from 'react';
import Navbar from '../../components/navbar/navbar';

function AppPage() {
    return (
        <div>
            <Navbar />
            <div className='app-content'>
                <h1>VolShop App</h1>
                <p>Technologies</p>
                <p>Structure</p>
            </div>
        </div>
    );
}

export default AppPage;
