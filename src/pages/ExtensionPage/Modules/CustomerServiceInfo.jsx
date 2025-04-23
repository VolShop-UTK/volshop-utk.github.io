import React from 'react';
import Heading from '../../../components/Heading';
import Submodule from '../../../components/submodule/Submodule';

function CustomerServiceInfo() {
    let submodules = [
        {
            name: 'Entry',
            styleSheet: '_volshopwebext_customerServiceInfo.scss',
            description:
                'The Entry Module passes all sub-modules to the main Controller module. It also holds the configuration file for all sub-modules and the module sass entry point file which is also passed to the main sass file in the Controller module. The model file for the module is also held here.\n\n **Shipping Rates Component** \n\n This component contains all order price ranges and their associated shipping cost. The following configuration fields are used in the Customer Service Information component.',
            callout: '',
            configFields: [
                {
                    name: 'Shipping Rates',
                    type: 'Array',
                    varName: 'CustomerServiceInfo.ShippingRates',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: '',
                },
                {
                    name: 'Order Total',
                    type: 'String',
                    varName: 'orderTotal',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Shipping Rates',
                },
                {
                    name: 'Shipping Rate',
                    type: 'String',
                    varName: 'shippingRate',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Shipping Rates',
                },
            ],
            notes: 'This information is used in both the FAQs sub-module and the ShippingPolicy sub-module.',
        },
    ];

    return (
        <>
            <div>
                <Heading level={1} id='aboutus'>
                    About Us Module
                </Heading>
                <p>
                    The Customer Service module contains all pages pertaining to the customer
                    service and pages located under the "Customer Service" heading in the footer.
                </p>
            </div>

            <div>
                <Heading level={3} id='submodules'>
                    Submodules
                </Heading>
                <hr />

                {submodules.map((module, idx) => (
                    <Submodule props={module} key={idx} />
                ))}
            </div>
        </>
    );
}

export default CustomerServiceInfo;
