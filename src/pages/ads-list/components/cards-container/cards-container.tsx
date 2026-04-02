import { Grid, Loader } from '@mantine/core';
import type { Item } from '../../../../types';
import { AdCard } from '../ad-card';

type Props = {
  ads: Item[];
  isLoading: boolean;
};
export const CardsContainer = ({ ads, isLoading }: Props) => {
  console.log(ads);
  return (
    <>
      {isLoading && <Loader />}
      <Grid justify="space-between" gap={14}>
        {ads.length > 0 &&
          ads.map((adInfo) => (
            <Grid.Col key={adInfo.id} span={{ base: 12, md: 2.4, sm: 6 }}>
              <AdCard ad={adInfo} />
            </Grid.Col>
          ))}
      </Grid>
    </>
  );
};
