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
      defaultValue: 24,
    },
    {
      type: 'number',
      name: 'paddingBottom',
      label: 'Padding Bottom',
      defaultValue: 24,
    },
    {
      type: 'array',
      name: 'breakpoints',
      label: 'Breakpoints',
      fields: [
        {
          type: 'number',
          name: 'breakpoint',
          label: 'Breakpoint (min with)',
          defaultValue: 768,
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
      ],
      defaultValue: [
        {
          breakpoint: 991,
          paddingTop: 32,
          paddingBottom: 32,
        },
      ],
    },
  ];
};
