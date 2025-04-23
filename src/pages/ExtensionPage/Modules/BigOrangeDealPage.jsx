import React from 'react';
import Heading from '../../../components/Heading';
import ConfigFields from '../../../components/configFields/ConfigFields';

function BigOrangeDealPage() {
    let configFields = [
        {
            name: 'Big Orange Deal Title',
            type: 'String',
            varName: 'BOD.title',
            value: '',
            required: false,
            supportsHTML: false,
            parentField: '',
        },
        {
            name: 'Price',
            type: 'String',
            varName: 'BOD.price',
            value: '',
            required: false,
            supportsHTML: false,
            parentField: '',
        },
        {
            name: 'Link to Item Page',
            type: 'String',
            varName: 'BOD.link',
            value: '',
            required: false,
            supportsHTML: false,
            parentField: '',
        },
        {
            name: 'Path to Image',
            type: 'String',
            varName: 'BOD.imageLink',
            value: '',
            required: false,
            supportsHTML: false,
            parentField: '',
        },
        {
            name: 'Description',
            type: 'String',
            varName: 'BOD.description',
            value: '',
            required: false,
            supportsHTML: true,
            parentField: '',
        },
    ];

    return (
        <>
            <div>
                <Heading level={1} id='bod'>
                    Big Orange Deal (BOD) Module
                </Heading>
                <p>
                    The Big Orange Deal (BOD) module only contains the Big Orange Deal page. It has
                    four display types: Staged, Released, Sold Out, and No Deal. The page displayed
                    is determined by a redirect placed on the <code>/big-orange-deal</code> url. All
                    pages (except Released) are subpages of the <code>/big-orange-deal</code> url.
                </p>
                <Heading level={6} id='bod-staged'>
                    <code>/big-orange-deal/staged</code>
                </Heading>
                <p>
                    This is used when preparing the next BOD. All BOD information can be entered for
                    the deal before the live date. When "Staged" is selected, the webpage does not
                    display any information about the deal, rather saying that a new deal is coming
                    and to check back on Friday.
                </p>
                <Heading level={6} id='bod-released'>
                    Released (<code>/big-orange-deal</code>)
                </Heading>
                <p>
                    As the name implies, the "Released" stage releases the BOD for purchase. The
                    image and description are displayed, as well as, the button link to the product
                    itself.
                </p>
                <Heading level={6} id='bod-soldout'>
                    <code>/big-orange-deal/sold-out</code>
                </Heading>
                <p>
                    When using "Sold Out", the product image, name, and price are still displayed,
                    but the description and link to the product are removed. Another way of marking
                    a BOD sold out is to change the product URL to "#". This will automatically
                    change the product link button to read "This Deal has Sold Out".
                </p>
                <Heading level={6} id='bod-nodeal'>
                    <code>/big-orange-deal/no-deal</code>
                </Heading>
                <p>
                    The "No Deal" option is used when there is not a Big Orange Deal offered for the
                    current week. When selected, the page will show a message informing the customer
                    that there is no deal this week and to check back next week.
                </p>
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
                    If the "Link to Item Page" is set to "#", the link will automatically display
                    that the deal has sold out. This is to avoid having a link appears to link to
                    the deal, but in reality does not.
                </p>
            </div>
        </>
    );
}

export default BigOrangeDealPage;
