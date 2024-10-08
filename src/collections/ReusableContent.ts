import type { CollectionConfig } from 'payload/types';

import { admins } from '../access/admins';
import { Contact } from '../blocks/Contact';
import { Features } from '../blocks/Features';
import { Hero } from '../blocks/Hero';
import { Optimization } from '../blocks/Optimization';
import { RichText } from '../blocks/RichText';
import { Socials } from '../blocks/Socials';

export const ReusableContent: CollectionConfig = {
  slug: 'reusable-content',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    update: admins,
    create: admins,
    delete: admins,
    readVersions: admins,
  },
  labels: {
    singular: 'Reusable Content',
    plural: 'Reusable Contents',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [Hero, Features, Optimization, Socials, Contact, RichText],
    },
  ],
};
