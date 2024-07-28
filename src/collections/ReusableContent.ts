import type { CollectionConfig } from 'payload/types';

import { Hero } from '../blocks/Hero';
import { admins } from '../access/admins';

export const ReusableContent: CollectionConfig = {
  slug: 'reusable-content',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    update: admins,
    create: admins,
    delete: admins,
    readVersions: admins,
  },
  labels: {
    singular: 'Reusable Content',
    plural: 'Reusable Contents',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [Hero],
    },
  ],
};
