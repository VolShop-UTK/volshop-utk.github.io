import React from 'react';
import Heading from '../../../components/Heading';

function RestletsPage() {
    return (
        <>
            <div>
                <Heading level={1} id='restlets'>
                    RESTlets
                </Heading>
                <p>
                    A RESTlet is a type of SuiteScript that opens API endpoints into the NetSuite
                    database. Using this functionality, the VolShop app is able to access and pass
                    data to and from NetSuite. This allows NetSuite to be the single source of truth
                    for both the website and the app and allows changes to sync between them.
                    Changes made in the website configuration will also be reflected in the app.
                </p>
            </div>

            <div>
                <Heading level={3} id='endpoints'>
                    VS App Integration Role
                </Heading>
                <hr />
                <p>
                    The VS App Integration role was created to limit the scope in which the app can
                    affect NetSuite. Through the integration record and access token, the app has
                    limited access to the main NetSuite database to help protect any senstive
                    information stored that the app does not need.
                </p>

                {/* {submodules.map((module, idx) => (
                    <Submodule props={module} key={idx} />
                ))} */}
            </div>
        </>
    );
}

export default RestletsPage;
