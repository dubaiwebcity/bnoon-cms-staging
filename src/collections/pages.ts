import type { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',

  admin: {
    useAsTitle: 'title',
  },

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },

    {
      name: 'slug',
      type: 'text',
      localized: true,
      required: true,
    },

    {
      name: 'content',
      type: 'richText',
      localized: true,
    },

    {
      name: 'metaTitle',
      type: 'text',
      localized: true,
    },

    {
      name: 'metaDescription',
      type: 'textarea',
      localized: true,
    },

    {
      name: 'order',
      type: 'number',
      defaultValue: 1,
    },
  ],
};