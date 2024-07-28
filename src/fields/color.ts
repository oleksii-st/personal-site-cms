import type { Field } from 'payload/types';

import { ColorPicker } from '../components/ColorPicker';

type colorArguments = {
  name: string;
  label: string;
  defaultValue: string;
};

const color = ({ name, label, defaultValue }: colorArguments): Field => {
  return {
    type: 'text',
    name,
    label,
    defaultValue,
    required: true,
    admin: {
      components: {
        Field: ColorPicker,
      },
    },
  };
};

export default color;
