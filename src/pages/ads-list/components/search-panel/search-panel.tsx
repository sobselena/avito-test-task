import { ActionIcon, Card, Group, TextInput } from '@mantine/core';
import { IconLayoutGrid, IconList, IconSearch } from '@tabler/icons-react';
import { useSearchParams } from 'react-router';
import { Selector } from '../selector';

export const SearchPanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleInput(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value === '') {
      params.delete('q');
    } else {
      params.set('q', value);
    }
    params.set('page', '1');
    setSearchParams(params);
  }

  return (
    <Card p={12} radius="md" shadow="xs">
      <Group justify="space-between">
        <TextInput
          placeholder="Найди объявление..."
          rightSection={<IconSearch size={16} />}
          style={{ flex: 1 }}
          variant="filled"
          onChange={(event) => handleInput(event.currentTarget.value)}
          value={searchParams.get('q') || ''}
        />

        <ActionIcon.Group>
          <ActionIcon variant="light" color="gray" size="lg">
            <IconLayoutGrid size={20} color="blue" />
          </ActionIcon>
          <ActionIcon variant="light" color="gray" size="lg">
            <IconList size={20} />
          </ActionIcon>
        </ActionIcon.Group>

        <Selector />
      </Group>
    </Card>
  );
};
