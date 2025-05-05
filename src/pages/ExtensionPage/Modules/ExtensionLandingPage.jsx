import React from 'react';
import moduleDiagram from '../../../assets/diagrams/modules-diagram.png';
import Heading from '../../../components/Heading';

function ExtensionLandingPage() {
    return (
        <>
            <div>
                <h1>VolShop Extension</h1>
                <p>
                    The VolShop Web Extension was created to give a central location for content
                    pages on the VolShop website. This takes the content out of the Site Management
                    Tools and allows for a single code base to control the majority of the content
                    on the website. This also decreases reliance on the SMT. If it goes down, as it
                    has in the past, having most content within this extension will limit the impact
                    it has on the sites performance.
                </p>
            </div>

            <div>
                <Heading level={3} id='extension-structure'>
                    SuiteCommerce Extension Structure
                </Heading>
                <hr />
                <p>
                    SuiteCommerce Extensions allow custom content, fields, and features to be added
                    to a SuiteCommerce website. These extensions are made up of three main
                    components: assets, modules, and the manifest.json file.
                </p>
                <Heading level={4} id='assets'>
                    Assets
                </Heading>
                <p>
                    SuiteCommerce Extensions allow custom content, fields, and features to be added
                    to a SuiteCommerce website. These extensions are made up of three main
                    components: assets, modules, and the manifest.json file.
                </p>
                <Heading level={4} id='modules'>
                    Modules
                </Heading>
                <p>
                    The modules folder is where the main content of the extension is. Within the
                    folder, there are sub-folders, each considered a module. Each module typically
                    represents a single feature for the website. This allows better organi- zation
                    and creates modularity between the features added with the extension. Within the
                    module, there are four standard folders: Configuration, JavaScript, Templates,
                    Sass. These folders have to be named exactly in this way to allow the extension
                    to find the appropriate files and their type. The Configuration folder contains
                    JSON files that allow the creation of fields within the Suit- eCommerce Website
                    Configuration form in NetSuite. The JavaScript folder contains all JavaScript
                    files including the entry file, model files, and view files. The Templates
                    folder holds all template files that are called from the View files. Lastly, the
                    Sass folder holds all Sass files for the styling the templates.
                </p>
                <p>
                    A SuiteCommerce extension is driven by the JavaScript Entry file. Here, the
                    mountToApp function is the main function for the extension. When creating an
                    extension with multiple modules, a primary module acting as the entry point must
                    be created to call each of the other mountToApp functions in its own mountToApp
                    function. This primary module’s entry file can then be specified in the
                    manifest.json file where it will be called when the website is loaded. See
                    figure below.
                </p>

                <div className='content-image-wrapper'>
                    <img src={moduleDiagram} alt='' width={'60%'} />
                </div>

                <p>
                    The entry file calls a view file. In the view file, any computation needed is
                    preformed or the model is called. Also within the view file, the breadcrumb path
                    and page title are able to be set. From here, any variables to be used in the
                    template file are passed and the template file is loaded.
                </p>
                <p>
                    The module model file is also housed within the JavaScript folder. Here data
                    processing can occur as well as storing variables to be used between view files.
                </p>

                <Heading level={4} id='manifest'>
                    Manifest.json
                </Heading>
                <p>
                    The manifest.json file contains the path to every file in the extension. It is
                    here that a main entry file is specified for each of the three components of the
                    SuiteCommerce site (Shopping, Account, Cart). Similarly, a main Sass file can be
                    specified for each of the components as well. The manifest.json file verifies
                    all files exist and are where they should be. Without this file, the extension
                    would not work.
                </p>
            </div>

            <div>
                <Heading level={3} id='technology'>
                    Technology
                </Heading>
                <hr />

                <div className='extension-technologies'>
                    <div>
                        <h6>Languages</h6>
                        <ul>
                            <li>
                                <code>JavaScript</code>
                            </li>
                            <li>
                                <code>SuiteScript</code>
                            </li>
                            <li>
                                <code>HTML</code>
                            </li>
                            <li>
                                <code>Sass</code>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6>Frameworks</h6>
                        <ul>
                            <li>
                                <a href='https://backbonejs.org/'>
                                    <code>Backbone.js</code>
                                </a>
                            </li>
                            <li>
                                <a href='https://handlebarsjs.com/'>
                                    <code>Handlebars.js</code>
                                </a>
                            </li>
                            <li>
                                <a href='https://underscorejs.org/'>
                                    <code>Underscore.js</code>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6>Libraries</h6>
                        <ul>
                            <li>
                                <a href='https://chartjs.org/'>
                                    <code>Chart.js</code>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExtensionLandingPage;
