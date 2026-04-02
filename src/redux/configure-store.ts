import { configureStore } from '@reduxjs/toolkit';
import { adsApi } from './api';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [adsApi.reducerPath]: adsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(adsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
