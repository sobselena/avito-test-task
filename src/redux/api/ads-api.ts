import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ActualItemUpdateIn, AdsFilters, ItemsGetOut, ItemUpdateOut } from '../../types';
import { showNotifications } from '../../utils';
import { BASIC_PATH } from '../../constants';

export const adsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASIC_PATH,
  }),
  tagTypes: ['Item', 'Items'],
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
      providesTags: (result) => {
        if (!result) return ['Items'];
        return ['Items', ...result.items.map((item) => ({ type: 'Item' as const, id: item.id }))];
      },
    }),

    getAdInfo: build.query<ItemUpdateOut, number>({
      query: (id) => ({
        url: `${id}`,
      }),
      providesTags: (_result, _error, id) => [{ type: 'Item', id }],
    }),
    editAdInfo: build.mutation<undefined, { id: number; body: ActualItemUpdateIn }>({
      query: ({ id, body }) => ({
        url: `${id}`,
        body,
        method: 'PUT',
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Item', id }, 'Items'],
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          showNotifications('success');
        } catch {
          showNotifications('error');
        }
      },
    }),
  }),
});

export const { useGetAdsQuery, useGetAdInfoQuery, useEditAdInfoMutation } = adsApi;
