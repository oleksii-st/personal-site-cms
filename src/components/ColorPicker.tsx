import { useField, TextInput } from 'payload/components/forms';
import React from 'react';
import './index.scss';

export const ColorPicker: React.FC<{ path: string; name: string; label: string }> = ({
  path,
  name,
  label,
}) => {
  const { value, setValue } = useField<string>({ path });

  return (
    <div className={'color-picker'}>
      <label className={'field-label'}>
        {label} <span className="required">*</span>
      </label>

      <div className={'color-picker-row'}>
        <input type="color" value={value} onChange={(e) => setValue(e.target.value)} />
        <TextInput
          path={path}
          name={name}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
};
