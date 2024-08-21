import type { CollectionConfig } from 'payload/types';

import { admins } from '../access/admins';
import { adminsOrPublished } from '../access/adminsOrPublished';
import { Contact } from '../blocks/Contact';
import { Features } from '../blocks/Features';
import { Hero } from '../blocks/Hero';
import { Optimization } from '../blocks/Optimization';
import { ReusableContentBlock } from '../blocks/ReusableContentBlock';
import { RichText } from '../blocks/RichText';
import { Socials } from '../blocks/Socials';
import { slugField } from '../fields/slug';
import { formatPreviewURL } from '../utilities/formatPreviewURL';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: (doc, options) => formatPreviewURL('pages', doc, options),
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [
                Hero,
                Features,
                Optimization,
                Socials,
                Contact,
                RichText,
                ReusableContentBlock,
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'checkbox',
      name: 'disableIndex',
      label: 'Disable index',
      defaultValue: false,
    },
    slugField(),
  ],
};
