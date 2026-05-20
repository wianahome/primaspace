import { defineField, defineType } from 'sanity'

export const blogSchema = defineType({
  name: 'blog',
  title: 'Artikel Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Artikel',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'content',
      title: 'Isi Konten',
      type: 'array',
      of: [{ type: 'block' }], // Ini untuk Rich Text Editor
    }),
  ],
})