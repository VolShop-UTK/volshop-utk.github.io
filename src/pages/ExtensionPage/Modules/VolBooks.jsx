import React from 'react';
import Heading from '../../../components/Heading';
import ConfigFields from '../../../components/configFields/ConfigFields';
import Submodule from '../../../components/submodule/Submodule';

function VolBooks() {
    let submodules = [
        {
            name: 'DeptChrgDocs',
            styleSheet: '',
            description:
                'The DeptChrgDocs module controls the Department Charge Documentation Page.',
            callout:
                'This component uses the "General Information Pages" global component style (see [General Information Pages](/extension/components#general-info-page))',
            configFields: [],
            notes: '',
        },
        {
            name: 'Entry',
            styleSheet: '_volshopwebext_customerServiceInfo.scss',
            description:
                'The Entry Module passes all sub-modules to the main Controller module. It also holds the configuration file for all sub-modules and the module sass entry point file which is also passed to the main sass file in the Controller module. The model file for the module is also held here.',
            callout: '',
            configFields: [],
            notes: '',
        },
        {
            name: 'FacultyAdoptions',
            styleSheet: '_volshopwebext_facultyAdoptions.scss',
            description:
                'The FacultyAdoption module controls the Faculty Textbook Adoptions information page.',
            callout:
                'This component uses the "General Information Pages" global component style (see [General Information Pages](/extension/components#general-info-page))',
            configFields: [],
            notes: 'This page also includes content from the Site Management Tools (SMT) due it changing often. It still follows the "General Information Pages" global styling and all specific styling is handled by the extension.',
        },
        {
            name: 'PersonalBooklist',
            styleSheet: '_volshopwebext_personalBooklist.scss',
            description:
                'The PersonalBooklist module controls the How to View and Print Your Personalized Booklist information page.',
            callout:
                'This component uses the "General Information Pages" global component style (see [General Information Pages](/extension/components#general-info-page))',
            configFields: [],
            notes: '',
        },
        {
            name: 'VolBooksHome',
            styleSheet: '_volshopwebext_volbookshome.scss',
            description:
                'The VolBooksHome module controls the homepage for VolBooks. Each section of the page is split into it’s own component.',
            callout:
                'This component uses the “Dropdown Section” global component style (see [Dropdown Section](/extension/components#dropdown))',
            configFields: [
                {
                    name: 'Show Main Header',
                    type: 'Boolean',
                    varName: 'VolBooksHome.Header.show',
                },
                {
                    name: 'Main Header Image Path',
                    type: 'String',
                    varName: 'VolBooksHome.Header.imagePath',
                },
                {
                    name: 'Main Header Image Alt Tag',
                    type: 'String',
                    varName: 'VolBooksHome.Header.imageAltTag',
                },
                {
                    name: 'Show Order Materials',
                    type: 'Boolean',
                    varName: 'VolBooksHome.OrderMats.show',
                },
                {
                    name: 'Order Materials Links',
                    type: 'Array',
                    varName: 'VolBooksHome.OrderMats.Links',
                    children: [
                        {
                            name: 'Show',
                            type: 'Boolean',
                            varName: 'show',
                        },
                        {
                            name: 'Label',
                            type: 'String',
                            varName: 'label',
                        },
                        {
                            name: 'Link',
                            type: 'String',
                            varName: 'link',
                        },
                    ],
                },
                {
                    name: 'Total Access Information',
                    type: 'Array',
                    varName: 'VolBooksHome.FAQs.totalAccess',
                    children: [
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
                {
                    name: 'Inclusive Access Information',
                    type: 'Array',
                    varName: 'VolBooksHome.FAQs.inclusiveAccess',
                    children: [
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
                {
                    name: 'Textbook & Ebook Information',
                    type: 'Array',
                    varName: 'VolBooksHome.FAQs.textbookInfo',
                    children: [
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
                {
                    name: 'Online Ordering Information',
                    type: 'Array',
                    varName: 'VolBooksHome.FAQs.onlineOrderingInfo',
                    children: [
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
            notes: '- Each of the "Show" check-boxes determines whether the section or component is shown on the homepage.\n- **Make sure to separate paragraphs in individual <p> tags. It will automatically space and format them. Similarly, the FAQs can handle ordered list, unordered lists, and tables without any additional CSS (see [Dropdown Section](/extension/components#dropdown)).**',
        },
    ];

    return (
        <>
            <div>
                <Heading level={1} id='aboutus'>
                    VolBooks Module
                </Heading>
                <p>The VolBooks module controls all pages related to VolBooks.</p>
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

export default VolBooks;
