import type { Block } from 'payload/types';
import { blockLayout } from '../../fields/blockLayout';

export const RichText: Block = {
  imageURL: '/media/RichText.png',
  slug: 'richText',
  labels: {
    singular: 'RichText',
    plural: 'RichTexts',
  },
  fields: [
    {
      type: 'text',
      name: 'heading',
      label: 'Heading',
    },
    {
      type: 'richText',
      name: 'content',
      label: 'Content',
      required: true,
    },
    ...blockLayout(),
  ],
};
