import { Box, Loader, SimpleGrid } from '@mantine/core';
import type { Item } from '../../../../types';
import { AdCard } from '../ad-card';

type Props = {
  ads: Item[];
  isLoading: boolean;
};
export const CardsContainer = ({ ads, isLoading }: Props) => (
  <>
    {isLoading && <Loader />}
    {!isLoading && ads.length === 0 && <Box c="red">Ничего не найдено</Box>}
    {!isLoading && (
      <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, lg: 5 }} spacing="md" verticalSpacing="md">
        {ads.length > 0 && ads.map((adInfo) => <AdCard key={adInfo.id} ad={adInfo} />)}
      </SimpleGrid>
    )}
  </>
);
