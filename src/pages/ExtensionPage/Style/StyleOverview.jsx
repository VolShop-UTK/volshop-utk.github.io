import React from 'react';
import Heading from '../../../components/Heading';
import { Link } from 'react-router';

function StyleOverview() {
    return (
        <>
            <div>
                <Heading level={1} id='style-guide-overview'>
                    Style Guide
                </Heading>
                <p>
                    The Style Guide provides a framework to help keep a consistent style accross the
                    VolShop Website.
                </p>
            </div>

            <div>
                <Heading level={3} id='variables'>
                    Variables
                </Heading>
                <p>
                    Variables should be used as often as possible to maintain consistency in
                    spacing, color, and font sizes. The University color pallet has been saved as
                    variables and can be accessed anywhere within the extension. There are
                    established main text colors, both light and dark, main background colors, both
                    light and dark, navigation text colors, menu background colors, and navigation
                    link colors. These colors should be used in the appropriate places and new ones
                    made if needed. A set range of margins, paddings, gaps, and font sizes have been
                    established to help avoid "magic numbers". This also allows the adjustment of
                    all margins, paddings, gaps, or font sizes from a single location.
                </p>
                <br />
                <p>
                    <b>All variables can be viewed at:</b>
                    <br />
                    <i>
                        Entry module {'>'} Sass {'>'} abstracts {'>'} _variables.scss
                    </i>
                </p>
            </div>

            <div>
                <Heading level={3} id='responsive'>
                    Responsive Design
                </Heading>
                <p>
                    In terms of responsive design, there are multiple tools that can be used to help
                    keep layouts consistently wrapping at the same screen sizes. Mixins have been
                    created with standard screen size media query breaks. The primary mixin being
                    used is "columnBreak". This gives a break point at a screen size of 800px and is
                    used for most columned approaches. In junction with "columnBreak", the mixin
                    "volshop-twoColumn" works in tandem with "volshoptwoColumn-column" to create a
                    two column layout for any component. It breaks from a two column layout to a
                    single column at "columnBreak".
                </p>
                <br />
                <p>
                    <b>All media query mixins can be viewed at:</b>
                    <br />
                    <i>
                        Entry module {'>'} Sass {'>'} abstracts {'>'} _media-queries.scss
                    </i>
                </p>
            </div>

            <div>
                <Heading level={3} id='responsive'>
                    Globally Styled Components
                </Heading>
                <p>
                    There are a variety of globally styled components that can and should be used
                    throughout the extension. Using these creates a cohesive user experience across
                    all pages of the application.
                </p>
                <br />
                <Link to='/extension/style-guide/components'>See all</Link>
            </div>
        </>
    );
}

export default StyleOverview;
