import { TextInput } from '@mantine/core';
import { IconXboxXFilled } from '@tabler/icons-react';
import type { FieldsProps } from '../../types';

export const TextField = ({ label, defaultValue, fw = 700, necessary }: FieldsProps) => (
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
    placeholder={label}
    defaultValue={defaultValue}
    w={456}
    rightSection={<IconXboxXFilled size={18} cursor="pointer" />}
    styles={{
      label: { marginBottom: 6, fontWeight: fw },
    }}
  />
);
