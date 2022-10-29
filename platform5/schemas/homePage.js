export default {
    name: 'homePage',
    title: 'Home Page Settings',
    type: 'document',
    fieldsets: [
        {name: 'siteSettings', title: 'Site Settings', options: {collapsible: true, collapsed: true}},
        {name: 'mainSection', title: 'Main Section', options: {collapsible: true, collapsed: false}},
        {name: 'aboutUsSection', title: 'About Us Section', options: {collapsible: true, collapsed: true}},
        {name: 'activitySection', title: 'Activity Section', options: {collapsible: true, collapsed: true}},
        {name: 'projectsSection', title: 'Projects Section', options: {collapsible: true, collapsed: true}},
        {name: 'reportsSection', title: 'Reports Section', options: {collapsible: true, collapsed: true}},
        {name: 'faqSection', title: 'FAQ Section', options: {collapsible: true, collapsed: true}},
        {name: 'membersSection', title: 'Members Section', options: {collapsible: true, collapsed: true}}
    ],
    fields: [
        {
            name: 'homeTitle',
            title: 'Home Page Settings',
            type: 'string',
            initialValue: 'Home Page Settings',
            readOnly: true,
            hidden: true
        },
        {
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
            fieldset: 'siteSettings'
        },
        {
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            fieldset: 'siteSettings'
        },
        {
            name: 'header',
            title: 'Main Header',
            type: 'string',
            fieldset: 'mainSection'
        },
        {
            name: 'subHeader',
            title: 'Subheader',
            type: 'blockContent',
            fieldset: 'mainSection'
        },
        {
            name: 'mainImageDesktop',
            title: 'Main Image Desktop',
            type: 'image',
            description: 'Please pay attention that the image must be at least 1728*500 pixels',
            options: {
              hotspot: true,
            },
            fieldset: 'mainSection',
            fields: [
              {
                name: 'alt',
                title: 'Alternative Text',
                type: 'string',
                validation: Rule => Rule.required()
              }
            ]
        },
        {
            name: 'mainImageMobile',
            title: 'Main Image Mobile',
            type: 'image',
            description: 'Please pay attention that the image must be 880*500 pixels',
            options: {
              hotspot: true,
            },
            fieldset: 'mainSection',
            fields: [
              {
                name: 'alt',
                title: 'Alternative Text',
                type: 'string',
                validation: Rule => Rule.required()
              }
            ]
        },
        {
            name: 'buttonTitle',
            title: 'Donate Button Title',
            type: 'string',
            fieldset: 'mainSection'
        },
        {
            name: 'aboutUs',
            title: 'About Us',
            type: 'aboutUs',
            fieldset: 'aboutUsSection'
        },
        {
            name: 'activityTitle',
            title: 'Activity Section Title',
            type: 'string',
            fieldset: 'activitySection'
        },
        {
            name: 'activityList',
            title: 'Activity List',
            fieldset: 'activitySection',
            type: 'array',
            of: [ 
                {
                    name: 'activityItem',
                    title: 'Activity Item',
                    type: 'activityItem'
                }
            ]
        },
        {
            name: 'projectsTitle',
            title: 'Projects Section Title',
            type: 'string',
            fieldset: 'projectsSection'
        },
        {
            name: 'projectsList',
            title: 'Projects List',
            fieldset: 'projectsSection',
            type: 'array',
            of: [ 
                {
                    name: 'projectCard',
                    title: 'Project Card',
                    type: 'reference',
                    to: [{type: 'project'}]
                }
            ]
        },
        {
            name: 'reportsTitle',
            title: 'Reports Section Title',
            type: 'string',
            fieldset: 'reportsSection'
        },
        {
            name: 'reportsList',
            title: 'Reports List',
            fieldset: 'reportsSection',
            type: 'array',
            of: [ 
                {
                    name: 'reportCard',
                    title: 'Report Card',
                    type: 'reference',
                    to: [{type: 'financialReport'}]
                }
            ]
        },
        {
            name: 'faqTitle',
            title: 'FAQ Title',
            type: 'string',
            fieldset: 'faqSection'
        },
        {
            name: 'faqList',
            title: 'FAQ List',
            fieldset: 'faqSection',
            type: 'array',
            of: [
                {
                    name: 'faqItem',
                    title: 'FAQ Title',
                    type: 'faqItem'
                }
            ]
        },
        {
            name: 'allMembersSectionTitle',
            title: 'All Members Section Title',
            fieldset: 'membersSection',
            type: 'string'
        },
        {
            name: 'allMembers',
            title: 'All Members',
            fieldset: 'membersSection',
            type: 'array',
            of: [{type: 'reference', to: {type: 'member'}}],
        },
    ]
}
