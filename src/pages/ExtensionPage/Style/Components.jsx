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
        </div>
    );
}

export default Components;
