import React from 'react';

const Heading = ({ level = 2, id, children }) => {
    const Tag = `h${level}`;
    return (
        <Tag id={id} className='doc-heading'>
            {id && (
                <a
                    href={`#${id.replace(' ', '-').toLowerCase()}`}
                    className='anchor-link'
                    aria-label='Link to this section'>
                    #
                </a>
            )}
            {children}
        </Tag>
    );
};

export default Heading;
