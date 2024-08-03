import type { CollectionConfig } from 'payload/types';
import { admins } from '../access/admins';

export const Redirects: CollectionConfig = {
  slug: 'redirects',
  access: {
    read: () => true,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      type: 'text',
      name: 'from',
      label: 'From',
      required: true,
    },
    {
      type: 'text',
      name: 'to',
      label: 'To',
      required: true,
    },
  ],
};
