import { Badge, Card, Group, Image, Stack, Text } from '@mantine/core';
import placeholderImg from '../../../../app/assets/images/placeholder.png';
import type { Item } from '../../../../types';

type Props = {
  ad: Item;
};

export const AdCard = ({ ad }: Props) => (
  <Card
    shadow="xs"
    radius="md"
    padding="md"
    h={280}
    display="flex"
    style={{ flexDirection: 'column' }}
  >
    <Card.Section>
      <Image src={placeholderImg} height={120} alt="Ad image" fit="cover" />
    </Card.Section>

    <Stack gap="xs" style={{ flex: 1 }} mt="md">
      <Group justify="flex-start">
        <Badge variant="default" color="gray" radius="md" tt="capitalize" size="md" fw={500}>
          {ad.category}
        </Badge>
      </Group>

      <Stack gap={4} style={{ flex: 1 }}>
        <Text fw={500} size="sm" tt="capitalize">
          {ad.title}
        </Text>
        <Text fw={500} size="sm" c="dimmed">
          {ad.price} ₽
        </Text>
      </Stack>

      {ad.needsRevision && (
        <Badge variant="light" color="yellow" radius="md" tt="capitalize" size="md" fw={500}>
          ● Требует доработок
        </Badge>
      )}
    </Stack>
  </Card>
);
