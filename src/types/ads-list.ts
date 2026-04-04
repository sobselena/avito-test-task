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

export type AutoItemParams = {
  brand?: string;
  model?: string;
  yearOfManufacture?: number;
  transmission?: 'automatic' | 'manual';
  mileage?: number;
  enginePower?: number;
};

export type RealEstateItemParams = {
  type?: 'flat' | 'house' | 'room';
  address?: string;
  area?: number;
  floor?: number;
};

export type ElectronicsItemParams = {
  type?: 'phone' | 'laptop' | 'misc';
  brand?: string;
  model?: string;
  condition?: 'new' | 'used';
  color?: string;
};

export type ParamsType = AutoItemParams | RealEstateItemParams | ElectronicsItemParams;

export type ItemUpdateIn = {
  category: 'auto' | 'real_estate' | 'electronics';
  title: string;
  description?: string;
  price: number;
  params: ParamsType;
};

export type ItemUpdateOut = ItemUpdateIn & {
  id: number;
  createdAt: Date;
  updatedAt?: Date;
  needsRevision: boolean;
};
