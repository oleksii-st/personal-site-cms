import { Block } from 'payload/types';

const fieldsToRemove = ['hideBlock', 'paddingTop', 'paddingBottom', 'breakpoints'];

export const removeLayout = (block: Block): Block => {
  const fields = block.fields.filter(
    (field) =>
      field.type === 'tabs' ||
      field.type === 'row' ||
      field.type === 'collapsible' ||
      !fieldsToRemove.includes(field.name),
  );

  return {
    ...block,
    fields,
  };
};
