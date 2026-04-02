import { ActionIcon, Card, Group, Select, TextInput } from '@mantine/core';
import { IconChevronDown, IconLayoutGrid, IconList, IconSearch } from '@tabler/icons-react';

export const SearchPanel = () => (
  <Card p={12} radius="md" shadow="xs">
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
        variant="default"
        placeholder="Pick value"
        data={['По новизне (сначала новые)', 'По цене']}
        defaultValue="По новизне (сначала новые)"
        clearable
        rightSection={<IconChevronDown size={18} />}
        clearSectionMode="rightSection"
        comboboxProps={{ width: 240 }}
        allowDeselect={false}
        styles={{
          input: {
            border: '5px solid var(--mantine-color-gray-light)',
          },
        }}
      />
    </Group>
  </Card>
);
