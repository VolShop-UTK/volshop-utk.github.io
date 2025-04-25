import React from 'react';
import Heading from '../../../components/Heading';
import Submodule from '../../../components/submodule/Submodule';

function VolTech() {
    let submodules = [
        {
            name: 'VolBooksHome',
            styleSheet: '_volshopwebext_voltechhome.scss',
            description:
                'The VolTechHome module controls the homepage for VolTech. Each section of the page is split into it’s own component.',
            callout:
                'This component uses the “Dropdown Section” global component style (see [Dropdown Section](/extension/components#dropdown))',
            configFields: [
                {
                    name: 'Show Welcome Banner',
                    type: 'Boolean',
                    varName: 'VolTechHome.WelcomeBanner.show',
                },
                {
                    name: 'Video Thumbnail',
                    type: 'String',
                    varName: 'VolTechHome.WelcomeBanner.videoThumb',
                },
                {
                    name: 'Video Link',
                    type: 'String',
                    varName: 'VolTechHome.WelcomeBanner.videoLink',
                },
                {
                    name: 'Show Apple Banner',
                    type: 'String',
                    varName: 'VolTechHome.AppleBanner.videoLink',
                },
                {
                    name: 'Navbar Link',
                    type: 'Array',
                    varName: 'VolTechHome.Navbar.links',
                    children: [
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
            ],
            notes: '- Each of the "Show" check-boxes determines whether the section or component is shown on the homepage.\n- The Device/Software Service field in the Technology Service Center Array determines what pricing table the item goes into\n- **Make sure to separate paragraphs in individual <p> tags. It will automatically space and format them. Similarly, the FAQs can handle ordered list, unordered lists, and tables without any additional CSS (see [Dropdown Section](/extension/components#dropdown)).**',
        },
    ];

    return (
        <>
            <div>
                <Heading level={1} id='aboutus'>
                    VolTech Module
                </Heading>
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

export default VolTech;
