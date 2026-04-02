export type Item = {
  id: number;
  category: 'auto' | 'real_estate' | 'electronics';
  title: string;
  price: number;
  // Требуются ли доработки
  needsRevision: boolean;
};

export type ItemsGetOut = {
  // Массив объявлений
  items: Item[];
  // Общее количество записей, подходящих под условия фильтрации
  total: number;
};
