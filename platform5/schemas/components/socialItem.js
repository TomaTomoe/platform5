export default {
    name: 'socialItem',
    title: 'Social Item',
    type: 'object',
    fields: [
        {
            name: 'socialItemType',
            title: 'Social Item Type',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Facebook',
                        value: 'fb'
                    },
                    {
                        title: 'Instagram',
                        value: 'inst'
                    }
                ]
            }
        },
        {
            name: 'socialItemUrl',
            title: 'Social Item Url',
            type: 'url'
        }
    ]
}
