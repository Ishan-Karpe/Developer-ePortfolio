import {defineField, defineType} from 'sanity';

export const skills = defineType({
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        defineField({
            name: 'skillsList',
            title: 'Skills List',
            type: 'array',
            of: [
            {
                type: 'object',
                fields: [
                    defineField({
                        name: 'skillName',
                        title: 'Skill Name',
                        type: 'string',
                        validation: Rule => Rule.required().min(1).max(50)
                    }),
                    defineField({
                        name: 'iconClass',
                        title: 'Icon Class',
                        type: 'string',
                        validation: Rule => Rule.required()
                    }),
                ],
            },
        ],
})]})