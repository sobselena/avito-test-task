import {
  Alert,
  Button,
  Container,
  Divider,
  Group,
  Image,
  Loader,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconAlertCircle, IconArrowNarrowLeft, IconPencil } from '@tabler/icons-react';
import { Link, useNavigate, useParams } from 'react-router';
import placeholderImg from '../../app/assets/images/placeholder.png';
import { Paths } from '../../constants';
import { useGetAdInfoQuery } from '../../redux/api';
import { getDateFormat } from '../../utils';
import { Characteristics } from './components/characteristics';

export const AdInfoPage = () => {
  const params = useParams();
  const id = Number(params.id);
  const { data, isFetching } = useGetAdInfoQuery(id);
  const navigate = useNavigate();

  return (
    <Container size="xl" py="xl">
      <Stack align="flex-start">
        <Button
          variant="white"
          color="gray"
          p={0}
          leftSection={<IconArrowNarrowLeft size={16} />}
          onClick={() => navigate(Paths.ADS_LIST, { replace: true })}
        >
          Вернуться к списку объявлений
        </Button>
        {isFetching && <Loader />}
      </Stack>

      {!isFetching && data && (
        <>
          <Stack gap={8}>
            <Group justify="space-between">
              <Title order={2} fw={500} style={{ fontSize: 24 }}>
                {data.title}
              </Title>
              <Title order={2} fw={500} style={{ fontSize: 24 }}>
                {data.price.toLocaleString()} ₽
              </Title>
            </Group>

            <Group justify="space-between" align="flex-start">
              <Button component={Link} to={`edit`} rightSection={<IconPencil size={16} />}>
                Редактировать
              </Button>
              <Stack align="end" gap={0}>
                <Text size="sm" c="dimmed">
                  Опубликовано: {getDateFormat(new Date(data.createdAt))}
                </Text>
                {data.updatedAt && (
                  <Text size="sm" c="dimmed">
                    Отредактировано: {getDateFormat(new Date(data.updatedAt))}
                  </Text>
                )}
              </Stack>
            </Group>

            <Divider mt={24} mb={24} />

            <Group gap={40} align="flex-start">
              <Stack w={480}>
                <Stack gap="xl">
                  <Image src={placeholderImg} radius="md" style={{ backgroundColor: '#FAFAFA' }} />
                  <Stack gap="xs">
                    <Title order={3} fw={500} size="lg">
                      Описание
                    </Title>
                    <Text style={{ whiteSpace: 'pre-line' }}>
                      {data.description || 'Отсутствует'}
                    </Text>
                  </Stack>
                </Stack>
              </Stack>

              <Stack w={512}>
                <Stack gap="xs">
                  {data.needsRevision && (
                    <Paper shadow="lg" radius="md" mb={36}>
                      <Alert
                        variant="light"
                        color="orange"
                        title="Требуются доработки"
                        icon={<IconAlertCircle size={18} color="orange" />}
                        c="black"
                      >
                        У объявления не заполнены поля:
                        <ul style={{ marginTop: 8, paddingLeft: 20, marginBlockEnd: 0 }}>
                          <li>Цвет</li>
                          <li>Состояние</li>
                        </ul>
                      </Alert>
                    </Paper>
                  )}
                  <Characteristics params={data.params} />
                </Stack>
              </Stack>
            </Group>
          </Stack>
        </>
      )}
    </Container>
  );
};
