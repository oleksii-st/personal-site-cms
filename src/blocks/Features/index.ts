import type { Block } from 'payload/types';
import { blockLayout } from '../../fields/blockLayout';

export const Features: Block = {
  imageURL: '/media/Features.png',
  slug: 'features',
  labels: {
    singular: 'Features',
    plural: 'Features',
  },
  fields: [
    {
      type: 'text',
      name: 'heading',
      label: 'Heading',
    },
    {
      type: 'array',
      name: 'features',
      label: 'Features',
      minRows: 2,
      fields: [
        {
          type: 'upload',
          relationTo: 'media',
          name: 'icon',
          label: 'Icon',
          required: true,
        },
      ],
    },
    ...blockLayout(),
  ],
};
