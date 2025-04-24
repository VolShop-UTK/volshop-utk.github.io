import React from 'react';
import Heading from '../../../components/Heading';
import ConfigFields from '../../../components/configFields/ConfigFields';
import { Link } from 'react-router';

function TotalAccess() {
    let configFields = [
        {
            name: 'Big Orange Deal Title',
            type: 'String',
            varName: 'BOD.title',
            value: '',
            required: false,
            supportsHTML: false,
            parentField: '',
        },
        {
            name: 'Price',
            type: 'String',
            varName: 'BOD.price',
            value: '',
            required: false,
            supportsHTML: false,
            parentField: '',
        },
        {
            name: 'Link to Item Page',
            type: 'String',
            varName: 'BOD.link',
            value: '',
            required: false,
            supportsHTML: false,
            parentField: '',
        },
        {
            name: 'Path to Image',
            type: 'String',
            varName: 'BOD.imageLink',
            value: '',
            required: false,
            supportsHTML: false,
            parentField: '',
        },
        {
            name: 'Description',
            type: 'String',
            varName: 'BOD.description',
            value: '',
            required: false,
            supportsHTML: true,
            parentField: '',
        },
    ];

    return (
        <>
            <div>
                <Heading level={1} id='bod'>
                    Total Access
                </Heading>
                <p>
                    Stylesheet: <i>_volshopwebext_totalaccess.scss</i>
                </p>

                <p>
                    The Total Access module controls the Total Access landing page which contains an
                    description of what Total Access is and a list of FAQs.
                </p>

                <div className='callout error'>
                    This component uses the "General Information Pages" and “Dropdown Section”
                    global component styles (see{' '}
                    <Link to='/extension/components#dropdown'>General Information Pages</Link> and{' '}
                    <Link to='/extension/components#dropdown'>Dropdown Section</Link>)
                </div>
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
                <p>The Show checkbox determines whether the icon is included in the TotalAccess.</p>
            </div>
        </>
    );
}

export default TotalAccess;
