import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ItemsGetOut } from '../../types';
import { PAGINATION_LIMIT } from '../../constants/pagination';

export const adsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8080/items',
  }),
  endpoints: (build) => ({
    getAds: build.query<ItemsGetOut, number | undefined>({
      query: (page = 1) => ({
        url: `?limit=${PAGINATION_LIMIT}&skip=${(page - 1) * PAGINATION_LIMIT}`,
      }),
    }),
  }),
});

export const { useGetAdsQuery } = adsApi;
