import { Box, Container, Flex, Pagination, Stack, Text, Title } from '@mantine/core';

import { SearchPanel } from './components/search-panel';
import { Filters } from './components/filters';
import { CardsContainer } from './components/cards-container';
import { useGetAdsQuery } from '../../redux/api';
import { useSearchParams } from 'react-router';
export const AdsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page'));
  const { data, isLoading } = useGetAdsQuery(page);
  function handleChange(value: number) {
    setSearchParams({ page: value.toString() });
  }
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
              onChange={(value) => handleChange(value)}
              value={page || 1}
            />
          </Stack>
        </Flex>
      </Stack>
    </Container>
  );
};
