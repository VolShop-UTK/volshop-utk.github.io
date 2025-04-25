import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import AppPage from './pages/AppPage/AppPage.jsx';
import ExtensionPage from './pages/ExtensionPage/ExtensionPage.jsx';
import AboutUsPage from './pages/ExtensionPage/Modules/aboutUsPage.jsx';
import ExtensionLandingPage from './pages/ExtensionPage/Modules/ExtensionLandingPage.jsx';
import ModulesComponents from './pages/ExtensionPage/Modules/Components.jsx';
import Components from './pages/ExtensionPage/Style/Components.jsx';
import BigOrangeDealPage from './pages/ExtensionPage/Modules/BigOrangeDealPage.jsx';
import Controller from './pages/ExtensionPage/Modules/Controller.jsx';
import StyleGuide from './pages/ExtensionPage/Style/StyleGuide.jsx';
import CustomerServiceInfo from './pages/ExtensionPage/Modules/CustomerServiceInfo.jsx';
import ThemePage from './pages/ThemePage/ThemePage.jsx';
import Footer from './pages/ExtensionPage/Modules/Footer.jsx';
import ModulesHome from './pages/ExtensionPage/Modules/ModulesHome.jsx';
import TotalAccess from './pages/ExtensionPage/Modules/TotalAccess.jsx';
import VolBooks from './pages/ExtensionPage/Modules/VolBooks.jsx';
import VolTech from './pages/ExtensionPage/Modules/VolTech.jsx';

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
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/app' element={<AppPage />} />
                <Route path='/extension' element={<ExtensionPage />}>
                    <Route index element={<ExtensionLandingPage />} />
                    <Route path='modules/about-us' element={<AboutUsPage />} />
                    <Route path='modules/big-orange-deal' element={<BigOrangeDealPage />} />
                    <Route path='modules/components' element={<ModulesComponents />} />
                    <Route path='modules/controller' element={<Controller />} />
                    <Route path='modules/customer-service-info' element={<CustomerServiceInfo />} />
                    <Route path='modules/footer' element={<Footer />} />
                    <Route path='modules/home' element={<ModulesHome />} />
                    <Route path='modules/total-access' element={<TotalAccess />} />
                    <Route path='modules/volbooks' element={<VolBooks />} />
                    <Route path='modules/voltech' element={<VolTech />} />

                    <Route path='style-guidelines' element={<StyleGuide />} />
                    <Route path='components' element={<Components />} />
                </Route>
                <Route path='/theme' element={<ThemePage />}>
                    {/* <Route index element={<ExtensionLandingPage />} /> */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
