import path from 'path';

import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { payloadCloud } from '@payloadcms/plugin-cloud';
import nestedDocs from '@payloadcms/plugin-nested-docs';
import redirects from '@payloadcms/plugin-redirects';
import seoPlugin from '@payloadcms/plugin-seo';
import { lexicalEditor, LinkFeature } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload/config';
import { CodeBlockFeature } from 'payload-code-block-feature';

import { Media } from './collections/Media';
import { Pages } from './collections/Pages';
import { ReusableContent } from './collections/ReusableContent';
import Users from './collections/Users';
import { Footer } from './globals/Footer';
import { Header } from './globals/Header';
import { NotFound } from './globals/NotFound';
import { Settings } from './globals/Settings';

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
      CodeBlockFeature({
        languages: () => {
          return [
            ['css', 'CSS'],
            ['html', 'HTML'],
            ['js', 'JavaScript'],
            ['typescript', 'TypeScript'],
          ];
        },
      }),
    ],
  }),
  collections: [Media, Pages, ReusableContent, Users],
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
    redirects({
      collections: ['pages'],
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
