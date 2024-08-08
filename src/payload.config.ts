import path from 'path';

import { payloadCloud } from '@payloadcms/plugin-cloud';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { lexicalEditor, LinkFeature } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload/config';
import Users from './collections/Users';
import { Pages } from './collections/Pages';
import { Media } from './collections/Media';
import { Header } from './globals/Header';
import { Footer } from './globals/Footer';
import { Settings } from './globals/Settings';
import { Redirects } from './collections/Redirects';
import { ReusableContent } from './collections/ReusableContent';
import seoPlugin from '@payloadcms/plugin-seo';
import nestedDocs from '@payloadcms/plugin-nested-docs';
import { NotFound } from './globals/NotFound';

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures.filter(
        (feature) => feature.key !== 'relationship' && feature.key !== 'checkList',
      ),
      LinkFeature({
        enabledCollections: ['pages'],
        fields: [
          {
            name: 'disableIndex',
            label: 'Disable indexation for search engines',
            type: 'checkbox',
          },
        ],
      }),
    ],
  }),
  collections: [Media, Pages, ReusableContent, Redirects, Users],
  globals: [Header, Footer, NotFound, Settings],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
    declare: false,
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud(),
    seoPlugin({
      collections: ['pages'],
      uploadsCollection: 'media',
    }),
    nestedDocs({
      collections: ['pages'],
      generateLabel: (_, doc) => String(doc.title),
      generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
