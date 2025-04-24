import React from 'react';
import Heading from '../../../components/Heading';

function Components() {
    return (
        <div>
            <Heading level={1} id={`components`}>
                Components
            </Heading>
            <Heading level={3} id={`sub-navbar`}>
                Sub-Navbar
            </Heading>
            <Heading level={3} id={`dropdown`}>
                Dropdown
            </Heading>
            <Heading level={3} id={`general-info-page`}>
                General Information Pages
            </Heading>
            <Heading level={3} id={`three-card-layout`}>
                Three Card Layout
            </Heading>
            <Heading level={3} id={`item-carousel`}>
                Item Carousel
            </Heading>
        </div>
    );
}

export default Components;
