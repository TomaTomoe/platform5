export default {
    name: 'faqItem',
    title: 'FAQ Item',
    type: 'object',
    fields: [
        {
            name: 'question',
            title: 'Question',
            type: 'text'
        },
        {
            name: 'answear',
            title: 'Answear',
            type: 'blockContent'
        }
    ]
}
