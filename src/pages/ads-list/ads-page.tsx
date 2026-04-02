import { Box, Container, Flex, Pagination, Stack, Text, Title } from '@mantine/core';

import { SearchPanel } from './components/search-panel';
import { Filters } from './components/filters';
import { CardsContainer } from './components/cards-container';
import { useGetAdsQuery } from '../../redux/api';
export const AdsPage = () => {
  const { data, isLoading } = useGetAdsQuery();

  return (
    <Container size="xl" py="xl">
      <Stack gap="md">
        <Box>
          <Title order={2} fw={500}>
            Мои объявления
          </Title>
          <Text c="dimmed" size="md">
            {data?.total ?? 0} объявления
          </Text>
        </Box>

        <SearchPanel />

        <Flex align="flex-start" gap="md">
          <Box style={{ maxWidth: 256, flex: 1 }}>
            <Filters />
          </Box>
          <Stack>
            <Box style={{ flex: 1 }}>
              <CardsContainer ads={data?.items ?? []} isLoading={isLoading} />
            </Box>
            <Pagination
              total={Math.ceil(data?.total || 0) / 10}
              variant="outline"
              boundaries={0}
              hideWithOnePage={true}
              siblings={2}
            />
          </Stack>
        </Flex>
      </Stack>
    </Container>
  );
};
