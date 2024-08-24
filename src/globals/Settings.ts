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
          defaultValue: 1440,
        },
        {
          type: 'number',
          name: 'horizontalPaddings',
          label: 'Horizontal paddings',
          required: true,
          defaultValue: 16,
        },
        {
          type: 'number',
          name: 'horizontalPaddingsDesktop',
          label: 'Horizontal paddings on desktop ( > 768px)',
          required: true,
          defaultValue: 32,
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Colors (Light theme)',
      fields: [
        color({
          name: 'backgroundColorLight',
          label: 'Background color',
          defaultValue: '#FFFFFF',
        }),
        color({
          name: 'textColorLight',
          label: 'Text color',
          defaultValue: '#141414',
        }),
        color({
          name: 'headingsColorLight',
          label: 'Headings color',
          defaultValue: '#000000',
        }),
      ],
    },
    {
      type: 'collapsible',
      label: 'Colors (Dark theme)',
      fields: [
        color({
          name: 'backgroundColorDark',
          label: 'Background color',
          defaultValue: '#1F1F1F',
        }),
        color({
          name: 'textColorDark',
          label: 'Text color',
          defaultValue: '#F5F5F5',
        }),
        color({
          name: 'headingsColorDark',
          label: 'Headings color',
          defaultValue: '#FFFFFF',
        }),
      ],
    },
  ],
};
