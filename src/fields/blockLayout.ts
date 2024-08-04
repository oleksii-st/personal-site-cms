import { Field } from 'payload/types';

export const blockLayout = (): Field[] => {
  return [
    {
      type: 'checkbox',
      name: 'hideBlock',
      label: 'Hide block',
      defaultValue: false,
    },
    {
      type: 'number',
      name: 'paddingTop',
      label: 'Padding top',
      defaultValue: 32,
    },
    {
      type: 'number',
      name: 'paddingBottom',
      label: 'Padding Bottom',
      defaultValue: 32,
    },
    {
      type: 'array',
      name: 'breakpoints',
      label: 'Breakpoints',
      fields: [
        {
          type: 'number',
          name: 'breakpoint',
          label: 'Breakpoint (max with)',
          defaultValue: 767,
        },
        {
          type: 'number',
          name: 'paddingTop',
          label: 'Padding top',
          defaultValue: 16,
        },
        {
          type: 'number',
          name: 'paddingBottom',
          label: 'Padding Bottom',
          defaultValue: 16,
        },
      ],
      defaultValue: [
        {
          breakpoint: 991,
          paddingTop: 16,
          paddingBottom: 16,
        },
      ],
    },
  ];
};
