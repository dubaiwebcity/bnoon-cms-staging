import type { CollectionConfig } from 'payload';

export const Blogs: CollectionConfig = {
  slug: 'blogs',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order'],
  },

access: {
  read: () => true,
  create: () => true,
  update: () => true,
  delete: () => true,
},
  defaultSort: 'order',

  fields: [
    { name: 'title', type: 'text', localized: true },
    { name: 'titleNote', type: 'text', localized: true },
    { name: 'titleLink', type: 'text', localized: true },
    { name: 'content', type: 'textarea', localized: true },
    { name: 'author', type: 'text', localized: true },

    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },

    { name: 'embedMap', type: 'text', localized: true },
    { name: 'imageUrl', type: 'text', localized: true },
    { name: 'readMoreLink', type: 'text', localized: true },

    { name: 'publishedDate', type: 'date' },

    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 1,
    },
  ],
};