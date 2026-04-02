import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ItemsGetOut } from '../../types';

export const adsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8080/items',
  }),
  endpoints: (build) => ({
    getAds: build.query<ItemsGetOut, void>({
      query: () => ({
        url: `?limit=10`,
      }),
    }),
  }),
});

export const { useGetAdsQuery } = adsApi;
