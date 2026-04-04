import { Select } from '@mantine/core';
import type { FieldsProps } from '../../types';
import { IconChevronDown } from '@tabler/icons-react';

export const SelectField = ({ label, data, defaultValue, fw = 700, necessary }: FieldsProps) => (
  <Select
    label={
      necessary ? (
        <span>
          <span style={{ color: 'red', marginRight: 4 }}>*</span> {label}
        </span>
      ) : (
        label
      )
    }
    data={data}
    defaultValue={defaultValue}
    w={456}
    rightSection={<IconChevronDown size={18} />}
    comboboxProps={{ width: 240 }}
    styles={{
      label: { marginBottom: 6, fontWeight: fw },
    }}
  />
);
