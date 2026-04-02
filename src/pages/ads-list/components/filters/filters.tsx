import {
  Button,
  Card,
  Checkbox,
  Divider,
  Group,
  Stack,
  Switch,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { IconChevronUp } from '@tabler/icons-react';

export const Filters = () => (
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
          <Text size="sm" fw={700}>
            Только требующие доработок
          </Text>
          <Switch size="md" withThumbIndicator={false} />
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
);
