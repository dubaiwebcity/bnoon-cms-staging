import type { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export const Blogs: CollectionConfig = {
  slug: 'blogs',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'order'],
    preview: (doc) => `/blogs/${doc.slug}`,
  },

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },

  defaultSort: '-publishedDate',

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
  unique: true,
  required: true,
  hooks: {
  beforeValidate: [
    ({ data, value }) => {
      if (!data) return value;

      if (!data.slug && data.title) {
        return data.title
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, '');
      }

      return value;
    },
  ],
},
},

    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },

    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
      localized: true,
    },

    { name: 'titleNote', type: 'text', localized: true },
    { name: 'titleLink', type: 'text', localized: true },
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

  {
  name: 'publishedDate',
  type: 'date',
  admin: { position: 'sidebar' },
 hooks: {
  beforeValidate: [
    ({ data }) => {
      if (!data) return;

      if (data.title && !data.slug) {
        return {
          ...data,
          slug: data.title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, ''),
        };
      }

      return data;
    },
  ],
},
},

    {
      name: 'order',
      type: 'number',
      defaultValue: 1,
    },
  ],
};