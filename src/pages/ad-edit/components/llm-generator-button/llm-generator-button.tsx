import { Button, Group, Loader, Popover, Stack, Text } from '@mantine/core';
import { IconBulb, IconRotateClockwise } from '@tabler/icons-react';
import { useState } from 'react';
import type { RawFormValues } from '../../../../types';
import type { LLMOut } from '../../../../types/llm-out';

export const LLMGeneratorButton = ({
  values,
  descriptionData,
  isLoading,
  isError,
  getData,
  onSave,
  label,
}: {
  values: RawFormValues;
  descriptionData?: LLMOut;
  isLoading: boolean;
  isError: boolean;
  onSave?: (value?: string) => void;
  label: string;
  getData: (values: RawFormValues) => Promise<LLMOut>;
}) => {
  const [open, setOpen] = useState(false);
  const [isRepeated, setIsRepeated] = useState(false);
  const handleGetDescription = async () => {
    try {
      setOpen(false);
      await getData(values);
    } catch {
      console.warn('Something went wrong');
    } finally {
      setOpen(true);
      setIsRepeated(true);
    }
  };

  const content = descriptionData?.choices?.[0].message.content;
  const hasError = isError || (!content && isRepeated);
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
          leftSection={
            isLoading ? (
              <Loader size={18} color="yellow" />
            ) : isRepeated ? (
              <IconRotateClockwise size={18} />
            ) : (
              <IconBulb size={18} />
            )
          }
          onClick={handleGetDescription}
          disabled={isLoading}
        >
          {isLoading ? 'Выполняется запрос' : isRepeated ? 'Повторить запрос' : label}
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
            {onSave && !hasError && (
              <Button
                size="compact-sm"
                variant={'filled'}
                onClick={() => {
                  setOpen(false);
                  onSave(content);
                }}
              >
                Применить
              </Button>
            )}
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
