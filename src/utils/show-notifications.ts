import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import { createElement } from 'react';

export const showNotifications = (type: 'success' | 'error') => {
  if (type === 'success') {
    notifications.show({
      position: 'top-right',
      message: 'Изменения сохранены',
      radius: 'xs',
      withBorder: true,
      color: 'green',
      icon: createElement(IconCheck, { size: 14 }),
      withCloseButton: false,
      styles: {
        root: {
          backgroundColor: '#f4fce3',
          borderColor: '#d8f5a2',
        },
        description: {
          color: '#2b2b2b',
          fontSize: '16px',
          fontWeight: 500,
        },
      },
    });
  } else {
    notifications.show({
      position: 'top-right',
      title: 'Ошибка сохранения',
      radius: 'xs',
      withBorder: true,
      message:
        'При попытке сохранить изменения произошла ошибка. Попробуйте ещё раз или зайдите позже.',
      color: 'red',
      icon: createElement(IconX, { size: 14 }),
      withCloseButton: false,
      styles: {
        root: {
          backgroundColor: '#fff5f5',
          borderColor: '#ffe3e3',
        },
        title: {
          color: '#2b2b2b',
          fontWeight: 700,
        },
        description: {
          color: '#2b2b2b',
          lineHeight: 1.5,
        },
      },
    });
  }
};
