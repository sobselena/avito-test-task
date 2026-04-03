import {
  Button,
  Card,
  Checkbox,
  Collapse,
  Divider,
  Group,
  Stack,
  Switch,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useState } from 'react';
import { useSearchParams } from 'react-router';
import type { CategoryType } from '../../../../types';
import { CATEGORY_OPTIONS } from '../../../../constants';

export const Filters = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategories = searchParams.getAll('category');

  function handleClick(type: CategoryType) {
    const params = new URLSearchParams(searchParams);

    const categories = params.getAll('category');
    const updated = new Set(categories);

    if (updated.has(type)) {
      updated.delete(type);
    } else {
      updated.add(type);
    }

    params.delete('category');

    for (const category of updated) {
      params.append('category', category);
    }
    params.set('page', '1');
    setSearchParams(params);
  }

  function handleSwitch(value: boolean) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('needsRevision', `${value}`);
    } else {
      params.delete('needsRevision');
    }
    params.set('page', '1');

    setSearchParams(params);
  }

  function handleDelete() {
    const params = new URLSearchParams();
    params.set('page', '1');
    setSearchParams(params);
  }

  return (
    <Stack gap={10}>
      <Card radius="md" p="lg" shadow="xs">
        <Stack gap="sm">
          <Text fw={700} size="lg">
            Фильтры
          </Text>

          <Stack gap={12} mb={8}>
            <UnstyledButton onClick={() => setIsOpen((prev) => !prev)}>
              <Group justify="space-between">
                <Text size="md">Категория</Text>
                {isOpen ? <IconChevronUp size={18} /> : <IconChevronDown size={18} />}
              </Group>
            </UnstyledButton>

            <Collapse expanded={isOpen}>
              <Stack gap={8} pl={4}>
                {CATEGORY_OPTIONS.map((categoryInfo) => (
                  <Checkbox
                    key={categoryInfo.value}
                    label={categoryInfo.label}
                    size="sm"
                    checked={currentCategories.includes(categoryInfo.value)}
                    onChange={() => handleClick(categoryInfo.value)}
                  />
                ))}
              </Stack>
            </Collapse>
          </Stack>

          <Divider />

          <Group justify="space-between" align="center" wrap="nowrap">
            <Text size="sm" fw={700}>
              Только требующие доработок
            </Text>
            <Switch
              size="md"
              withThumbIndicator={false}
              checked={searchParams.get('needsRevision') === 'true'}
              onChange={(event) => handleSwitch(event.currentTarget.checked)}
            />
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
        onClick={handleDelete}
      >
        Сбросить фильтры
      </Button>
    </Stack>
  );
};
