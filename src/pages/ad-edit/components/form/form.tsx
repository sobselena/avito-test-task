import { useParams } from 'react-router';
import { useGetAdInfoQuery } from '../../../../redux/api';
import { CATEGORY_OPTIONS } from '../../../../constants';
import { Button, Divider, Group, Loader, Stack, Textarea } from '@mantine/core';
import { TextField } from '../text-field';
import { CharacteristicsFields } from '../characteristics-fields';
import { SelectField } from '../select-field';
import { getCategory, getCategoryByName, getCategoryDefaultValue } from '../../utils';
import { useState } from 'react';
import type { ItemUpdateOut } from '../../../../types';

export const ItemForm = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetAdInfoQuery(Number(id));
  if (isFetching) {
    return <Loader />;
  }
  return <>{data && <ActualForm data={data} />}</>;
};

const ActualForm = ({ data }: { data: ItemUpdateOut }) => {
  const [category, setCategory] = useState(getCategory(data?.category));
  const categoryDefaultValue = getCategoryDefaultValue(category);
  return (
    <form>
      <Stack gap="md">
        <SelectField
          label="Категория"
          data={CATEGORY_OPTIONS.map((option) => option.label)}
          defaultValue={categoryDefaultValue}
          allowDeselect={false}
          onChange={(newCategory) => {
            const value = getCategoryByName(newCategory);
            if (value) setCategory(value);
          }}
        />

        <Divider />

        <TextField label="Цена" defaultValue={data?.price.toString()} necessary={true} />
        <Divider />

        <TextField label="Название" defaultValue={data?.title} necessary={true} />
        <Divider />

        <CharacteristicsFields category={category} params={data?.params} />

        <Divider />

        <Textarea
          label="Описание"
          defaultValue={data?.description}
          w={942}
          placeholder="Описание"
          styles={{
            label: { marginBottom: 6 },
          }}
        />

        <Group gap={10}>
          <Button fw={500}>Сохранить</Button>
          <Button
            variant="filled"
            fw={500}
            style={{ backgroundColor: '#D9D9D9', color: '#5A5A5A' }}
          >
            Отменить
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
