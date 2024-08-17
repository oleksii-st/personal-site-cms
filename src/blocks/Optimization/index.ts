import type { Block } from 'payload/types';

import { blockLayout } from '../../fields/blockLayout';
import link from '../../fields/link';

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
      type: 'text',
      name: 'subheading',
      label: 'Subheading',
    },
    link(),
    {
      type: 'upload',
      relationTo: 'media',
      name: 'image',
      label: 'Image',
      required: true,
    },
    {
      type: 'upload',
      relationTo: 'media',
      name: 'imageDesktop',
      label: 'Image (Desktop)',
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
