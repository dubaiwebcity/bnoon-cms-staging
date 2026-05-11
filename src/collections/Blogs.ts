import type { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export const Blogs: CollectionConfig = {
  slug: 'blogs',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'order', 'publishedDate'],
    preview: (doc) => `/en/${doc.slug}`,
    livePreview: {
      url: ({ data }) => `/en/${data?.slug || ''}`,
    },
  },

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },

  versions: {
    drafts: {
      autosave: true,
    },
  },

  defaultSort: '-publishedDate',

  fields: [
    // TITLE
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },

    // SLUG (AUTO GENERATE)
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

    // STATUS (DRAFT / PUBLISHED)
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },

    // CONTENT (LEXICAL EDITOR)
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
      localized: true,
    },

    { name: 'titleNote', type: 'text', localized: true },
    { name: 'titleLink', type: 'text', localized: true },
    { name: 'author', type: 'text', localized: true },

    // CATEGORY
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
    },

    // TAGS
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },

    // IMAGE UPLOAD
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },

    // OPTIONAL IMAGE URL
    {
      name: 'imageUrl',
      type: 'text',
      localized: true,
    },

    // MAP
    {
      name: 'embedMap',
      type: 'text',
      localized: true,
    },

    // PUBLISHED DATE
    {
      name: 'publishedDate',
      type: 'date',
      admin: { position: 'sidebar' },
      defaultValue: () => new Date(),
    },

    // ORDER
    {
      name: 'order',
      type: 'number',
      defaultValue: 1,
    },

    // AUTO READ MORE LINK
    {
      name: 'readMoreLink',
      type: 'text',
      admin: {
        readOnly: true,
      },
      hooks: {
        afterRead: [
          ({ data }) => {
            if (!data?.slug) return '';
            return `/blogs/${data.slug}`;
          },
        ],
      },
    },
  ],
};