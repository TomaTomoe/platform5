export default {
    name: 'activityItem',
    title: 'Activity Item',
    type: 'object',
    fields: [
        {
            name: 'activityItemTitle',
            title: 'Activity Item Title',
            type: 'string'
        },
        {
            name: 'activityItemImage',
            title: 'Activity Item Image',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Cross',
                        value: '1'
                    },
                    {
                        title: 'Person',
                        value: '2'
                    },
                    {
                        title: 'Circle',
                        value: '3'
                    },
                    {
                        title: 'Shield',
                        value: '4'
                    }
                ]
            }
        }
    ]
}
