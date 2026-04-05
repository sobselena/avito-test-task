import { useParams } from 'react-router';
import { useGetAdInfoQuery } from '../../../../redux/api';
import { CATEGORY_OPTIONS } from '../../../../constants';
import { Button, Divider, Group, Loader, Stack, Textarea } from '@mantine/core';
import { TextField } from '../text-field';
import { CharacteristicsFields } from '../characteristics-fields';
import { SelectField } from '../select-field';
import { getCategory, getCategoryByName, getCategoryDefaultValue } from '../../utils';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import type { ItemUpdateOut, ParamsType } from '../../../../types';

export const ItemForm = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetAdInfoQuery(Number(id));
  if (isFetching) {
    return <Loader />;
  }
  return <>{data && <ActualForm data={data} />}</>;
};

export const ActualForm = ({ data }: { data: ItemUpdateOut }) => {
  const [category, setCategory] = useState(getCategory(data?.category));

  const form = useForm({
    initialValues: {
      title: data?.title || '',
      price: data?.price?.toString() || '',
      description: data?.description || '',
      category: getCategoryDefaultValue(category),
      params: data?.params ? { ...data.params } : ({} as ParamsType),
    },

    validate: {
      title: (value) => (value.trim() === '' ? 'Название должно быть заполнено' : null),

      price: (value) => (value.trim() === '' ? 'Цена должна быть заполнена' : null),
    },

    validateInputOnChange: true,
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack gap="md">
        <SelectField
          label="Категория"
          data={CATEGORY_OPTIONS.map((option) => option.label)}
          {...form.getInputProps('category')}
          onChange={(value: string | null) => {
            if (value === null) return;

            form.setFieldValue('category', value);
            const mapped = getCategoryByName(value);
            if (mapped) setCategory(mapped);
          }}
          allowDeselect={false}
        />

        <Divider />

        <TextField
          label="Цена"
          necessary
          {...form.getInputProps('price')}
          type="number"
          onClear={() => form.setFieldValue('price', '')}
        />

        <Divider />

        <TextField
          label="Название"
          necessary
          {...form.getInputProps('title')}
          onClear={() => form.setFieldValue('title', '')}
        />

        <Divider />

        <CharacteristicsFields category={category} form={form} />

        <Divider />

        <Textarea
          label="Описание"
          placeholder="Описание"
          {...form.getInputProps('description')}
          w={942}
          styles={{
            input: {
              borderColor: form.values.description ? undefined : 'var(--mantine-color-orange-5)',
            },
          }}
        />
        <Group gap={10}>
          <Button type="submit" fw={500} disabled={Object.keys(form.errors).length > 0}>
            Сохранить
          </Button>

          <Button
            variant="filled"
            fw={500}
            style={{ backgroundColor: '#D9D9D9', color: '#5A5A5A' }}
            type="button"
            onClick={() => {
              setCategory(data.category);
              form.reset();
            }}
          >
            Отменить
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
