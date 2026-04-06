import { Button, Divider, Group, Loader, Stack, Textarea } from '@mantine/core';

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
import { CharacteristicsFields } from '../characteristics-fields';
import { SelectField } from '../select-field';
import { TextField } from '../text-field';
import { DescriptionButton } from '../buttons';
import { PriceButton } from '../buttons/price-button';

export const ItemForm = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetAdInfoQuery(Number(id));
  if (isFetching) {
    return <Loader />;
  }
  return <>{data && <ActualForm data={data} />}</>;
};

export const ActualForm = ({ data }: { data: ItemUpdateOut }) => {
  const [editAdInfo] = useEditAdInfoMutation();
  const [form] = useEditForm({ data, category: data.category });
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
          }}
          allowDeselect={false}
        />
        <Divider />

        <Group gap={'xl'} align="flex-end">
          <TextField
            label="Цена"
            necessary
            {...form.getInputProps('price')}
            type="number"
            onClear={() => form.setFieldValue('price', '')}
          />
          <PriceButton values={form.values} />
        </Group>
        <Divider />
        <TextField
          label="Название"
          necessary
          {...form.getInputProps('title')}
          onClear={() => form.setFieldValue('title', '')}
        />
        <Divider />
        <CharacteristicsFields category={form.values.category as CategoryType} form={form} />
        <Divider />
        <Stack gap={'xs'} align="flex-start">
          <Textarea
            label="Описание"
            resize="vertical"
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

          <DescriptionButton
            values={form.values}
            onSave={(value?: string) => {
              if (value) {
                form.setFieldValue('description', value);
              }
            }}
          />
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
              form.setFieldValue('category', data.category);
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
