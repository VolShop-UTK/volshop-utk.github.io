import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar';
import HomeCard from '../../components/home-card/HomeCard';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='home-content'>
                <h1>VolShop Documnetation</h1>
                <div className='home-card-grid'>
                    <HomeCard title='VolShop App' />
                    <HomeCard title='VolShop Extension' />
                    <HomeCard title='VolShop Theme' />
                    <HomeCard title='SuiteScripts' />
                    <HomeCard title='Import Scripts' />
                </div>
            </div>
        </div>
    );
};

export default Home;
