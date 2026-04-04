import { CATEGORY_OPTIONS } from '../../../constants';
import type { CategoryType, ItemUpdateOut } from '../../../types';

export const getCategory = (data: ItemUpdateOut | undefined) =>
  data?.category || CATEGORY_OPTIONS[0].value;

export const getCategoryDefaultValue = (category: CategoryType | undefined) =>
  CATEGORY_OPTIONS.find((categoryInfo) => categoryInfo.value === category)?.label ??
  CATEGORY_OPTIONS[0].label;
