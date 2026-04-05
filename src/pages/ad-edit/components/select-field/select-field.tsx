import { Select } from '@mantine/core';
import type { FieldsProps } from '../../types';
import { IconChevronDown } from '@tabler/icons-react';

export const SelectField = ({
  label,
  data,
  allowDeselect = true,
  onChange,
  fw = 700,
  necessary,
  defaultValue,
}: FieldsProps) => (
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
    placeholder={label}
    data={data}
    defaultValue={defaultValue ?? null}
    onChange={(value) => {
      if (value) onChange?.(value);
    }}
    w={456}
    rightSection={<IconChevronDown size={18} />}
    comboboxProps={{ width: 240 }}
    allowDeselect={allowDeselect}
    styles={{
      label: { marginBottom: 6, fontWeight: fw },
    }}
  />
);
