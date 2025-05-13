import React from 'react';
import Heading from '../../../components/Heading';
import appDiagram from '../../../assets/diagrams/app-diagram.png';

function AppLandingPage() {
    return (
        <>
            <div>
                <h1>VolShop App</h1>
                <p>
                    The VolShop App will give customers a new way to interact with VolShop content
                    such as being able to submit support cases, see the Big Orange Deal, and active
                    promotions. Built using Flutter, the VolShop app is able to be run on Android
                    and iOS.
                </p>
            </div>

            <div>
                <Heading level={3} id='app-structure'>
                    App Structure
                </Heading>
                <hr />
                <p>
                    The VolShop app is split into roughly three layers. The database layer is made
                    up of NetSuite ERP and RESTlets that expose API endpoints to the data within
                    NetSuite. In order to communicate with the RESTlets, the HTTP requests must be
                    authenticated using OAuth 1.0 tokens. An integration token and secret as well as
                    an access token with a token and secret associated to a user account with
                    limited permissions were generated and stored in the middleware layer. This
                    layer acts as an air traffic controller, cooridinating and passing along
                    requests and responses between the NetSuite RESTlets and the frontend
                    application layer. As a request is past from the frontend to the backend, it
                    first goes through the middleware proxy server. Here authentication is applied
                    and passed along to NetSuite. Without this step, NetSuite would deny every
                    request coming from the application. The application layer is the part of the
                    app the end user interacts with. As user events trigger HTTP requests to be sent
                    to the server, the frontend layer is responsible for recieving, interpretting,
                    and displaying responses to the user.
                </p>

                <p>Below is a diagram of the high level architecture of the application:</p>

                <div className='content-image-wrapper'>
                    <img src={appDiagram} alt='Overview of App Diagram' />
                </div>
            </div>

            <div>
                <Heading level={3} id='technology'>
                    Technology
                </Heading>
                <hr />
                <div className='app-technologies'>
                    <div>
                        <h6>Languages</h6>
                        <ul>
                            <li>
                                <code>Dart</code>
                            </li>
                            <li>
                                <code>JavaScript</code>
                            </li>
                            <li>
                                <code>SuiteScript</code>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6>Frameworks</h6>
                        <ul>
                            <li>
                                <a href='https://flutter.dev/'>
                                    <code>Flutter</code>
                                </a>
                            </li>
                            <li>
                                <a href='https://bloclibrary.dev/'>
                                    <code>Bloc</code>
                                </a>
                            </li>
                            <li>
                                <a href='https://nodejs.org/en'>
                                    <code>Node.js</code>
                                </a>
                            </li>
                            <li>
                                <a href='https://expressjs.com/'>
                                    <code>Express.js</code>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppLandingPage;
