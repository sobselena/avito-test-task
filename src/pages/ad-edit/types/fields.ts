import type { SelectProps, TextInputProps } from '@mantine/core';
import type { ParamsType } from '../../../types';

export type TextFieldProps = Omit<TextInputProps, 'label'> &
  Partial<{
    necessary: boolean;
    fw: number;
    label: string;
    onClear: () => void;
  }>;

export type SelectFieldProps = SelectProps &
  Partial<{
    necessary: boolean;
    fw: number;
    label: string;
    inputQuery: string;
  }>;

export type ItemFormValues = {
  title: string;
  price: string;
  description: string;
  category: string;
  params: ParamsType;
};
