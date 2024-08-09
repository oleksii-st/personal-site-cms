import type { Block } from 'payload/types';

import { blockLayout } from '../../fields/blockLayout';
import link from '../../fields/link';

export const Experience: Block = {
  imageURL: '/media/Experience.png',
  slug: 'experience',
  labels: {
    singular: 'Experience',
    plural: 'Experiences',
  },
  interfaceName: 'Experience',
  fields: [
    {
      type: 'text',
      name: 'heading',
      label: 'Heading',
    },
    {
      type: 'array',
      name: 'jobs',
      label: 'Jobs',
      fields: [
        link(),
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
