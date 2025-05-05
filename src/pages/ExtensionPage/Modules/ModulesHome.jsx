import React from 'react';
import Heading from '../../../components/Heading';
import ConfigFields from '../../../components/configFields/ConfigFields';
import Submodule from '../../../components/submodule/Submodule';

function ModulesHome() {
    let submodules = [
        {
            name: 'BigOrangeDeal',
            styleSheet: '',
            description:
                'The Big Orange Deal module is an information banner displaying BOD information.',
            callout: '',
            configFields: [],
            notes: '',
        },
        {
            name: 'Department',
            styleSheet: '_volshopwebext_departments.scss',
            description:
                'Displays cards for the other three departments (VolBooks, VolTech, and VolSnacks).',
            callout:
                'This component uses the "Three Card Layout" global component style (see [Three Card Layout](/extension/style-guide/components#three-card-layout))',
            configFields: [
                {
                    name: 'Department - show',
                    type: 'Boolean',
                    varName: 'Departments.show',
                },
                {
                    name: 'Departments',
                    type: 'Array',
                    varName: 'Departments.array',
                    children: [
                        {
                            name: 'Name',
                            type: 'String',
                            varName: 'name',
                        },
                        {
                            name: 'Slogan',
                            type: 'String',
                            varName: 'slogan',
                        },
                        {
                            name: 'Link',
                            type: 'String',
                            varName: 'link',
                        },
                        {
                            name: 'Image',
                            type: 'String',
                            varName: 'image',
                        },
                    ],
                },
            ],
            notes: '- Cards are displayed in the order of the configuration file.\n- Name is the main title for the card\n- Slogan appears above the name in smaller print',
        },
        {
            name: 'Entry',
            styleSheet: '_volshopwebext_home.scss',
            description:
                'The Entry Module passes all sub-modules to the main Controller module. It also holds the configuration file for all sub-modules and the module sass entry point file which is also passed to the main sass file in the Controller module. The model file for the module is also held here.',
            callout: '',
            configFields: [],
            notes: '',
        },
        {
            name: 'FanFavs',
            styleSheet: '_volshopwebext_fanfavs.scss',
            description:
                'The Fan Favorites section is an item carousel of select items to appear in the section. Items added to the “Fan Favorites” commerce category will be added to this carousel.',
            callout:
                'This component uses the "Item Carousel" global component style (see [Item Carousel](/extension/style-guide/components#item-carousel))',
            configFields: [],
            notes: 'It is recommended to have **at least 5 items** in the home goods carousel as a typical-size computer screen can show 5 items at a time.',
        },
        {
            name: 'FeaturedCategories',
            styleSheet: '_volshopwebext_featuredCategories.scss',
            description:
                'The Featured Categories component controls a three card layout featuring a different category in each. Below the main featured categories, there are subcategories featured as circle icons. When the screen is resized smaller, the circles are able to be scrolled horizontally.',
            callout:
                'This component uses the "Three Card Layout" global component style (see [Three Card Layout](/extension/style-guide/components#three-card-layout))',
            configFields: [
                {
                    name: 'Featured Categories - Show',
                    type: 'Boolean',
                    varName: 'FeaturedCategories.show',
                },
                {
                    name: 'Featured Categories',
                    type: 'Array',
                    varName: 'FeaturedCategories.array',
                    children: [
                        {
                            name: 'Category',
                            type: 'String',
                            varName: 'category',
                        },
                        {
                            name: 'Subcategory',
                            type: 'String',
                            varName: 'subcategory',
                        },
                        {
                            name: 'Link',
                            type: 'String',
                            varName: 'link',
                        },
                        {
                            name: 'Image',
                            type: 'String',
                            varName: 'image',
                        },
                    ],
                },
                {
                    name: 'Featured Subcategories - Show',
                    type: 'Boolean',
                    varName: 'FeaturedSubcategories.show',
                    children: [
                        {
                            name: 'Featured Subcategories',
                            type: 'Array',
                            varName: 'FeaturedSubcategories.array',
                        },
                        {
                            name: 'Subcategory Name',
                            type: 'String',
                            varName: 'subcategory',
                        },
                        {
                            name: 'Link',
                            type: 'String',
                            varName: 'link',
                        },
                        {
                            name: 'Image',
                            type: 'String',
                            varName: 'image',
                        },
                    ],
                },
            ],
            notes: '- The “Featured Categories” array should contain **EXACTLY three entries**. Any more or any less will cause weird spacing and layout issues.\n- The “Featured Subcategories” array should contain **~7 entries**. This will ensure the page will be filled completely.',
        },
        {
            name: 'Help',
            styleSheet: '_volshopwebext_help.scss',
            description:
                'The Help component controls the help and information banner. This banner is split into three columns, one for each help topic.',
            callout: '',
            configFields: [],
            notes: '',
        },
        {
            name: 'HomeGoods',
            styleSheet: '_volshopwebext_homeGoods.scss',
            description:
                'The Home Goods component controls a the main Home Goods banner as well as the home goods item carousel below it.',
            callout:
                'This component uses the "Item Carousel" global component style (see [Item Carousel](/extension/style-guide/components#item-carousel))',
            configFields: [
                {
                    name: 'Home Goods - Show',
                    type: 'Boolean',
                    varName: 'HomeGoods.show',
                },
                {
                    name: 'Home Goods Buttons',
                    type: 'Array',
                    varName: 'HomeGoods.buttons',
                    children: [
                        {
                            name: 'Title',
                            type: 'String',
                            varName: 'title',
                        },
                        {
                            name: 'Link',
                            type: 'String',
                            varName: 'link',
                        },
                    ],
                },
                {
                    name: 'Home Goods - Description',
                    type: 'String',
                    varName: 'HomeGoods.description',
                    supportsHTML: true,
                },
            ],
            notes: '- The “Home Goods Buttons” array should contain **AT MOST two entries**.\n- It is recommended to have **at least 5 items** in the home goods carousel as a typical-size computer screen can show 5 items at a time.',
        },
        {
            name: 'OurStory',
            styleSheet: '_volshopwebext_ourStory.scss',
            description:
                'The Our Story component showcases a brief history on what the VolShop is and links to where the user can find more information.',
            callout: '',
            configFields: [],
            notes: '',
        },
    ];

    return (
        <>
            <Heading level={1} id='aboutus'>
                Home Module
            </Heading>

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

export default ModulesHome;
