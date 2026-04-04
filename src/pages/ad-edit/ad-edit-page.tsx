import {
  Button,
  Container,
  Divider,
  Group,
  Select,
  Stack,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { IconArrowNarrowLeft, IconChevronDown, IconXboxXFilled } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router';
import { CATEGORY_OPTIONS, categoryTranslations } from '../../constants';
import { useGetAdInfoQuery } from '../../redux/api';

export const AdEditPage = () => {
  const params = useParams();
  const id = Number(params.id);
  const { data } = useGetAdInfoQuery(id);
  console.log(data);
  const categoryDefaultValue =
    CATEGORY_OPTIONS.find((option) => data?.category === option.value)?.label ||
    CATEGORY_OPTIONS[0].label;
  console.log(categoryDefaultValue);
  const navigate = useNavigate();
  return (
    <Container size={'xl'} py={'xl'}>
      <Stack align="flex-start">
        <Button
          variant="white"
          color="gray"
          p={0}
          leftSection={<IconArrowNarrowLeft size={16} />}
          onClick={() => navigate(-1)}
        >
          Вернуться к списку объявлений
        </Button>
      </Stack>
      <Stack gap={'md'}>
        <Title order={2} style={{ fontSize: 24 }}>
          Редактирование объявления
        </Title>

        <form>
          <Stack gap={'md'}>
            <Select
              label="Категория"
              fw={500}
              variant="default"
              placeholder="Pick category"
              data={CATEGORY_OPTIONS.map(({ label }) => label)}
              defaultValue={categoryDefaultValue}
              w={320}
              rightSection={<IconChevronDown size={18} />}
              comboboxProps={{ width: 240 }}
              allowDeselect={false}
            />
            <Divider />

            <TextInput
              size="sm"
              label="Цена"
              withAsterisk
              placeholder="Цена"
              defaultValue={data?.price}
              w={456}
              rightSection={<IconXboxXFilled size={18} cursor={'pointer'} />}
            />
            <Divider />
            <TextInput
              size="sm"
              label="Название"
              withAsterisk
              placeholder="Название"
              defaultValue={data?.title}
              w={456}
              rightSection={<IconXboxXFilled size={18} cursor={'pointer'} />}
            />
            <Divider />
            <Stack gap={'md'}>
              <Title order={3} size={'md'}>
                Характеристики
              </Title>
              {Object.entries(
                categoryTranslations[data?.category || CATEGORY_OPTIONS[0].value]
              ).map(([key, { name, possibleValues }]) => {
                if (possibleValues) {
                  return (
                    <Select
                      key={name}
                      label="Тип"
                      fw={500}
                      variant="default"
                      placeholder="Тип"
                      data={possibleValues.map(({ name }) => name)}
                      defaultValue={possibleValues[0].name}
                      w={456}
                      rightSection={<IconChevronDown size={18} />}
                      comboboxProps={{ width: 240 }}
                      allowDeselect={false}
                      styles={{
                        label: {
                          fontWeight: 400,
                        },
                      }}
                    />
                  );
                }
                return (
                  <TextInput
                    key={name}
                    size="sm"
                    label={name}
                    withAsterisk
                    placeholder={name}
                    defaultValue={(data?.params as Record<string, string>)?.[key]}
                    w={456}
                    rightSection={<IconXboxXFilled size={18} cursor={'pointer'} />}
                    styles={{
                      label: {
                        fontWeight: 400,
                      },
                    }}
                  />
                );
              })}
            </Stack>

            <Divider />
            <Textarea
              label="Описание"
              placeholder="Описание"
              w={942}
              defaultValue={data?.description}
            />
            <Group gap={10}>
              <Button>Сохранить</Button>
              <Button
                variant="filled"
                style={{
                  backgroundColor: '#D9D9D9',
                  color: '#5A5A5A',
                }}
              >
                Отменить
              </Button>
            </Group>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};
