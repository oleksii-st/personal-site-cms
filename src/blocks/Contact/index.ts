import type { Block } from 'payload/types';
import { blockLayout } from '../../fields/blockLayout';

export const Contact: Block = {
  imageURL: '/media/Contact.png',
  slug: 'Contact',
  labels: {
    singular: 'Contact',
    plural: 'Contacts',
  },
  fields: [
    {
      type: 'text',
      name: 'heading',
      label: 'Heading',
    },
    {
      type: 'text',
      name: 'nameLabel',
      label: 'Name label',
      required: true,
      defaultValue: 'Name',
    },
    {
      type: 'text',
      name: 'emailLabel',
      label: 'Email label',
      required: true,
      defaultValue: 'Email',
    },
    {
      type: 'text',
      name: 'topicLabel',
      label: 'Topic label',
      required: true,
      defaultValue: 'Topic',
    },
    {
      type: 'text',
      name: 'messageLabel',
      label: 'Message label',
      required: true,
      defaultValue: 'Message',
    },
    ...blockLayout(),
  ],
};
