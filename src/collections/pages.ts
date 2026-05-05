import { CollectionConfig } from 'payload/types';

const Pages: CollectionConfig = {
  slug: 'pages',

  admin: {
    useAsTitle: 'slug',
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
        {
          name: 'en',
          type: 'text',
          required: true,
          label: 'Title (English)',
        },
        {
          name: 'ar',
          type: 'text',
          required: true,
          label: 'Title (Arabic)',
        },
      ],
    },

    {
      name: 'content',
      type: 'group',
      fields: [
        {
          name: 'en',
          type: 'textarea',
          label: 'Content (English)',
        },
        {
          name: 'ar',
          type: 'textarea',
          label: 'Content (Arabic)',
        },
      ],
    },

    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
        },
      ],
    },
  ],
};

export default Pages;