import React from 'react';
import Heading from '../../../components/Heading';
import { Link } from 'react-router';
import { anOldHope, CopyBlock } from 'react-code-blocks';

function Components() {
    return (
        <>
            <div>
                <Heading level={1} id='aboutus'>
                    Components Module
                </Heading>
                <p>
                    The Components module holds general HTML components used across multiple
                    modules.
                </p>
            </div>

            <div>
                <Heading level={3} id='submodules'>
                    Submodules
                </Heading>
                <hr />

                <div>
                    <Heading level={4} id='custom'>
                        Custom
                    </Heading>
                    <p>
                        Style Sheet: <i>_volshopwebext_components_custom.scss</i>
                    </p>

                    <p>Holds all custom components created that can be used in any other module.</p>

                    <div style={{ height: '1em', margin: '0' }}></div>

                    <Heading level={6} id={`custom-list`}>
                        Components
                    </Heading>
                    <ul>
                        <li>
                            <code>DropdownUtils.js</code> - provides the JavaScript needed for{' '}
                            <Link to='/extension/style-guide/components#dropdown'>Dropdown</Link>.
                        </li>
                        <li>
                            <code>ItemCarousel.js</code> - provides the JavaScript needed for{' '}
                            <Link to='/extension/style-guide/components#item-carousel'>
                                Item Carousel
                            </Link>
                            .
                        </li>
                        <li>
                            <code>Custom.js</code> - Registers any component views so they can be
                            used else where.
                        </li>
                        <li>
                            <code>Modal.js</code> - provides the JavaScript needed for{' '}
                            <Link to='/extension/style-guide/components#modal'>Modal</Link>.
                        </li>
                        <li>
                            <code>ShipTotalAccecss</code> - Banner component that displays an option
                            to get Total Access Materials Shipped. Seen on VolBooks homepage and
                            Total Access homepage.
                        </li>
                        <li>
                            <code>SubNavbarMobile.js</code> - provides the JavaScript needed for{' '}
                            <Link to='/extension/style-guide/components#sub-navbar'>
                                Sub-Navbar
                            </Link>
                            .
                        </li>
                        <li>
                            <code>VolBooksProgramsCarousel.js</code> - provides the JavaScript
                            needed for the program carousel on VolBooks homepage.
                        </li>
                        <li>
                            <code>VolTechProgramsCarousel.js</code> - provides the JavaScript needed
                            for the repair program carousel on VolTech homepage.
                        </li>
                    </ul>
                </div>

                <div>
                    <Heading level={4} id='entry'>
                        Entry
                    </Heading>
                    <p>
                        Style Sheet: <i>_volshopwebext_components.scss</i>
                    </p>

                    <p>
                        The Entry module passes all sub-modules to the main Entry module. It also
                        holds the configuration file for all sub-modules and the module sass entry
                        point file which is also passed to the main sass file in the Entry module.
                        The model file for the module is also held here.
                    </p>
                </div>

                <div>
                    <Heading level={4} id='icons'>
                        Icons
                    </Heading>

                    <p>
                        The Icons modules creates components for svg icons that can be used anywhere
                        within the extension.
                    </p>

                    <Heading level={6} id={`icons-list`}>
                        Icons
                    </Heading>
                    <ul>
                        <li>
                            <code>ArchitectureIcon</code>
                        </li>
                        <li>
                            <code>GraduationCapIcon</code>
                        </li>
                        <li>
                            <code>ClockIcon</code>
                        </li>
                    </ul>

                    <div style={{ height: '1em', margin: '0' }}></div>

                    <Heading level={6} id={`icons-notes`}>
                        Notes
                    </Heading>
                    <p>Should be used as follows:</p>
                    <CopyBlock
                        text={`<div data-view='{ icon name }'></div>`}
                        language='html'
                        showLineNumbers={false}
                        theme={anOldHope}
                        codeBlock={true}
                    />
                </div>

                <div>
                    <Heading level={4} id='libraries'>
                        Libraries
                    </Heading>

                    <p>Any external library needed is stored here.</p>

                    <div className='callout'>
                        To add a third-party library, you must use the minified version of the
                        library.
                    </div>

                    <Heading level={6} id={`libraries-current-list`}>
                        Current Libraries Loaded
                    </Heading>
                    <ul>
                        <li>
                            <code>
                                <Link to='https://www.chartjs.org/'>Chart.js</Link>
                            </code>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Components;
