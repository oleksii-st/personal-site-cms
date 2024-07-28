import type { GlobalConfig } from 'payload/types';

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'text',
      required: true,
      defaultValue: 'OLEKSII_S',
    },
  ],
};
