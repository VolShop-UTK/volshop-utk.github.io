import React from 'react';
import Heading from '../../../components/Heading';
import { anOldHope, CopyBlock } from 'react-code-blocks';

function Components() {
    const dropdownCode = `
        <h2 class='faqs-heading'>Frequently Asked Questions</h2>
        <div class='faqs-wrapper'>
            <div class='faqs-column-left'>
                <div class='faq-section'>
                    <h4 class='faqs-subheading'>{subheading}</h4>
                    {{#each faqs} <!-- Array of question and answer objects -->
                    <div class='faq'>
                        <div class='faq-question'>
                            <p>{question}</p>
                            <!-- Arrow SVG, removed for space -->
                        </div>
                        <div class='faq-answer'>{answer}</div>
                    </div>
                    {{/each}}
                </div>
            </div>
            <div class='faqs-column-right'>
                <div class='faq-section'>
                    <h4 class='faqs-subheading'>{subheading}</h4>
                    <div class='faq'>
                        <div class='faq-question'>
                            <p>{question}</p>
                            <!-- Arrow SVG, removed for space -->
                        </div>
                        <div class='faq-answer'>{answer}</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return (
        <div>
            <Heading level={1} id={`components`}>
                Components
            </Heading>

            <div>
                <Heading level={3} id={`dropdown`}>
                    Dropdown
                </Heading>
                <p>
                    The Dropdown Section should be used for things such as Frequently Asked Question
                    sections. The general structure is as follows. Each FAQ section contains a
                    heading and a body. Within the body, it can be a single or double column of
                    dropdowns. If there are more than one sections, they will be displayed in a
                    two-column grid-like fashion. Can handle ordered list, unordered lists, and
                    tables without any additional CSS.
                </p>
                <div>
                    <p>It should be structured in the following way:</p>
                    <CopyBlock
                        text={dropdownCode}
                        language='html'
                        showLineNumbers={false}
                        theme={anOldHope}
                        codeBlock={true}
                    />
                </div>
            </div>
            <Heading level={3} id={`general-info-page`}>
                General Information Pages
            </Heading>
            <Heading level={3} id={`item-carousel`}>
                Item Carousel
            </Heading>
            <Heading level={3} id={`sub-navbar`}>
                Sub-Navbar
            </Heading>
            <Heading level={3} id={`stat-graphs`}>
                Stat Graphs
            </Heading>
            <Heading level={3} id={`three-card-layout`}>
                Three Card Layout
            </Heading>
            <Heading level={3} id={`three-card-layout`}>
                VolShop Button
            </Heading>
        </div>
    );
}

export default Components;
