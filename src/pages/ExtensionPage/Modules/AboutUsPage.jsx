import React from 'react';
import Heading from '../../../components/Heading';
import ConfigFields from '../../../components/configFields/ConfigFields';
import Submodule from '../../../components/submodule/Submodule';

function AboutUsPage() {
    let submodules = [
        {
            name: 'AboutUs',
            styleSheet: '_volshopwebext_aboutUs_content.scss',
            description:
                'The About Us homepage contains a general overview of what the VolShop is and what we believe.',
            callout: '',
            configFields: [],
            notes: '',
        },
        {
            name: 'Employment',
            styleSheet: '_volshopwebext_aboutUs_employment_content.scss',
            description:
                'The Employment page shows all available employment opportunities offered as well as job qualifications and links to the application.',
            callout: '',
            configFields: [
                {
                    name: 'Employment',
                    type: 'Array',
                    varName: 'AbouytUs.Employment',
                    children: [
                        {
                            name: 'Category',
                            type: 'Select',
                            varName: 'category',
                            value: '["Administrative", "Student Union", "Distribution", "Events", "Commons/Cumberland", "Student"]',
                            required: true,
                        },
                        {
                            name: 'Job Title',
                            type: 'String',
                            varName: 'jobTitle',
                        },
                        {
                            name: 'Description',
                            type: 'String',
                            varName: 'description',
                        },
                        {
                            name: 'Application Link',
                            type: 'String',
                            varName: 'applicationLink',
                        },
                    ],
                },
            ],
            notes: 'The Category field determines which category the job falls into. If no jobs are specified in a category, that section will be hidden from the page. The only sections shown are the ones with at least one job listed in that category.',
        },
        {
            name: 'Entry',
            styleSheet: '_volshopwebext_aboutUs.scss',
            description:
                'The Entry module passes all sub-modules to the main Entry module. It also holds the configuration file for all sub-modules and the module sass entry point file which is also passed to the main sass file in the Entry module. The model file for the module is also held here.',
            callout: '',
            configFields: [],
            notes: '',
        },
        {
            name: 'History',
            styleSheet: '_volshopwebext_aboutUs_history.scss',
            description:
                'The History page gives a brief overview of how the VolShop started and where it is now.',
            callout: '',
            configFields: [],
            notes: '',
        },
        {
            name: 'Keys',
            styleSheet: '_volshopwebext_aboutUs_keys.scss',
            description:
                'The 10 Keys to Success page overviews the guiding principles of the VolShop.',
            callout: '',
            configFields: [],
            notes: '',
        },
        {
            name: 'Navbar',
            styleSheet: '',
            description:
                'The Navbar module initializes the sub-navbar component seen on the About Us Home Page, History page, and 10 Keys of Success page. By creating its own component, changes will be reflected on all pages instead of maintaining them individually.',
            callout:
                'This component uses the "Subnavbar" global component style (see [Sub-Navbar](/extension/style-guide/components#sub-navbar))',
            configFields: [],
            notes: '',
        },
        {
            name: 'Staff',
            styleSheet: '_volshopwebext_aboutUs_staff.scss',
            description: 'The staff page shows the leaders of the VolShop.',
            callout: '',
            configFields: [
                {
                    name: 'Staff',
                    type: 'Array',
                    varName: 'AbouytUs.Staff',
                    supportsHTML: true,
                    children: [
                        {
                            name: 'Name',
                            type: 'String',
                            varName: 'name',
                            required: true,
                        },
                        {
                            name: 'Title',
                            type: 'String',
                            varName: 'title',
                        },
                        {
                            name: 'Description',
                            type: 'String',
                            varName: 'description',
                            supportsHTML: true,
                        },
                        {
                            name: 'Image Path',
                            type: 'String',
                            varName: 'imagePath',
                        },
                    ],
                },
            ],
            notes: 'Staff members appear on page in the order listed in SuiteCommerce Configuration.',
        },
        {
            name: 'StoreHours',
            styleSheet: '_volshopwebext_aboutUs_storeHours.scss',
            description: 'Displays all locations and their store hours.',
            callout: '',
            configFields: [
                {
                    name: 'Store Hours',
                    type: 'Array',
                    varName: 'AboutUs.StoreHours',
                    children: [
                        {
                            name: 'Location Name',
                            type: 'String',
                            varName: 'name',
                            required: true,
                        },
                        {
                            name: 'Address',
                            type: 'String',
                            varName: 'address',
                        },
                        {
                            name: 'Phone Number',
                            type: 'String',
                            varName: 'phoneNumber',
                            supportsHTML: true,
                        },
                        {
                            name: 'Image Path',
                            type: 'String',
                            varName: 'imagePath',
                        },
                        {
                            name: 'Disclaimer',
                            type: 'String',
                            varName: 'disclaimer',
                        },
                        {
                            name: 'Monday Open',
                            type: 'String',
                            varName: 'mondayOpen',
                        },
                        {
                            name: 'Monday Close',
                            type: 'String',
                            varName: 'mondayClose',
                        },
                        {
                            name: 'Tuesday Open',
                            type: 'String',
                            varName: 'tuesdayOpen',
                        },
                        {
                            name: 'Tuesday Close',
                            type: 'String',
                            varName: 'tuesdayClose',
                        },
                        {
                            name: 'Wednesday Open',
                            type: 'String',
                            varName: 'wednesdayOpen',
                        },
                        {
                            name: 'Wednesday Close',
                            type: 'String',
                            varName: 'wednesdayClose',
                        },
                        {
                            name: 'Thursday Open',
                            type: 'String',
                            varName: 'thursdayOpen',
                        },
                        {
                            name: 'Thursday Close',
                            type: 'String',
                            varName: 'thursdayClose',
                        },
                        {
                            name: 'Friday Open',
                            type: 'String',
                            varName: 'fridayOpen',
                        },
                        {
                            name: 'Friday Close',
                            type: 'String',
                            varName: 'fridayClose',
                        },
                        {
                            name: 'Saturday Open',
                            type: 'String',
                            varName: 'saturdayOpen',
                        },
                        {
                            name: 'Saturday Close',
                            type: 'String',
                            varName: 'saturdayClose',
                        },
                        {
                            name: 'Sunday Open',
                            type: 'String',
                            varName: 'sundayOpen',
                            value: '',
                            required: false,
                            supportsHTML: false,
                            parentField: 'Store Hours',
                        },
                        {
                            name: 'Sunday Close',
                            type: 'String',
                            varName: 'sundayClose',
                        },
                    ],
                },
            ],
            notes: '- The Disclaimer field allows a message to be added under the location information (as seen on the VolTech Vending Machine location). \n- **To mark a location closed for a day, leave both the open and close fields for that day blank. It will automatically mark the day CLOSED.**',
        },
    ];

    return (
        <>
            <div>
                <Heading level={1} id='aboutus'>
                    About Us Module
                </Heading>
                <p>
                    The About Us module contains all pages pertaining to the VolShop’s identity and
                    pages located under the "About the VolShop" heading in the footer.
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

export default AboutUsPage;
