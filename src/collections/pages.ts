import type { CollectionConfig } from 'payload';

const Pages: CollectionConfig = {
  slug: 'pages',

  admin: {
    useAsTitle: 'slug',
  },

  // ✅ ADD THIS BLOCK
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },

  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },

    {
      name: 'title',
      type: 'group',
      fields: [
        { name: 'en', type: 'text', required: true },
        { name: 'ar', type: 'text', required: true },
      ],
    },

    {
      name: 'content',
      type: 'group',
      fields: [
        { name: 'en', type: 'textarea' },
        { name: 'ar', type: 'textarea' },
      ],
    },

 {
  name: 'seo',
  type: 'group',
  fields: [
    {
      name: 'en',
      type: 'group',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
      ],
    },
    {
      name: 'ar',
      type: 'group',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
      ],
    },
  ],
}
  ],
};

export default Pages;