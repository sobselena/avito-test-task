export type ItemsGetOut = {
  // Массив объявлений
  items: {
    category: 'auto' | 'real_estate' | 'electronics';
    title: string;
    price: number;
    // Требуются ли доработки
    needsRevision: boolean;
  }[];
  // Общее количество записей, подходящих под условия фильтрации
  total: number;
};
