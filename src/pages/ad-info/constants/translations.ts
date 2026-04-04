import type { CategoryType } from '../../../types';

export const categoryTranslations: Record<CategoryType, Record<string, string>> = {
  auto: {
    brand: 'Бренд',
    model: 'Модель',
    yearOfManufacture: 'Год выпуска',
    transmission: 'Коробка передач',
    mileage: 'Пробег',
    enginePower: 'Мощность двигателя',
  },
  real_estate: {
    type: 'Тип',
    address: 'Адрес',
    area: 'Площадь',
    floor: 'Этаж',
  },
  electronics: {
    type: 'Тип',
    brand: 'Бренд',
    model: 'Модель',
    condition: 'Состояние',
    color: 'Цвет',
  },
};
