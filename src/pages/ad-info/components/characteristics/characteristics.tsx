import { Stack, Table, Text, Title } from '@mantine/core';
import type { RevisionType } from '../../types';
import { categoryTranslations } from '../../../../constants';

export const Characteristics = ({ category, params }: RevisionType) => {
  if (!params) return null;

  const rows = Object.entries(params).map(([key, value]) => (
    <Table.Tr key={key}>
      <Table.Td c="dimmed" w={150} p={2} fw={500}>
        {categoryTranslations[category][key].label}
      </Table.Td>
      <Table.Td p={2}>{value || '—'}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack gap="xs">
      <Title order={3} fw={500} size="lg">
        Характеристики
      </Title>
      {rows.length > 0 ? (
        <Table withRowBorders={false} verticalSpacing="xs">
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      ) : (
        <Text size="md" c={'red'}>
          Отсутствуют
        </Text>
      )}
    </Stack>
  );
};
