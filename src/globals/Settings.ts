import type { GlobalConfig } from 'payload/types';
import color from '../fields/color';

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
        color({
          name: 'backgroundColor',
          label: 'Background color',
          defaultValue: '#FFFFFF',
        }),
        color({
          name: 'textColor',
          label: 'Text color',
          defaultValue: '#141414',
        }),
        color({
          name: 'headingsColor',
          label: 'Headings color',
          defaultValue: '#000000',
        }),
      ],
    },
  ],
};
