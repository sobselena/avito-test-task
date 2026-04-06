import { Button, Divider, Group, Loader, Stack, Textarea } from '@mantine/core';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { CATEGORY_OPTIONS } from '../../../../constants';
import { useEditAdInfoMutation, useGetAdInfoQuery } from '../../../../redux/api';
import type {
  ActualItemUpdateIn,
  CategoryType,
  ItemUpdateOut,
  RawFormValues,
} from '../../../../types';
import { MAX_LENGTH } from '../../constants';
import { useEditForm } from '../../hooks/use-edit-form';
import { getCategory, getCategoryByName } from '../../utils';
import { CharacteristicsFields } from '../characteristics-fields';
import { SelectField } from '../select-field';
import { TextField } from '../text-field';
import { LLMGeneratorButton } from '../llm-generator-button';

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
  const [editAdInfo] = useEditAdInfoMutation();
  const [form] = useEditForm({ data, category });
  const navigate = useNavigate();
  const handleSubmit = async (values: RawFormValues) => {
    const transformed: ActualItemUpdateIn = {
      ...values,
      category: values.category as CategoryType,
      price: Number(values.price),
    };

    try {
      await editAdInfo({ id: data.id, body: transformed });
      await navigate(-1);
    } catch {
      console.warn('Something went wrong');
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack gap="md">
        <SelectField
          label="Категория"
          data={CATEGORY_OPTIONS.map((option) => option)}
          {...form.getInputProps('category')}
          onChange={(value: string | null) => {
            if (value === null) return;

            form.setFieldValue('category', value);
            const mapped = getCategoryByName(value);
            if (mapped) {
              setCategory(mapped);
            }
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
        <Stack gap={'xs'} align="flex-start">
          <Textarea
            label="Описание"
            placeholder="Описание"
            maxLength={MAX_LENGTH}
            description={`${form.values.description.length}/${MAX_LENGTH}`}
            {...form.getInputProps('description')}
            w={942}
            styles={{
              input: {
                borderColor: form.values.description ? undefined : 'var(--mantine-color-orange-5)',
              },
            }}
          />

          <LLMGeneratorButton values={form.values} />
        </Stack>
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
