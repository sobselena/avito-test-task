import { TextInput } from '@mantine/core';
import type { TextFieldProps } from '../../types';
import { IconXboxXFilled } from '@tabler/icons-react';
export const TextField = ({
  label,
  necessary = false,
  fw = 700,
  onClear,
  ...props
}: TextFieldProps & { onClear?: () => void }) => (
  <TextInput
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
    w={456}
    rightSection={<IconXboxXFilled size={18} style={{ cursor: 'pointer' }} onClick={onClear} />}
    styles={{
      label: { marginBottom: 6, fontWeight: fw },
      input: {
        borderColor: !necessary && !props.value ? 'var(--mantine-color-orange-5)' : undefined,
      },
    }}
    {...props}
  />
);
