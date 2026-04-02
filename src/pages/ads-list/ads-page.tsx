import { Box, Container, Grid, Stack, Text, Title } from '@mantine/core';

import { SearchPanel } from './components/search-panel';
import { Filters } from './components/filters';
export const AdsPage = () => (
  <Container size="xl" py="xl">
    <Stack gap="md">
      <Box>
        <Title order={2} fw={500}>
          Мои объявления
        </Title>
        <Text c="dimmed" size="md">
          42 объявления
        </Text>
      </Box>

      <SearchPanel />

      <Grid align="flex-start">
        <Grid.Col span="content" style={{ width: 256 }}>
          <Filters />
        </Grid.Col>
        <Grid.Col span={9} style={{ flex: 1 }}></Grid.Col>
      </Grid>
    </Stack>
  </Container>
);
