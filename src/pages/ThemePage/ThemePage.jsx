import React from 'react';
import Navbar from '../../components/navbar/navbar';
import './theme-page.css';
import { Link } from 'react-router';

function AppPage() {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className='content-wrapper'>
                    <div className='content theme-content'>
                        <div className='theme-wrapper'>
                            <h1>VolShop Theme</h1>

                            <p>
                                The VolShop Web Theme was created to customize the existing
                                SuiteCommerce Threads theme to give a more branded and personal
                                aesthetic for the VolShop. This was originally going to be done
                                purely through the use of the{' '}
                                <Link to='/extension'>VolShop Web Extension</Link>, but the
                                project’s scope has since expanded outside of the capabilities of a
                                SuiteCommerce Extension alone. The extension is still the primary
                                place where new content is added whenever possible, but the theme
                                allows greater customization of standard elements coming from
                                SuiteCommerce itself. The VolShop Web Theme is built on top of
                                Threads 3.4.4 which provides a lot of base styling and allows a more
                                focused approach on only elements that we want to change.
                            </p>
                            <p>
                                Primarily, this custom theme is used to change things like the
                                navigation bars and headers. Examples of customizations include
                                moving and changing the functionality of the search bar, adding a
                                new custom sidebar for profile management, styling the navigation
                                bar and it's dropdowns, and adding custom logos to the main header.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppPage;
