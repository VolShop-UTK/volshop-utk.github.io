import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar';
import HomeCard from './components/home-card/HomeCard';

import app from '../../assets/app.svg';
import extension from '../../assets/extension.svg';
import theme from '../../assets/theme.svg';
import script from '../../assets/script.svg';
import code from '../../assets/code.svg';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='home-content'>
                <h1>VolShop Documnetation</h1>
                <div className='home-card-grid'>
                    <HomeCard title='VolShop App' icon={app} path='/app' />
                    <HomeCard title='VolShop Extension' icon={extension} path='/' />
                    <HomeCard title='VolShop Theme' icon={theme} path='/' />
                    <HomeCard title='SuiteScripts' icon={script} path='/' />
                    <HomeCard title='Import Scripts' icon={code} path='/' />
                </div>
            </div>
        </div>
    );
};

export default Home;
