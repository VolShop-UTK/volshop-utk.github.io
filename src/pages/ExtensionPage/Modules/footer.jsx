import React from 'react';
import Heading from '../../../components/Heading';
import ConfigFields from '../../../components/configFields/ConfigFields';
import { Link } from 'react-router';

function Footer() {
    let configFields = [
        {
            name: 'Big Orange Deal Title',
            type: 'String',
            varName: 'BOD.title',
        },
        {
            name: 'Price',
            type: 'String',
            varName: 'BOD.price',
        },
        {
            name: 'Link to Item Page',
            type: 'String',
            varName: 'BOD.link',
        },
        {
            name: 'Path to Image',
            type: 'String',
            varName: 'BOD.imageLink',
        },
        {
            name: 'Description',
            type: 'String',
            varName: 'BOD.description',
            supportsHTML: true,
        },
    ];

    return (
        <>
            <div>
                <Heading level={1} id='bod'>
                    Footer Module <i>**Deprecated**</i>
                </Heading>
                <p>
                    Stylesheet: <i>_volshopwebext_bod.scss</i>
                </p>

                <div className='callout error' style={{ marginTop: '1em' }}>
                    This module has been deprecated. Functionality has been replaced in the VolShop
                    Web Theme (see <Link to='/theme'>VolShop Theme</Link>)
                </div>

                <p>
                    The Footer module controls the bottom footer that contains the email sign-up
                    form and the social media links.
                </p>
            </div>

            <div>
                <Heading level={3} id='config-fields'>
                    Configurable Fields
                </Heading>

                <ConfigFields data={configFields} />
            </div>

            <div>
                <Heading level={3} id={`notes`}>
                    Notes
                </Heading>
                <p>The Show checkbox determines whether the icon is included in the footer.</p>
            </div>
        </>
    );
}

export default Footer;
