import type { GlobalConfig } from 'payload/types';

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'Logo',
      name: 'logo',
      type: 'text',
      required: true,
      defaultValue: 'OLEKSII_S',
    },
    {
      type: 'checkbox',
      name: 'showThemeSelect',
      label: 'Show theme select',
      defaultValue: true,
    },
    {
      type: 'checkbox',
      name: 'test',
      label: 'Test',
      defaultValue: true,
    },
  ],
};
