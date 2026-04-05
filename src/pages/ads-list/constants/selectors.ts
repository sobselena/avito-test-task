import type { SelectorsType } from '../types';

export const selectors: SelectorsType[] = [
  {
    label: 'Без сортировки',
    value: null,
  },
  {
    label: 'По цене (сначала дешевые)',
    value: { column: 'price', direction: 'asc' },
  },
  {
    label: 'По цене (сначала дорогие)',
    value: { column: 'price', direction: 'desc' },
  },
  {
    label: 'По новизне (сначала новые)',
    value: { column: 'createdAt', direction: 'asc' },
  },
  {
    label: 'По новизне (сначала старые)',
    value: { column: 'createdAt', direction: 'desc' },
  },
  {
    label: 'По названию (в алфавитном порядке)',
    value: { column: 'title', direction: 'asc' },
  },
  {
    label: 'По названию (в обратном алфавитном порядке)',
    value: { column: 'title', direction: 'desc' },
  },
];
