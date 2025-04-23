import React from 'react';
import Heading from '../../../components/Heading';
import Submodule from '../../../components/submodule/Submodule';

function Components() {
    let submodules = [
        {
            name: 'Ship Total Access Materials',
            styleSheet: '_volshopwebext_components_shipTotalAccess.scss',
            description:
                'The Ship Total Access Materials banner is used on both the VolBooks homepage as well as the Total Access homepage.',
            callout: '',
            configFields: [],
            notes: '',
        },
    ];

    return (
        <>
            <div>
                <Heading level={1} id='aboutus'>
                    Components Module
                </Heading>
                <p>
                    The Components module holds general HTML components used across multiple
                    modules.
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

export default Components;
