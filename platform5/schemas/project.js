export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'budgetBtnTitle',
      title: 'Budget Button Title',
      type: 'string'
    },
    {
      name: 'budgetBtnLink',
      title: 'Budget Button Link',
      type: 'url'
    },
    {
      name: 'donationBtnTitle',
      title: 'Donation Button Title',
      type: 'string'
    },
    {
      name: 'donationTo',
      title: 'Organization to get donation',
      type: 'string',
      options: {
        list: [
          {
            title: 'Громадська Організація "5 Перон"',
            value: '/getPaymentNPO'
          },
          {
            title: 'Благодійна Організація "Благодійний Фонд "5 Перон""',
            value: '/getPaymentCF'
          }
        ]
      }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: false,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'cardImage',
      title: 'Card image',
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
    },
    {
      name: 'aimTitle',
      title: 'Aim Section Title',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'bodyHTML',
      title: 'HTML Body',
      type: 'code',
      options: {
        language: 'html'
      }
    },
    {
      name: 'reportsSectionTitle',
      title: 'ReportsSectionTitle',
      type: 'string',
    },
    {
      name: 'financialReports',
      title: 'Financial Reports',
      type: 'array',
      of: [{type: 'reference', to: {type: 'financialReport'}}],
    },
    {
      name: 'membersSectionTitle',
      title: 'Members Section Title',
      type: 'string'
    },
    {
      name: 'activeMembers',
      title: 'Active Members',
      type: 'array',
      of: [{type: 'reference', to: {type: 'member'}}],
    },
    {
      name: 'startedAt',
      title: 'Started at',
      type: 'datetime',
    },
    {
      name: 'relatedProjectsTitle',
      title: 'Related Projects Title',
      type: 'string',
    },
    {
      name: 'relatedProjects',
      title: 'Related Projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project'}}],
    }
  ],
}
