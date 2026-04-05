import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { RouterProvider } from 'react-router';
import { router } from './router';

export const App = () => (
  <MantineProvider
    theme={{
      fontFamily: 'Inter, sans-serif',
    }}
  >
    <Notifications />
    <RouterProvider router={router} />
  </MantineProvider>
);
