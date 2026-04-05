import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RawFormValues } from '../../types';
import { descriptionPrompt, pricePrompt } from '../utils';

export const llmApi = createApi({
  reducerPath: 'llm',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://openrouter.ai/api/v1/chat/completions',
  }),
  endpoints: (build) => ({
    getDescription: build.mutation({
      query: (rawFormValues: RawFormValues) => ({
        method: 'POST',
        url: '',
        headers: {
          Authorization: 'Bearer <OPENROUTER_API_KEY>',
          'Content-Type': 'application/json',
        },
        body: {
          model: 'google/gemma-3-4b-it:free',
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: descriptionPrompt(rawFormValues),
                },
              ],
            },
          ],
        },
      }),
    }),

    getMarketPrice: build.mutation({
      query: (rawFormValues: RawFormValues) => ({
        method: 'POST',
        url: '',
        headers: {
          Authorization: 'Bearer <OPENROUTER_API_KEY>',
          'Content-Type': 'application/json',
        },
        body: {
          model: 'google/gemma-3-4b-it:free',
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: pricePrompt(rawFormValues),
                },
              ],
            },
          ],
        },
      }),
    }),
  }),
});

export const { useGetDescriptionMutation, useGetMarketPriceMutation } = llmApi;
