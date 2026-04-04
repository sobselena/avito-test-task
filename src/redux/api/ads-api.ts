import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { AdsFilters, ItemsGetOut, ItemUpdateOut } from '../../types';

export const adsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8080/items',
  }),
  endpoints: (build) => ({
    getAds: build.query<ItemsGetOut, AdsFilters>({
      query: (filters) => {
        {
          return {
            url: '',
            params: filters,
          };
        }
      },
    }),

    getAdInfo: build.query<ItemUpdateOut, number>({
      query: (id) => ({
        url: `${id}`,
      }),
    }),
  }),
});

export const { useGetAdsQuery, useGetAdInfoQuery } = adsApi;
