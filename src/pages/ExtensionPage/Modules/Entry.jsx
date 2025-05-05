import React from 'react';
import Heading from '../../../components/Heading';
import ConfigFields from '../../../components/configFields/ConfigFields';
import { Link } from 'react-router';

function Entry() {
    let configFields = [];

    return (
        <>
            <div>
                <Heading level={1} id='aboutus'>
                    Entry Module
                </Heading>
                <p>
                    Stylesheet: <i>_volshopwebext_main.scss</i>
                </p>
                <p>
                    The Entry module is the main entry point for the extension. All modules are
                    directed and called within this module’s entry file. All general styling,
                    variables, and styled components can also be found in this module (See{' '}
                    <Link to='/extension/style-guide/overview'>Style Guidelines</Link> for more). In
                    addition to styling, all JavaScript required for HTML components to operate
                    (such as the mobile navbar and dropdown components) are also initialized in this
                    module.
                </p>
            </div>

            <div>
                <Heading level={3} id='config-fields'>
                    Configurable Fields
                </Heading>

                <ConfigFields data={configFields} />
            </div>
        </>
    );
}

export default Entry;
