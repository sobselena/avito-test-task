import { Button, Group, Loader, Popover, Stack, Text } from '@mantine/core';
import { IconBulb } from '@tabler/icons-react';
import { useState } from 'react';
import { useGetDescriptionMutation } from '../../../../redux/api/llm-api';
import type { RawFormValues } from '../../../../types';

export const LLMGeneratorButton = ({ values }: { values: RawFormValues }) => {
  const [open, setOpen] = useState(false);
  const [getDescription, { data: descriptionData, isLoading, isError }] =
    useGetDescriptionMutation();

  const handleGetDescription = async () => {
    setOpen(false);
    await getDescription(values);
    setOpen(true);
  };

  const content = descriptionData?.choices?.[0].message.content;
  const hasError = isError || !content;

  return (
    <Popover
      opened={open}
      onClose={() => setOpen(false)}
      width={350}
      position="top"
      withArrow
      shadow="xl"
    >
      <Popover.Target>
        <Button
          variant="light"
          color="yellow"
          leftSection={isLoading ? <Loader size={18} color="yellow" /> : <IconBulb size={18} />}
          onClick={handleGetDescription}
          disabled={isLoading}
        >
          {isLoading ? 'Выполняется запрос' : hasError ? 'Повторить запрос' : 'Придумать описание'}
        </Button>
      </Popover.Target>

      <Popover.Dropdown p="md" bg={hasError ? 'red.0' : undefined} style={{ borderRadius: 'none' }}>
        <Stack gap="xs">
          {hasError ? (
            <Text fw={700} c="red">
              Произошла ошибка при запросе к AI
            </Text>
          ) : (
            <Text fw={700} size="sm">
              Ответ AI:
            </Text>
          )}

          <Text size="sm" c={hasError ? 'black' : 'gray.8'}>
            {content || 'Попробуйте повторить запрос или закройте уведомление'}
          </Text>

          <Group gap="sm" mt="sm">
            <Button
              size="compact-sm"
              color={hasError ? 'red' : 'gray'}
              variant={hasError ? 'light' : 'outline'}
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
