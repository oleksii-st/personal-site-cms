import type { GlobalConfig } from 'payload/types';

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'array',
      name: 'columns',
      label: 'Columns',
      fields: [
        {
          type: 'array',
          name: 'navItems',
          maxRows: 6,
          fields: [link()],
        },
      ],
    },
    {
      type: 'text',
      name: 'copyright',
      label: 'Copyright',
      defaultValue: '© {{year}}. All rights reserved',
      admin: {
        description: 'Use {{year}} for current year',
      },
    },
  ],
};
