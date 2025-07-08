import {defineField, defineType} from 'sanity'

export const devExperience = defineType({
    name: 'devExperience', //meta
    title: 'Developer Experience', //what are we going to see when we create documents
    type: 'document',
    fields: [
        defineField({
            name: 'position',
            title: 'Position',
            type: 'string',
            validation: (Rule) => Rule.required().min(2).max(100),
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM',
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required().min(10).max(500),
        }),
    ],
})