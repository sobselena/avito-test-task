import { Select } from '@mantine/core';
import type { SelectFieldProps } from '../../types';
import { IconChevronDown } from '@tabler/icons-react';

export const SelectField = ({
  label,
  data,
  allowDeselect = true,
  fw = 700,
  necessary = true,
  inputQuery,
  ...props
}: SelectFieldProps) => (
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
    w={456}
    defaultValue={inputQuery}
    rightSection={<IconChevronDown size={18} />}
    comboboxProps={{ width: 240 }}
    allowDeselect={allowDeselect}
    styles={{
      label: { marginBottom: 6, fontWeight: fw },
      input: {
        borderColor: !necessary && !inputQuery ? 'var(--mantine-color-orange-5)' : undefined,
      },
    }}
    {...props}
  />
);
