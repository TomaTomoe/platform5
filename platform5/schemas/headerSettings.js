export default {
    name: 'headerSettings',
    title: 'Header Settings',
    type: 'document',
    fields: [
        {
            name: 'headerNavigation',
            title: 'Header Navigation',
            type: 'string',
            initialValue: 'Header Navigation',
            readOnly: true,
            hidden: true
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
