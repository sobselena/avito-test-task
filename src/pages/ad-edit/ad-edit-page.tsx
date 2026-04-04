import { Button, Container, Stack, Title } from '@mantine/core';
import { IconArrowNarrowLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router';

import { ItemForm } from './components/form';

export const AdEditPage = () => {
  const navigate = useNavigate();

  return (
    <Container size={'xl'} py={'xl'}>
      <Stack align="flex-start">
        <Button
          variant="white"
          color="gray"
          p={0}
          leftSection={<IconArrowNarrowLeft size={16} />}
          onClick={() => navigate(-1)}
        >
          Вернуться к списку объявлений
        </Button>
      </Stack>
      <Stack gap={'md'}>
        <Title order={2} style={{ fontSize: 24 }}>
          Редактирование объявления
        </Title>

        <ItemForm />
      </Stack>
    </Container>
  );
};
