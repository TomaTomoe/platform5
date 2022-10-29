export default {
    name: 'financialReport',
    title: 'Financial Reports',
    type: 'document',
    fields: [
        {
            name: 'reportTitle',
            title: 'Report Title',
            type: 'string'
        },
        {
            name: 'reportFile',
            title: 'Report File',
            type: 'file'
        },
        {
            name: 'reportCover',
            title: 'Report Cover',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                name: 'alt',
                title: 'Alternative text',
                type: 'string',
                validation: Rule => Rule.required()
                }
            ]
        }
    ]
}
