import { Stack, Table, Title } from '@mantine/core';
import type { ItemUpdateOut } from '../../../../types';
import { translations } from '../../constants';

export const Characteristics = ({ params }: Pick<ItemUpdateOut, 'params'>) => {
  if (!params) return null;

  const rows = Object.entries(params).map(([key, value]) => (
    <Table.Tr key={key}>
      <Table.Td c="dimmed" w={150} p={2} fw={500}>
        {translations[key]}
      </Table.Td>
      <Table.Td p={2}>{value?.toString() || '—'}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack gap="xs">
      <Title order={3} fw={500} size="lg">
        Характеристики
      </Title>
      <Table withRowBorders={false} verticalSpacing="xs">
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Stack>
  );
};
