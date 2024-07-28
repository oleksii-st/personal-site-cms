import path from 'path';
import type { CollectionConfig } from 'payload/types';
import { adminsOrPublished } from '../access/adminsOrPublished';
import { admins } from '../access/admins';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../media'),
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
};
