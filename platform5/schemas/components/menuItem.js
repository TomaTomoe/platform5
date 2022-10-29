export default {
    name: 'menuItem',
    title: 'Menu Item',
    type: 'object',
    fields: [
        {
            name: 'menuItemName',
            title: 'Menu Item Name',
            type: 'string'
        },
        {
            name: 'menuItemUrl',
            title: 'Menu Item Url',
            type: 'url',
            validation: Rule => Rule.uri({
                allowRelative: true
            })
        },
        {
            name: 'isExternalUrl',
            title: 'Is this URL external?',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'hasHash',
            title: 'Does this URL has a hash?',
            type: 'boolean',
            initialValue: true
        }
    ]
}
