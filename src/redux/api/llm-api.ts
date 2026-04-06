import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RawFormValues } from '../../types';
import { descriptionPrompt, pricePrompt } from '../utils';
import { LLM_API_KEY } from '../constants';
import type { LLMOut } from '../../types/llm-out';

export const llmApi = createApi({
  reducerPath: 'llm',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://openrouter.ai/api/v1/chat/completions',
  }),
  endpoints: (build) => ({
    getDescription: build.mutation<LLMOut, RawFormValues>({
      query: (rawFormValues) => ({
        method: 'POST',
        url: '',
        headers: {
          Authorization: `Bearer ${LLM_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: {
          model: 'qwen/qwen3.6-plus:free',
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

    getMarketPrice: build.mutation<string, RawFormValues>({
      query: (rawFormValues) => ({
        method: 'POST',
        url: '',
        headers: {
          Authorization: `Bearer ${LLM_API_KEY}`,
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
