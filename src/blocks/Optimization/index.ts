import type { Block } from 'payload/types';

import { blockLayout } from '../../fields/blockLayout';

export const Optimization: Block = {
  imageURL: '/media/Optimization.png',
  slug: 'optimization',
  labels: {
    singular: 'Optimization',
    plural: 'Optimizations',
  },
  interfaceName: 'Optimization',
  fields: [
    {
      type: 'text',
      name: 'heading',
      label: 'Heading',
    },
    {
      type: 'upload',
      relationTo: 'media',
      name: 'image',
      label: 'Image',
      required: true,
    },
    {
      type: 'textarea',
      name: 'description',
      label: 'Description',
    },
    ...blockLayout(),
  ],
};
