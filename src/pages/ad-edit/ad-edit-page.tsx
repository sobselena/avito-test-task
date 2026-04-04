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
import { IconArrowNarrowLeft, IconChevronDown } from '@tabler/icons-react';
import { CATEGORY_OPTIONS } from '../../constants';
import { useNavigate } from 'react-router';

export const AdEditPage = () => {
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
              defaultValue={CATEGORY_OPTIONS[0].label}
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
              placeholder="Input placeholder"
              w={456}
            />
            <Divider />
            <TextInput
              size="sm"
              label="Название"
              withAsterisk
              placeholder="Input placeholder"
              w={456}
            />
            <Divider />
            <Stack gap={'md'}>
              <Title order={3} size={'md'}>
                Характеристики
              </Title>
              <Select
                label="Тип"
                fw={500}
                variant="default"
                placeholder="Pick category"
                data={['Ноутбук']}
                defaultValue={'Ноутбук'}
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
              <TextInput
                size="sm"
                label="Брэнд"
                withAsterisk
                placeholder="Input placeholder"
                w={456}
                styles={{
                  label: {
                    fontWeight: 400,
                  },
                }}
              />
            </Stack>

            <Divider />
            <Textarea label="Описание" placeholder="Input placeholder" w={942} />
            <Group gap={10}>
              <Button>Сохранить</Button>
              <Button
                variant="filled"
                style={{
                  backgroundColor: '#D9D9D9',
                  color: '#5A5A5A',
                }}
              >
                Button
              </Button>
            </Group>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};
