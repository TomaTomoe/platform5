export default {
    name: 'aboutUs',
    type: 'object',
    fieldsets: [
        {name: 'aboutUsSettings', title: 'About Us Section Settings', options: {collapsible: true, collapsed: true, columns: 2}}
    ],
    fields: [
        {
            name: 'aboutUsContent',
            title: 'About Us Content',
            type: 'blockContent'
        },
        {
            name: 'beneficiariesAmount',
            title: 'Amount Of Beneficiaries',
            type: 'string',
            fieldset: 'aboutUsSettings'
        },
        {
            name: 'beneficiariesTitle',
            title: 'Title For Beneficiaries',
            type: 'string',
            fieldset: 'aboutUsSettings'
        },
        {
            name: 'volunteersAmount',
            title: 'Amount Of Volunteers',
            type: 'string',
            fieldset: 'aboutUsSettings'
        },
        {
            name: 'volunteersTitle',
            title: 'Title For Volunteers',
            type: 'string',
            fieldset: 'aboutUsSettings'
        },
        {
            name: 'humanitarianAmount',
            title: 'Amount Of Humanitarian Help',
            type: 'string',
            fieldset: 'aboutUsSettings'
        },
        {
            name: 'humanitarianTitle',
            title: 'Title For Humanitarian Help',
            type: 'string',
            fieldset: 'aboutUsSettings'
        } 
    ]
}
