import React from 'react';
import Heading from '../../../components/Heading';
import ConfigFields from '../../../components/configFields/ConfigFields';
import { Link } from 'react-router';

function InclusiveAccess() {
    /*** @var {ConfigField} configFields */
    let configFields = [
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
                <Heading level={1} id='inclusive-access'>
                    Inclusive Access
                </Heading>
                <p>
                    Stylesheet: <i>_volshopwebext_inclusiveAccess.scss</i>
                </p>

                <p>
                    The Inclusive Access module controls the Inclusive Access landing page which
                    contains an description of what Inclusive Access is and stats about the program.
                </p>

                <div className='callout'>
                    This component uses the "General Information Pages" and "Stat Graphs" global
                    component styles (see{' '}
                    <Link to='/extension/style-guide/components#general-info-page'>
                        General Information Pages
                    </Link>{' '}
                    and <Link to='/extension/style-guide/components#stat-graphs'>Stat Graphs</Link>)
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
                <p>
                    The Stats Graph component with display a graph showing student savings and a
                    graph showing participation rate. If the information needed for either graph is
                    missing, a graph displaying enrollment data will be shown instead of the missing
                    graph. If no stats are given, the stats section will automatically hide. See{' '}
                    <Link to='/extension/style-guide/components#stat-graphs'>Stat Graphs</Link> for
                    more details.
                </p>
            </div>
        </>
    );
}

export default InclusiveAccess;
