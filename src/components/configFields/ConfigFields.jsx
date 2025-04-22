import React from 'react';
import './config-fields.css';

function ConfigFields({ data }) {
    if (!data || data.length === 0)
        return <p>There are no configurable fields associated to this page.</p>;

    const headers = Object.keys(data[0]);

    return (
        <table className='configField-table'>
            <thead>
                <tr>
                    {headers.map((key) => (
                        <th key={key}>{key[0].toUpperCase() + key.slice(1)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, idx) => (
                    <tr key={idx}>
                        {headers.map((key) => (
                            <td key={key}>
                                {typeof row[key] === 'boolean' ? (
                                    row[key] === true ? (
                                        <p key={key}>&#10004;</p>
                                    ) : (
                                        <p>&#10007;</p>
                                    )
                                ) : (
                                    row[key]
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ConfigFields;
