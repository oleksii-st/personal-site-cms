import type { GlobalConfig } from 'payload/types';

export const Settings: GlobalConfig = {
  slug: 'settings',
  typescript: {
    interface: 'Settings',
  },
  graphQL: {
    name: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'collapsible',
      label: 'Layout',
      fields: [
        {
          type: 'number',
          name: 'container',
          label: 'Container',
          required: true,
          defaultValue: 1620,
        },
        {
          type: 'number',
          name: 'horizontalPaddings',
          label: 'Horizontal paddings',
          required: true,
          defaultValue: 16,
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Colors',
      fields: [
        {
          type: 'text',
          name: 'backgroundColor',
          label: 'Background color',
          required: true,
          defaultValue: '#FFFFFF',
        },
        {
          type: 'text',
          name: 'textColor',
          label: 'Text color',
          required: true,
          defaultValue: '#141414',
        },
        {
          type: 'text',
          name: 'headingsColor',
          label: 'Headings color',
          required: true,
          defaultValue: '#000000',
        },
      ],
    },
  ],
};
