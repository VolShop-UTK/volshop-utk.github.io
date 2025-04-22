import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar';
import HomeCard from './components/home-card/HomeCard';

import powerT from '../../assets/DigitalRoundPowerT.png';
import app from '../../assets/icons/app.svg';
import extension from '../../assets/icons/extension.svg';
import theme from '../../assets/icons/theme.svg';
import script from '../../assets/icons/script.svg';
import code from '../../assets/icons/code.svg';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='home-content'>
                <img
                    src={powerT}
                    alt='Circle Power T Logo'
                    height={'75px'}
                    style={{ paddingBottom: '2em' }}
                />
                <h1>VolShop Documnetation</h1>
                <div className='home-card-grid'>
                    <HomeCard title='VolShop App' icon={app} path='/app' />
                    <HomeCard title='VolShop Extension' icon={extension} path='/extension' />
                    <HomeCard title='VolShop Theme' icon={theme} path='/' />
                    <HomeCard title='SuiteScripts' icon={script} path='/' />
                    <HomeCard title='Import Scripts' icon={code} path='/' />
                </div>
            </div>
        </div>
    );
};

export default Home;
