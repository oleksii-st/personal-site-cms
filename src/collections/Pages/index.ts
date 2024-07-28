import type { CollectionConfig } from 'payload/types';

import { admins } from '../../access/admins';
import { adminsOrPublished } from '../../access/adminsOrPublished';
import { slugField } from '../../fields/slug';
import { Hero } from '../../blocks/Hero';
import { Features } from '../../blocks/Features';
import { Optimization } from '../../blocks/Optimization';
import { Socials } from '../../blocks/Socials';
import { Contact } from '../../blocks/Contact';
import { Experience } from '../../blocks/Experience';
import { RichText } from '../../blocks/RichText';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: (doc) => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${doc.slug !== 'home' ? doc.slug : ''}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`;
    },
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
              blocks: [Hero, Features, Optimization, Socials, Contact, Experience, RichText],
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
