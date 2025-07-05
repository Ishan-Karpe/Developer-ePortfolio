import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Developer-ePortfolio',

  projectId: '6q0kl3sk',
  dataset: 'experience-db',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
