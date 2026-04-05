import { configureStore } from '@reduxjs/toolkit';
import { adsApi } from './api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { llmApi } from './api/llm-api';

export const store = configureStore({
  reducer: {
    [adsApi.reducerPath]: adsApi.reducer,
    [llmApi.reducerPath]: llmApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adsApi.middleware, llmApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
