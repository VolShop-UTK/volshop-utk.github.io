import React from 'react';
import Heading from '../../../components/Heading';
import ConfigFields from '../../../components/configFields/ConfigFields';
import { Link } from 'react-router';
import Submodule from '../../../components/submodule/Submodule';

function TotalAccess() {
    /*** @var {ConfigField} configFields */
    let submodules = [
        {
            name: 'Entry',
            styleSheet: '_volshopwebext_totalaccess.scss',
            description:
                'The Entry module passes all sub-modules to the main Entry module. It also holds the configuration file for all sub-modules and the module sass entry point file which is also passed to the main sass file in the Entry module. The model file for the module is also held here.',
            callout: '',
            configFields: [],
            notes: '',
        },
        {
            name: 'TotalAccessHelp',
            styleSheet: '_volshopwebext_totalaccess_help.scss',
            description:
                'The Total Access Help page contains FAQs about total access as well as a list of vendor specific help tools.',
            callout:
                'This component uses the “Dropdown Section” global component style (see [Dropdown Section]("/extension/style-guide/components#dropdown"))',
            configFields: [
                {
                    name: 'FAQs',
                    type: 'Array',
                    varName: 'TotalAccess.FAQs',
                    supportsHTML: true,
                    children: [
                        {
                            name: 'Category',
                            type: 'Select',
                            varName: 'category',
                            value: '[”General Information”, “Student FAQs”, “Faculty FAQs”]',
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
                            supportsHTML: true,
                        },
                    ],
                },
            ],
            notes: '',
        },
        {
            name: 'TotalAccessHome',
            styleSheet: '_volshopwebext_totalaccess_home.scss',
            description:
                'The Total Access Home page is the homepage for the module. It contains information pertaining to the program as well as a stats section.',
            callout:
                'This component uses the "Stat Graphs" global component style (see [Stat Graphs](/extension/style-guide/components#stat-graphs))',
            configFields: [
                {
                    name: 'Header Title',
                    type: 'String',
                    varName: 'TotalAccess.Header.title',
                },
                {
                    name: 'Header Description',
                    type: 'String',
                    varName: 'TotalAccess.Header.description',
                },
                {
                    name: 'Header Image Path',
                    type: 'String',
                    varName: 'TotalAccess.Header.imagePath',
                },
                {
                    name: 'Header Image Alt Tag',
                    type: 'String',
                    varName: 'TotalAccess.Header.imageAltTag',
                },
                {
                    name: 'Total Access Stats',
                    type: 'Array',
                    varName: 'TotalAccess.TAStats',
                    children: [
                        {
                            name: 'Term',
                            type: 'String',
                            varName: 'term',
                        },
                        {
                            name: 'Number of Items',
                            type: 'String',
                            varName: 'numItems',
                        },
                        {
                            name: 'Enrollments',
                            type: 'String',
                            varName: 'enrollments',
                        },
                        {
                            name: 'Enrollments',
                            type: 'String',
                            varName: 'enrollments',
                        },
                        {
                            name: 'Participation Rate',
                            type: 'String',
                            varName: 'participationRate',
                        },
                        {
                            name: 'Opt Out Rate',
                            type: 'String',
                            varName: 'optOutRate',
                        },
                        {
                            name: 'Student Savings',
                            type: 'String',
                            varName: 'studentSavings',
                        },
                    ],
                },
            ],
            notes: 'The Stats Graph component with display a graph showing student savings and a graph showing participation rate. If the information needed for either graph is missing, a graph displaying enrollment data will be shown instead of the missing graph. If no stats are given, the stats section will automatically hide. See [Stat Graphs](/extension/style-guide/components#stat-graphs) for more details.',
        },
        {
            name: 'TotalAccessTestimonials',
            styleSheet: '_volshopwebext_totalaccess_testimonials.scss',
            description:
                'The Total Access testimonials page shows all testimonials for the Total Access program.',
            callout: '',
            configFields: [
                {
                    name: 'Testimonials',
                    type: 'Array',
                    varName: 'TotalAccess.testimonials',
                    supportsHTML: true,
                    children: [
                        {
                            name: 'Name',
                            type: 'String',
                            varName: 'name',
                        },
                        {
                            name: 'Category',
                            type: 'Select',
                            varName: 'category',
                            value: '["Student", "Faculty"]',
                        },
                        {
                            name: 'Testimonial',
                            type: 'String',
                            varName: 'testimonial',
                            supportsHTML: true,
                        },
                        {
                            name: 'Image',
                            type: 'String',
                            varName: 'image',
                        },
                    ],
                },
            ],
            notes: 'The Category select field determines what label is displayed under the name.',
        },
    ];

    return (
        <>
            <div>
                <Heading level={1} id='total-access'>
                    Total Access Module
                </Heading>
                <p>
                    The Total Access module controls all total access pages including help,
                    testimonials, and a home page.
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

export default TotalAccess;
