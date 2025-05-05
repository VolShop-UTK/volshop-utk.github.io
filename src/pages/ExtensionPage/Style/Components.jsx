import React from 'react';
import Heading from '../../../components/Heading';
import { anOldHope, CopyBlock } from 'react-code-blocks';

function Components() {
    const dropdownCode = `
        <h2 class='faqs-heading'>Frequently Asked Questions</h2>
        <div class='faqs-wrapper'>
            <div class='faq-section'>
                <h4 class='faqs-subheading'>{ subheading }</h4>
                {{#each faqs} <!-- Array of question and answer objects -->
                <div class='faq'>
                    <div class='faq-question'>
                        <p>{ question }</p>
                        <!-- Arrow SVG, removed for space -->
                    </div>
                    <div class='faq-answer'>{ answer }</div>
                </div>
                {{/each}}
            </div>
        </div>
    `;
    const dropdownCode2 = `
        <h4 class="faqs-heading">General Information</h4>
        <div class="faqs-wrapper">
            <div class="faq-section-columnLayout">
                <div class="faq-section-column">
                    <div class="faq">
                        <div class="faq-question">
                            <p>{ question }</p>
                            <!-- Arrow SVG, removed for space -->
                            </div>
                        <div class="faq-answer">{ answer }</div>
                    </div>
                </div>
                <div class="faq-section-column">
                    <div class="faq">
                        <div class="faq-question">
                            <p>{ question }</p>
                            <!-- Arrow SVG, removed for space -->
                        </div>
                        <div class="faq-answer">{ answer }</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    const generalInfoPage = `
        <section class="generalInformationPages-content">
            <div class="generalInformationPages-content-wrapper">
                <div class="generalInformationPages-content-section">
                    <h3 class="generalInformationPages-content-heading">
                        { Heading }
                    </h3>
                    <div class="generalInformationPages-content-body">
                        <p>{ Content }</p>
                    </div>
                </div>
                
                <!-- Content section can be repeated for as many sections as needed -->
            </div>
        </section>
    `;
    const generalInfoPage2 = `
        <!-- INSIDE CONTENT BODY SECTION -->
        <!-- Address -->
        <ul class="generalInformationPages-content-address">
            <li>{ recipient }</li>
            <li>{ attention }</li>
            <li>{ street }</li>
            <li>{ city, state zip }</li>
        </ul>

        <!-- Call-Out -->
        <div class="generalInformationPages-content-callout">
            <h5 class="generalInformationPages-content-callout-heading">
                { Callout Heading }
            </h5>
            
            { Content }
            <!-- Paragraphs automatically space same as general content -->
            
            <!-- Supports lists -->
            <ul class="generalInformationPages-content-callout-body-list">
                <li>{ ... }</li>
                <!-- Repeat -->
            </ul>
        </div>
    `;
    const carousel = `
        <div class="item-carousel">
            <div class="item-carousel-container" id="{ UNIQUE ID USED IN JAVASCRIPT FILE }">
                <div class="item-carousel-cards" id="{ UNIQUE ID USED IN JAVASCRIPT FILE }">
                    <div data-type="backbone.collection.view.rows"></div>
                </div>
            </div>

            <button class="item-carousel-arrow-icon-prev" id="{ UNIQUE ID USED IN JAVASCRIPT FILE }">
                <i class="item-carousel-chevron-left-icon"></i>
            </button>
            <button class="item-carousel-arrow-icon-next" id="{ UNIQUE ID USED IN JAVASCRIPT FILE }">
                <i class="item-carousel-chevron-right-icon"></i>
            </button>
        </div>
    `;
    const carousel2 = `
        <div class="item-carousel-card">
            <a class="item-carousel-link" href="{{ url }}">
                <img
                    height="100"
                    src="{{resizeImage thumbnail.url 'tinythumb'}}"
                    alt="{{thumbnail.alt}}"
                    class="item-carousel-img" />
                <p class="item-carousel-name">{{ name }}</p>
                <p class="item-carousel-price">{{ price }}</p>
            </a>
        </div>
    `;
    const subNavbar = `
        <nav class="volshopwebext-navigation">
            <div class="volshopwebext-navigation-logo">
                <!-- Title Section -->
                <h4>
                    <a href="{ Link to Title Page }">{ Title }</a>
                </h4>
                
                <!-- OR -->
                
                <img src="{ Logo }" alt="{ ... }" />
                <!-- End Title Section -->
                
                <a class="volshopwebext-navigation-toggle">
                    <span class="volshopwebext-navigation-toggle-bar"></span>
                    <span class="volshopwebext-navigation-toggle-bar"></span>
                    <span class="volshopwebext-navigation-toggle-bar"></span>
                </a>
            </div>
            <div class="volshopwebext-navigation-links">
                <hr />
                <ul>
                    <li>
                        <a href="{ Link }">
                            <div class="volshopwebext-navigation-links-flex">
                                <p>{ Link Title }</p>
                                <!-- Double Arrow SVG, removed for space -->
                            </div>
                        </a>
                    </li>
                    
                    <!-- Repeated as many links are needed -->
                </ul>
            </div>
            <div class="volshopwebext-navigation-hidden volshopwebext-navigation-logo">
            </div>
        </nav>
    `;
    const subNavbar2 = `
        <div data-view="{ Name of Component }" class="volshopwebext-navigation-sticky"></div>
    `;
    const threePanels = `
        <section class="threePanel">
            <div class="threePanel-wrapper">
                {{#each departments}}
                <a href="{{ link }}" class="panel">
                        <div
                        class="threePanel-background-img"
                        style="background-image: url('{{ backgroundImage }}')"></div>
                    <div class="panel-text">
                        <p>{{ slogan }}</p>
                        <h4>{{ name }}</h4>
                        <p>{{ link text }}</p>
                    </div>
                </a>
                {{/each}}
            </div>
        </section>
    `;
    const volshopButton = `
        <a href="{ ... }" class="volshop-button">
            { ... }
        </a>
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
                <div>
                    <p>The two column approach is structured in the following way:</p>
                    <CopyBlock
                        text={dropdownCode2}
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
            <p>
                The General Information Page Layout should be used for any general information that
                needs to be displayed. It supports headings, subheadings, addresses, call-outs, and
                lists. Separate each paragraph in {'<p>'}, they will be automatically spaced evenly.
            </p>

            <div>
                <p>It should be structured in the following way:</p>
                <CopyBlock
                    text={generalInfoPage}
                    language='html'
                    showLineNumbers={false}
                    theme={anOldHope}
                    codeBlock={true}
                />
            </div>
            <div>
                <p>To use a call-out or include an address:</p>
                <CopyBlock
                    text={generalInfoPage2}
                    language='html'
                    showLineNumbers={false}
                    theme={anOldHope}
                    codeBlock={true}
                />
            </div>

            <Heading level={3} id={`item-carousel`}>
                Item Carousel
            </Heading>
            <div className='callout warning'>
                This component is not purely aesthetic and requires backend SuiteScript and
                JavaScript if item details are needed.
            </div>

            <p>
                The item carousel is a compact way of showcasing a collection of items. It is
                recommended to have at least 5 items in the category as a typical-size computer
                screen can show 5 items at a time. On larger screens, users can operate the carousel
                with arrows to the left and right of the component. These arrows will disappear
                respectively when the first or last items are being displayed. On mobile, the
                carousel can be operated by simply scrolling horizontally.
            </p>
            <p>
                To add items to the carousel, specify a commerce category in the SuiteScript view
                file and verify that there are items in the category.
            </p>
            <p>
                The item carousel is broken up into two parts: the collection container and the item
                cell.
            </p>

            <div>
                <p>The collection container should be set up as follows:</p>
                <CopyBlock
                    text={carousel}
                    language='html'
                    showLineNumbers={false}
                    theme={anOldHope}
                    codeBlock={true}
                />
            </div>
            <div>
                <p>The item cell should be set up as follows:</p>
                <CopyBlock
                    text={carousel2}
                    language='html'
                    showLineNumbers={false}
                    theme={anOldHope}
                    codeBlock={true}
                />
            </div>

            <Heading level={4} id={`carousel-notes`}>
                Notes
            </Heading>
            <p>
                A similar effect can be achieved by using this setup and providing the details for
                each cell individually without the use of any SuiteScripts. Replace{' '}
                <code>{`<div data-type='backbone.collection.view.rows'></div>`}</code> with the
                desired amount of item cell code snippets. Without the use of SuiteScript, no item
                details will be provided but other cards can be displayed in this way.
            </p>

            <Heading level={3} id={`modal`}>
                Modal
            </Heading>

            <Heading level={3} id={`sub-navbar`}>
                Sub-Navbar
            </Heading>
            <p>
                Should be used with pages that have multiple children. This navbar sits at the top
                of the content area and will stick to the top of the screen (on desktop) when
                scrolled past. On mobile, the navbar becomes a hamburger menu that, when opened,
                slides down to reveal the links. On the left-hand side, the navbar supports the use
                of either a heading or an image.
            </p>

            <div>
                <p>It should be structured in the following way:</p>
                <CopyBlock
                    text={subNavbar}
                    language='html'
                    showLineNumbers={false}
                    theme={anOldHope}
                    codeBlock={true}
                />
            </div>
            <div>
                <p>
                    When the Sub-Navbar is created as a component, it should be called in the
                    highest parent of where the navbar should be. This is so the navbar will stick
                    the length of the page. It should be structured in the following way:
                </p>
                <CopyBlock
                    text={subNavbar2}
                    language='html'
                    showLineNumbers={false}
                    theme={anOldHope}
                    codeBlock={true}
                />
            </div>

            <Heading level={3} id={`stat-graphs`}>
                Stat Graphs
            </Heading>
            <Heading level={3} id={`three-card-layout`}>
                Three Card Layout
            </Heading>
            <p>
                The three card layout creates a tri-card layout that spans the width of the parent
                container. These cards have a title, “slogan” which appears above the title, and a
                link.
            </p>

            <div>
                <p>The component should be setup as follows:</p>
                <CopyBlock
                    text={threePanels}
                    language='html'
                    showLineNumbers={false}
                    theme={anOldHope}
                    codeBlock={true}
                />
            </div>

            <Heading level={3} id={`three-card-layout`}>
                VolShop Button
            </Heading>
            <p>Can be used as a link or a button.</p>
            <CopyBlock
                text={volshopButton}
                language='html'
                showLineNumbers={false}
                theme={anOldHope}
                codeBlock={true}
            />
        </div>
    );
}

export default Components;
