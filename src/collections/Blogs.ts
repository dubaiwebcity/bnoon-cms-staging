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
    { name: 'readMoreLink', type: 'text', localized: true },

    {
      name: 'publishedDate',
      type: 'date',
      admin: { position: 'sidebar' },
    },

    {
      name: 'order',
      type: 'number',
      defaultValue: 1,
    },
  ],
};