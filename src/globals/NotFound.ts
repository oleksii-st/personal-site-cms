import type { GlobalConfig } from 'payload/types';

export const NotFound: GlobalConfig = {
  slug: 'notFound',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'text',
      name: 'heading',
      label: 'Heading',
      defaultValue: '404 Not Found'
    },
    {
      type: 'richText',
      name: 'description',
      label: 'Description',
    },
  ],
};
