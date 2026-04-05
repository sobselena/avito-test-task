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
  categories: CategoryType[];
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

export type ParamsType =
  | ({ category: 'auto' } & AutoItemParams)
  | ({ category: 'real_estate' } & RealEstateItemParams)
  | ({ category: 'electronics' } & ElectronicsItemParams);

export type ItemUpdateIn = {
  title: string;
  price: number;
  description?: string;
  category: CategoryType;
  params: ParamsType;
};

export type ActualItemUpdateIn = Omit<ItemUpdateIn, 'params'> & {
  params: AutoItemParams | RealEstateItemParams | ElectronicsItemParams;
};
export type ItemUpdateOut = ItemUpdateIn & {
  id: number;
  createdAt: Date;
  updatedAt?: Date;
  needsRevision: boolean;
};

export type RawFormValues = {
  title: string;
  price: string;
  description: string;
  category: string;
  params: ParamsType;
};
