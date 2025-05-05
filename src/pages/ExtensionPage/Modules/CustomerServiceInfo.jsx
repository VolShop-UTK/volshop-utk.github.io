import React from 'react';
import Heading from '../../../components/Heading';
import Submodule from '../../../components/submodule/Submodule';

function CustomerServiceInfo() {
    let submodules = [
        {
            name: 'Entry',
            styleSheet: '_volshopwebext_customerServiceInfo.scss',
            description:
                'The Entry module passes all sub-modules to the main Entry module. It also holds the configuration file for all sub-modules and the module sass entry point file which is also passed to the main sass file in the Entry module. The model file for the module is also held here.\n\n **Shipping Rates Component** \n\n This component contains all order price ranges and their associated shipping cost. The following configuration fields are used in the Customer Service Information component.',
            callout: '',
            configFields: [
                {
                    name: 'Shipping Rates',
                    type: 'Array',
                    varName: 'CustomerServiceInfo.ShippingRates',
                    children: [
                        {
                            name: 'Order Total',
                            type: 'String',
                            varName: 'orderTotal',
                        },
                        {
                            name: 'Shipping Rate',
                            type: 'String',
                            varName: 'shippingRate',
                        },
                    ],
                },
            ],
            notes: 'This information is used in both the FAQs sub-module and the ShippingPolicy sub-module.',
        },
        {
            name: 'FAQs',
            styleSheet: '_volshopwebext_faqs_content.scss',
            description:
                'The FAQs module shows all general FAQs customers might have when shopping with the VolShop.',
            callout:
                'This component uses the “Dropdown Section” global component style (see [Dropdown Section](/extension/style-guide/components#dropdown))',
            configFields: [
                {
                    name: 'FAQs',
                    type: 'Array',
                    varName: 'CustomerServiceInfo.FAQs',
                    supportsHTML: true,
                    children: [
                        {
                            name: 'Category',
                            type: 'Select',
                            varName: 'category',
                            value: '["General Information", "Store Hours and Locations", "University Faculty & Staff", "Returns & Exchanges"]',
                            required: true,
                        },
                        {
                            name: 'Question',
                            type: 'String',
                            varName: 'question',
                        },
                        {
                            name: 'Answer',
                            type: 'String',
                            varName: 'answer',
                        },
                    ],
                },
            ],
            notes: '- The Category field determines which section the FAQ goes under. \n - **Make sure to separate paragraphs in individual <p> tags. It will automatically space and format them. Similarly, the FAQs can handle ordered list, unordered lists, and tables without any additional CSS (see [Dropdown Section](/extension/style-guide/style-guide/components#dropdown)).**',
        },
        {
            name: 'PaymentMethods',
            styleSheet: '',
            description: 'The PaymentMethods module controls the Payment Methods information page.',
            callout:
                'This component uses the "General Information Pages" global component style (see [General Information Pages](/extension/style-guide/components#general-info-page))',
            configFields: [],
            notes: '',
        },
        {
            name: 'ReturnPolicy',
            styleSheet: '',
            description: 'The ReturnPolicy module controls the Return Policy information page.',
            callout:
                'This component uses the "General Information Pages" global component style (see [General Information Pages](/extension/style-guide/components#general-info-page))',
            configFields: [],
            notes: '',
        },
        {
            name: 'ShippingPolicy',
            styleSheet: '',
            description: 'The ShippingPolicy module controls the Shipping Policy information page.',
            callout:
                'This component uses the "General Information Pages" global component style (see [General Information Pages](/extension/style-guide/components#general-info-page))',
            configFields: [
                {
                    name: 'In-Store Pickup Policy',
                    type: 'String',
                    varName: 'CustomerServiceInfo.InStorePickupPolicy',
                    supportsHTML: true,
                },
            ],
            notes: '',
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
