import {
  ActionIcon,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Grid,
  Group,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
  Title,
  UnstyledButton,
} from '@mantine/core';

import { IconChevronUp, IconLayoutGrid, IconList, IconSearch } from '@tabler/icons-react';
export const AdsPage = () => (
  <Container size="xl" py="xl">
    <Stack gap="lg">
      <Box>
        <Title order={2} fw={500}>
          Мои объявления
        </Title>
        <Text c="dimmed" size="md">
          42 объявления
        </Text>
      </Box>

      <Card padding="xs" radius="md" shadow="xs">
        <Group justify="space-between">
          <TextInput
            placeholder="Найди объявление..."
            rightSection={<IconSearch size={16} />}
            style={{ flex: 1 }}
            variant="filled"
          />

          <ActionIcon.Group>
            <ActionIcon variant="light" color="gray" size="lg">
              <IconLayoutGrid size={20} color="blue" />
            </ActionIcon>
            <ActionIcon variant="light" color="gray" size="lg">
              <IconList size={20} />
            </ActionIcon>
          </ActionIcon.Group>

          <Select
            placeholder="Сортировка"
            data={['По новизне (сначала новые)', 'По цене']}
            defaultValue={'По новизне'}
            comboboxProps={{ width: 240 }}
          />
        </Group>
      </Card>
      <Grid align="flex-start">
        <Grid.Col span="content" style={{ width: 256 }}>
          <Stack gap={10}>
            <Card radius="md" p="lg" shadow="xs">
              <Stack gap="sm">
                <Text fw={700} size="lg">
                  Фильтры
                </Text>

                <Stack gap={12} mb={8}>
                  <UnstyledButton>
                    <Group justify="space-between">
                      <Text size="md">Категория</Text>
                      <IconChevronUp size={18} />
                    </Group>
                  </UnstyledButton>

                  <Stack gap={8} pl={4}>
                    <Checkbox label="Авто" size="sm" />
                    <Checkbox label="Электроника" size="sm" />
                    <Checkbox label="Недвижимость" size="sm" />
                  </Stack>
                </Stack>

                <Divider />

                <Group justify="space-between" align="center" wrap="nowrap">
                  <Text size="md" fw={700}>
                    Только требующие доработок
                  </Text>
                  <Switch size="sm" />
                </Group>
              </Stack>
            </Card>

            <Button
              variant="white"
              color="gray"
              size="md"
              fw={400}
              style={{
                boxShadow: 'var(--mantine-shadow-xs)',
              }}
            >
              Сбросить фильтры
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={9} style={{ flex: 1 }}></Grid.Col>
      </Grid>
    </Stack>
  </Container>
);
