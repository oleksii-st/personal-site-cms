import type { Block } from 'payload/types';
import { blockLayout } from '../../fields/blockLayout';

export const Hero: Block = {
  imageURL: '/media/Hero.png',
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  fields: [
    {
      type: 'upload',
      name: 'image',
      label: 'Image',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'text',
      name: 'heading',
      label: 'Heading',
      required: true,
    },
    {
      type: 'text',
      name: 'subheading',
      label: 'Subheading',
    },
    ...blockLayout(),
  ],
};
