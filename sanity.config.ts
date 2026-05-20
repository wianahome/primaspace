import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure' // Update ke package baru
import { blogSchema } from './schemas/blog'

export default defineConfig({
  name: 'default',
  title: 'Studio Primaspace',

  projectId: 'm6b148mj', 
  dataset: 'production',

  basePath: '/studio', // Rute URL CMS kamu nanti (localhost:3000/studio)

  plugins: [structureTool()], // Gunakan structureTool

  schema: {
    types: [blogSchema], 
  },
})