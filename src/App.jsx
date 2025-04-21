import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import AppPage from './pages/AppPage/AppPage.jsx';

function App() {
    return (
        <Router basename='/volshop-utk.github.io'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/app' element={<AppPage />} />
            </Routes>
        </Router>
    );
}

export default App;
