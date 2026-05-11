import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Blogs } from './collections/Blogs';
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Categories } from './collections/Categories';
import { Tags } from './collections/Tags';
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Pages from './collections/pages'
import { seoPlugin } from '@payloadcms/plugin-seo';
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: 'https://bnoon-cms-staging-rust.vercel.app',

localization: {
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  fallback: false, 
},

cors: [
  'http://localhost:3000',
  'https://bnoon-website-cms-iota.vercel.app',
  'https://*.vercel.app'
],

csrf: [
  'http://localhost:3000',
  'https://bnoon-website-cms-iota.vercel.app',
  'https://*.vercel.app'
],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  collections: [Users, Media, Blogs, Categories, Tags, Pages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
 plugins: [
    seoPlugin({
      collections: ['blogs'],
      uploadsCollection: 'media',
    }),
  ],
});