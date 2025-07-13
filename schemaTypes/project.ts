import {defineField, defineType} from 'sanity'

export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [//define a new field for the schema 
        defineField({
            name: 'Name',
            title: 'Project Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'Date',
            title: 'When did you do this project?',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug - ending of url to see work',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true, // Allows for image cropping
            },
        }),
        defineField({
            name: 'description',
            title: 'Project Description',
            type: 'text',
            description: 'Brief description shown on the landing page',
            validation: (Rule) => Rule.required().max(200),
        }),
        defineField({
            name: 'content',
            title: 'Project Content',
            type: 'array',
            of: [{type: 'block'}],
            description: 'Full article content displayed on the project page',
        }),
        defineField({
            name: 'stack',
            title: 'Project Stack',
            type: 'array',
            of: [{type: 'string'}],
            options:{
                layout: 'tags',
            },
            validation: (Rule) => Rule.required().min(1).max(10),
        })
    ]
})