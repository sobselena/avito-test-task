import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router';
import { router } from './router';

export const App = () => (
  <MantineProvider
    theme={{
      fontFamily: 'Inter, sans-serif',
    }}
  >
    <RouterProvider router={router} />
  </MantineProvider>
);
