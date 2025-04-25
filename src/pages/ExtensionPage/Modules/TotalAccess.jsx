import React from 'react';
import Heading from '../../../components/Heading';
import ConfigFields from '../../../components/configFields/ConfigFields';
import { Link } from 'react-router';

function TotalAccess() {
    /*** @var {ConfigField} configFields */
    let configFields = [
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
        {
            name: 'Inclusive Access Stats',
            type: 'Array',
            varName: 'TotalAccess.IAStats',
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

                <div className='callout'>
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
                <ul>
                    <li>The Category field determines which section the FAQ goes under.</li>
                    <li>
                        <b>
                            Make sure to separate paragraphs in individual {'<p>'} tags. It will
                            automatically space and format them. Similarly, the FAQs can handle
                            ordered list, unordered lists, and tables without any additional CSS
                            (see <Link to='/extension/components#dropdown'>Dropdown Section</Link>).
                        </b>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default TotalAccess;
