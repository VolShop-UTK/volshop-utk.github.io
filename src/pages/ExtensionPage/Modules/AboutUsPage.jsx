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
                    value: '',
                    required: false,
                    supportsHTML: true,
                    parentField: '',
                },
                {
                    name: 'Category',
                    type: 'Select',
                    varName: 'category',
                    value: '["Full Time", "Temp", "Student"]',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Employment',
                },
                {
                    name: 'Job Title',
                    type: 'String',
                    varName: 'jobTitle',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Employment',
                },
                {
                    name: 'Application Link',
                    type: 'String',
                    varName: 'applicationLink',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Employment',
                },
            ],
            notes: 'The Category field determines which category the job falls into. If no jobs are specified in a category, that section will be hidden from the page. The only sections shown are the ones with at least one job listed in that category.',
        },
        {
            name: 'Entry',
            styleSheet: '_volshopwebext_aboutUs.scss',
            description:
                'The Entry module passes all sub-modules to the main Controller module. It also holds the configuration file for all sub-modules and the module sass entry point file which is also passed to the main sass file in the Controller module. The model file for the module is also held here.',
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
                'This component uses the "Subnavbar" global component style (see [Sub-Navbar](/extension/components#sub-navbar))',
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
                    value: '',
                    required: false,
                    supportsHTML: true,
                    parentField: '',
                },
                {
                    name: 'Name',
                    type: 'String',
                    varName: 'name',
                    value: '',
                    required: true,
                    supportsHTML: false,
                    parentField: 'Staff',
                },
                {
                    name: 'Title',
                    type: 'String',
                    varName: 'title',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Staff',
                },
                {
                    name: 'Description',
                    type: 'String',
                    varName: 'description',
                    value: '',
                    required: false,
                    supportsHTML: true,
                    parentField: 'Staff',
                },
                {
                    name: 'Image Path',
                    type: 'String',
                    varName: 'imagePath',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Staff',
                },
            ],
            notes: 'Staff members appear on page in the order listed in SuiteCommerce Configuration.',
        },
        {
            name: 'StoreHours',
            styleSheet: '_volshopwebext_aboutUs_storeHours.scss',
            description: 'Displays all locations and their store hours.',
            callout:
                'This component uses the "Subnavbar" global component style (see [Sub-Navbar](/extension/components#sub-navbar))',
            configFields: [
                {
                    name: 'Store Hours',
                    type: 'Array',
                    varName: 'AboutUs.StoreHours',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: '',
                },
                {
                    name: 'Location Name',
                    type: 'String',
                    varName: 'name',
                    value: '',
                    required: true,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Address',
                    type: 'String',
                    varName: 'address',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Phone Number',
                    type: 'String',
                    varName: 'phoneNumber',
                    value: '',
                    required: false,
                    supportsHTML: true,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Image Path',
                    type: 'String',
                    varName: 'imagePath',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Disclaimer',
                    type: 'String',
                    varName: 'disclaimer',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Monday Open',
                    type: 'String',
                    varName: 'mondayOpen',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Monday Close',
                    type: 'String',
                    varName: 'mondayClose',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Tuesday Open',
                    type: 'String',
                    varName: 'tuesdayOpen',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Tuesday Close',
                    type: 'String',
                    varName: 'tuesdayClose',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Wednesday Open',
                    type: 'String',
                    varName: 'wednesdayOpen',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Wednesday Close',
                    type: 'String',
                    varName: 'wednesdayClose',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Thursday Open',
                    type: 'String',
                    varName: 'thursdayOpen',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Thursday Close',
                    type: 'String',
                    varName: 'thursdayClose',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Friday Open',
                    type: 'String',
                    varName: 'fridayOpen',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Friday Close',
                    type: 'String',
                    varName: 'fridayClose',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Saturday Open',
                    type: 'String',
                    varName: 'saturdayOpen',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
                },
                {
                    name: 'Saturday Close',
                    type: 'String',
                    varName: 'saturdayClose',
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
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
                    value: '',
                    required: false,
                    supportsHTML: false,
                    parentField: 'Store Hours',
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
