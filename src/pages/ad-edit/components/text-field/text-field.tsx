import { TextInput } from '@mantine/core';
import { IconXboxXFilled } from '@tabler/icons-react';
import type { FieldsProps } from '../../types';
import { useState } from 'react';

export const TextField = ({ label, value, fw = 700, necessary = false }: FieldsProps) => {
  const [currentValue, setCurrentValue] = useState(value || '');
  return (
    <TextInput
      size="sm"
      label={
        necessary ? (
          <span>
            <span style={{ color: 'red', marginRight: 4 }}>*</span> {label}
          </span>
        ) : (
          label
        )
      }
      onChange={(e) => setCurrentValue(e.target.value)}
      placeholder={label}
      value={currentValue}
      w={456}
      rightSection={
        <IconXboxXFilled size={18} cursor="pointer" onClick={() => setCurrentValue('')} />
      }
      styles={{
        label: { marginBottom: 6, fontWeight: fw },
        input: {
          borderColor: !necessary && currentValue === '' ? 'orange' : undefined,
        },
      }}
    />
  );
};
