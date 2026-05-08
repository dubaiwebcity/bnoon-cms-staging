import type { CollectionConfig } from 'payload';

export const Blogs: CollectionConfig = {
  slug: 'blogs',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'publishedDate'],
    preview: (doc) => `/en/blog/${doc.slug}`, // preview link
  },

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },

  fields: [
    // ✅ Title
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },

    // ✅ Slug (auto URL)
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },

    // ✅ Rich Text (Lexical Editor)
    {
      name: 'content',
      type: 'richText',
      required: true,
      localized: true,
    },

    // ✅ Author
    {
      name: 'author',
      type: 'text',
      localized: true,
    },

    // ✅ Category
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
    },

    // ✅ Tags
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },

    // ✅ Featured Image (NO manual URL needed)
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    // ✅ Status (Draft / Published)
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },

    // ✅ Publish Date (only when published)
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        condition: (_, siblingData) => siblingData.status === 'published',
      },
    },

    // ✅ Optional: Google Map Embed
    {
      name: 'embedMap',
      type: 'text',
      localized: true,
    },
  ],

  timestamps: true,
};