import type { Block } from 'payload/types';
import { blockLayout } from '../../fields/blockLayout';
import link from '../../fields/link';

export const Socials: Block = {
  imageURL: '/media/Socials.png',
  slug: 'socials',
  labels: {
    singular: 'Socials',
    plural: 'Socials',
  },
  interfaceName: 'Socials',
  fields: [
    {
      type: 'text',
      name: 'heading',
      label: 'Heading',
    },
    {
      type: 'array',
      name: 'socials',
      label: 'Socials',
      minRows: 2,
      fields: [
        link({ disableLabel: true }),
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
