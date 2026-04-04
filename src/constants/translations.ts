import type { CategoryType } from '../types';

export const categoryTranslations: Record<
  CategoryType,
  Record<string, { name: string; possibleValues?: { name: string; value: string }[] }>
> = {
  auto: {
    brand: { name: 'Бренд' },
    model: { name: 'Модель' },
    yearOfManufacture: { name: 'Год выпуска' },
    transmission: {
      name: 'Коробка передач',
      possibleValues: [
        { name: 'Автомат', value: 'automatic' },
        { name: 'Механика', value: 'manual' },
      ],
    },
    mileage: { name: 'Пробег' },
    enginePower: { name: 'Мощность двигателя' },
  },
  real_estate: {
    type: {
      name: 'Тип',
      possibleValues: [
        { value: 'flat', name: 'Квартира' },
        { value: 'house', name: 'Дом' },
        { value: 'room', name: 'Комната' },
      ],
    },
    address: { name: 'Адрес' },
    area: { name: 'Площадь' },
    floor: { name: 'Этаж' },
  },
  electronics: {
    type: {
      name: 'Тип',
      possibleValues: [
        { value: 'phone', name: 'Телефон' },
        { value: 'laptop', name: 'Ноутбук' },
        { value: 'misc', name: 'Микропроцессор' },
      ],
    },
    brand: { name: 'Бренд' },
    model: { name: 'Модель' },
    condition: {
      name: 'Cостояние',
      possibleValues: [
        { value: 'new', name: 'Новые' },
        { value: 'used', name: 'Б/У' },
      ],
    },
    color: { name: 'Цвет' },
  },
};
