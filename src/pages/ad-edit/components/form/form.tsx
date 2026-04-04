import { useParams } from 'react-router';
import { useGetAdInfoQuery } from '../../../../redux/api';
import { CATEGORY_OPTIONS } from '../../../../constants';
import { Button, Divider, Group, Stack, Textarea } from '@mantine/core';
import { TextField } from '../text-field';
import { CharacteristicsFields } from '../characteristics-fields';
import { SelectField } from '../select-field';
import { getCategory, getCategoryDefaultValue } from '../../utils';

export const ItemForm = () => {
  const { id } = useParams();
  const { data } = useGetAdInfoQuery(Number(id));

  const category = getCategory(data);
  const categoryDefaultValue = getCategoryDefaultValue(data?.category);
  return (
    <form>
      <Stack gap="md">
        <SelectField
          label="Категория"
          data={CATEGORY_OPTIONS.map((option) => option.label)}
          defaultValue={categoryDefaultValue}
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
