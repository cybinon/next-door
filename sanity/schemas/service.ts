import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Үйлчилгээнүүд',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: 'Icon image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
