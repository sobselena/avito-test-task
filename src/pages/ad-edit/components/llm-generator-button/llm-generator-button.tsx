import { Button, Group, Loader, Popover, Stack, Text } from '@mantine/core';
import { IconBulb } from '@tabler/icons-react';
import { useState } from 'react';
import { useGetDescriptionMutation } from '../../../../redux/api/llm-api';
import type { RawFormValues } from '../../../../types';

export const LLMGeneratorButton = ({ values }: { values: RawFormValues }) => {
  const [open, setOpen] = useState(false);
  const [getDescription, { data: descriptionData, isLoading }] = useGetDescriptionMutation();
  console.log(descriptionData);
  async function handleGetDescription() {
    await getDescription(values);
    setOpen(true);
  }
  return (
    <Popover
      opened={open}
      onClose={() => setOpen(false)}
      width={350}
      position="top"
      withArrow
      shadow="xl"
      offset={10}
    >
      <Popover.Target>
        <Button
          variant="light"
          w={'auto'}
          color="yellow"
          fw={500}
          mb={'md'}
          leftSection={isLoading ? <Loader size={18} color="yellow" /> : <IconBulb size={18} />}
          onClick={handleGetDescription}
          disabled={isLoading}
        >
          {isLoading
            ? 'Выполняется запрос'
            : values.description
              ? 'Улучшить описание'
              : 'Придумать описание'}
        </Button>
      </Popover.Target>

      <Popover.Dropdown p="md" style={{ borderRadius: 0 }}>
        <Stack gap="xs">
          <Text fw={700} size="sm">
            Ответ AI:
          </Text>

          <Text size="sm" c="gray.8">
            {descriptionData?.choices[0].message.content}
          </Text>

          <Group gap="sm" mt="sm">
            <Button
              size="compact-sm"
              radius={'sm'}
              variant="outline"
              color="gray"
              onClick={() => setOpen(false)}
            >
              Закрыть
            </Button>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};
