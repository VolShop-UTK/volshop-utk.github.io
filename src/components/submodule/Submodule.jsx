import React from 'react';
import Heading from '../Heading';
import ConfigFields from '../configFields/ConfigFields';
import ReactMarkdown from 'react-markdown';
import { Link as RouterLink } from 'react-router-dom';
import './submodule.css';

/**
 * @typedef ConfigField
 * @property {String} name
 * @property {String} type
 * @property {String} varName
 * @property {String} value
 * @property {boolean} required
 * @property {boolean} supportsHTML
 * @property {String} parentField
 */

/**
 * @typedef SubModule
 * @property {String} name
 * @property {String} description
 * @property {ConfigField[]} configFields
 * @property {String} notes
 */

const markdownComponents = {
    a: ({ href, children }) => {
        // Internal link (starts with /): use RouterLink
        const isInternal = href.startsWith('/');
        return isInternal ? (
            <RouterLink to={href}>{children}</RouterLink>
        ) : (
            // External link: fallback to normal <a>
            <a href={href} target='_blank' rel='noopener noreferrer'>
                {children}
            </a>
        );
    },
};

/**
 * @param {SubModule} props
 */
function Submodule({ props }) {
    return (
        <div>
            <Heading level={4} id={props.name}>
                {props.name}
            </Heading>
            {props.styleSheet != '' ? (
                <p>
                    Style Sheet: <i>{props.styleSheet}</i>
                </p>
            ) : null}
            {props.description != '' ? <p>{props.description}</p> : null}

            {props.callout != '' ? (
                <div className='callout'>
                    <ReactMarkdown components={markdownComponents}>{props.callout}</ReactMarkdown>
                </div>
            ) : null}

            <Heading level={6} id={`${props.name}-config-fields`}>
                Configurable Fields
            </Heading>

            <ConfigFields data={props.configFields} />

            {props.notes != '' ? (
                <>
                    <Heading level={6} id={`${props.name}-notes`}>
                        Notes
                    </Heading>
                    <p>{props.notes}</p>
                </>
            ) : null}
        </div>
    );
}

export default Submodule;
