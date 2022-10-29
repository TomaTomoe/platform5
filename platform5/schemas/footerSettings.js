export default {
    name: 'footerSettings',
    title: 'Footer Settings',
    type: 'document',
    fields: [
        {
            name: 'footerNavigation',
            title: 'Footer Navigation',
            type: 'string',
            initialValue: 'Footer Navigation',
            readOnly: true,
            hidden: true
        },
        {
            name: 'contacts',
            title: 'Contacts',
            type: 'array',
            of: [
                {
                    name: 'contactItem',
                    title: 'Contact Item',
                    type: 'contactItem'
                }
            ]
        },
        {
            name: 'menu',
            title: 'Menu',
            type: 'array',
            of: [
                {
                    name: 'menuItem',
                    title: 'Menu item',
                    type: 'menuItem'
                }
            ] 
        },
        {
            name: 'socials',
            title: 'Integrated/promoted social networks',
            description: 'Please do not add more than 2 items',
            type: 'array',
            of: [
                {
                    name: 'socialItem',
                    title: 'Social Item',
                    type: 'socialItem'
                }
            ]
        }
    ]
}
