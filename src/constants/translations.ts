import type { CategoryType } from '../types';

export const categoryTranslations: Record<
  CategoryType,
  Record<string, { label: string; possibleValues?: { label: string; value: string }[] }>
> = {
  auto: {
    brand: { label: 'Бренд' },
    model: { label: 'Модель' },
    yearOfManufacture: { label: 'Год выпуска' },
    transmission: {
      label: 'Коробка передач',
      possibleValues: [
        { label: 'Автомат', value: 'automatic' },
        { label: 'Механика', value: 'manual' },
      ],
    },
    mileage: { label: 'Пробег' },
    enginePower: { label: 'Мощность двигателя' },
  },
  real_estate: {
    type: {
      label: 'Тип',
      possibleValues: [
        { value: 'flat', label: 'Квартира' },
        { value: 'house', label: 'Дом' },
        { value: 'room', label: 'Комната' },
      ],
    },
    address: { label: 'Адрес' },
    area: { label: 'Площадь' },
    floor: { label: 'Этаж' },
  },
  electronics: {
    type: {
      label: 'Тип',
      possibleValues: [
        { value: 'phone', label: 'Телефон' },
        { value: 'laptop', label: 'Ноутбук' },
        { value: 'misc', label: 'Микропроцессор' },
      ],
    },
    brand: { label: 'Бренд' },
    model: { label: 'Модель' },
    condition: {
      label: 'Cостояние',
      possibleValues: [
        { value: 'new', label: 'Новые' },
        { value: 'used', label: 'Б/У' },
      ],
    },
    color: { label: 'Цвет' },
  },
};
