import { Stack, Title } from '@mantine/core';
import { CATEGORY_OPTIONS, categoryTranslations } from '../../../../constants';
import { TextField } from '../text-field';
import { SelectField } from '../select-field';
import type { CategoryType } from '../../../../types';

import type { UseFormReturnType } from '@mantine/form';
import type { ItemFormValues } from '../../types';

export const CharacteristicsFields = ({
  category,

  form,
}: {
  category?: CategoryType;

  form: UseFormReturnType<ItemFormValues>;
}) => {
  const fields = categoryTranslations[category || CATEGORY_OPTIONS[0].value];

  return (
    <Stack gap="sm">
      <Title order={3} size="md">
        Характеристики
      </Title>
      {Object.entries(fields).map(([key, { label, possibleValues }]) => {
        const fieldPath = `params.${key}`;
        const fieldKey = key as keyof ItemFormValues['params'];
        if (possibleValues) {
          return (
            <SelectField
              key={key}
              label={label}
              data={possibleValues}
              necessary={false}
              {...form.getInputProps(fieldPath)}
              onChange={(value) => form.setFieldValue(fieldPath, value)}
              inputQuery={form.values.params[fieldKey]}
            />
          );
        }

        return (
          <TextField
            key={key}
            label={label}
            fw={400}
            {...form.getInputProps(fieldPath)}
            onClear={() => form.setFieldValue(fieldPath, '')}
          />
        );
      })}
    </Stack>
  );
};
