import { useForm } from '@mantine/form';
import type { CategoryType, ItemUpdateOut, ParamsType, RawFormValues } from '../../../types';

export const useEditForm = ({
  data,
  category,
}: {
  data: ItemUpdateOut;
  category: CategoryType;
}) => {
  const form = useForm<RawFormValues>({
    initialValues: {
      title: data?.title ?? '',
      price: data?.price?.toString() ?? '',
      description: data?.description ?? '',
      category,
      params: data?.params ? { ...data.params } : ({} as ParamsType),
    },

    validate: {
      title: (value) => (value.trim() === '' ? 'Название должно быть заполнено' : null),

      price: (value) => (value.trim() === '' ? 'Цена должна быть заполнена' : null),
    },

    validateInputOnChange: true,
  });

  return [form];
};
