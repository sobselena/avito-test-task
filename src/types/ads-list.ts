export type CategoryType = 'auto' | 'real_estate' | 'electronics';

export type Item = {
  id: number;
  category: CategoryType;
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

export type SortColumnType = 'title' | 'createdAt' | 'price';
export type SortDirectionType = 'asc' | 'desc';

export type AdsFilters = Partial<{
  limit: number;
  skip: number;
  q: string;
  needsRevision: boolean;
  categories: string;
  sortColumn: SortColumnType;
  sortDirection: SortDirectionType;
}>;
