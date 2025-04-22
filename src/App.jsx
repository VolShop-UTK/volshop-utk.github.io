import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import AppPage from './pages/AppPage/AppPage.jsx';
import ExtensionPage from './pages/ExtensionPage/ExtensionPage.jsx';

function App() {
    document.querySelectorAll('h2, h3, h4, h5, h6').forEach(function (header) {
        if (header.id) {
            const anchor = document.createElement('a');
            anchor.href = `#${header.id}`;
            anchor.textContent = '#';
            anchor.className = 'anchor';
            header.appendChild(anchor);
        }
    });
    return (
        <Router basename='/volshop-utk.github.io'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/app' element={<AppPage />} />
                <Route path='/extension' element={<ExtensionPage />} />
            </Routes>
        </Router>
    );
}

export default App;
