import { Stack, Title } from '@mantine/core';
import { CATEGORY_OPTIONS, categoryTranslations } from '../../../../constants';
import { TextField } from '../text-field';
import { SelectField } from '../select-field';
import type { CategoryType, ParamsType } from '../../../../types';

export const CharacteristicsFields = ({
  category,
  params,
}: {
  category?: CategoryType;
  params?: ParamsType;
}) => {
  const fields = categoryTranslations[category || CATEGORY_OPTIONS[0].value];
  console.log(fields);

  return (
    <Stack gap="sm">
      <Title order={3} size="md">
        Характеристики
      </Title>

      {Object.entries(fields).map(([key, { name, possibleValues }]) => {
        if (possibleValues) {
          return (
            <SelectField
              key={key}
              label={name}
              data={possibleValues.map((value) => value.name)}
              defaultValue={possibleValues[0].name}
              fw={400}
            />
          );
        }

        return (
          <TextField
            key={key}
            label={name}
            value={(params as Record<string, string>)?.[key]}
            fw={400}
          />
        );
      })}
    </Stack>
  );
};
