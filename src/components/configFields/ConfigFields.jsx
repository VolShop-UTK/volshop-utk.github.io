import React from 'react';
import './config-fields.css';

/**
 * @typedef ConfigField
 * @property {string} name
 * @property {string} type
 * @property {string} varName
 * @property {string} [value]
 * @property {boolean} [required]
 * @property {boolean} [supportsHTML]
 * @property {ConfigField[]} [children]
 *
 */

const Checkmark = ({ value }) => (
    <span style={{ color: value ? 'green' : 'white' }}>{value ? '✅' : '✖️'}</span>
);

const Type = ({ value }) => {
    switch (value) {
        case 'String':
            return (
                <span style={{ padding: '5px', borderRadius: '5px', backgroundColor: '#672F49' }}>
                    String
                </span>
            );
        case 'Array':
            return (
                <span style={{ padding: '5px', borderRadius: '5px', backgroundColor: '#8A6531' }}>
                    Array
                </span>
            );
        case 'Boolean':
            return (
                <span style={{ padding: '5px', borderRadius: '5px', backgroundColor: '#4b3064' }}>
                    Boolean
                </span>
            );
        case 'Select':
            return (
                <span style={{ padding: '5px', borderRadius: '5px', backgroundColor: '#784722' }}>
                    Select
                </span>
            );
        default:
            return (
                <span style={{ padding: '5px', borderRadius: '5px', backgroundColor: '#0B0F14' }}>
                    {value}
                </span>
            );
    }
};

/**
 * @param {ConfigField[]} data
 */
function ConfigFields({ data }) {
    if (!data || data.length === 0)
        return <p>There are no configurable fields associated to this page.</p>;

    return (
        <table className='configField-table'>
            <colgroup>
                <col style={{ width: '20%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '30%' }} />
                <col style={{ width: '10%', textAlign: 'center' }} />
                <col style={{ width: '15%', textAlign: 'center' }} />
            </colgroup>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Variable Name</th>
                    <th>Value</th>
                    <th>Required</th>
                    <th>Supports HTML</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, idx) => (
                    <>
                        <tr key={idx}>
                            <td>{row['name']}</td>
                            <td>
                                <Type value={row['type']} />
                            </td>
                            <td>{row['varName']}</td>
                            <td>{row['value'] ?? ''}</td>
                            <td>
                                <Checkmark value={row['required'] ?? false} />
                            </td>
                            <td>
                                <Checkmark value={row['supportsHTML'] ?? false} />
                            </td>
                        </tr>

                        {row.children?.length > 0
                            ? row['children'].map((child, i) => (
                                  <tr key={`${idx}-${i}`} className='child-row'>
                                      <td>{child['name']}</td>
                                      <td>
                                          <Type value={child['type']} />
                                      </td>
                                      <td>{child['varName']}</td>
                                      <td>{child['value']}</td>
                                      <td>
                                          <Checkmark value={child['required'] ?? false} />
                                      </td>
                                      <td>
                                          <Checkmark value={child['supportsHTML'] ?? false} />
                                      </td>
                                  </tr>
                              ))
                            : null}
                    </>
                ))}
            </tbody>
        </table>
    );
}

export default ConfigFields;
