import { CATEGORY_OPTIONS } from '../../../constants';
import type { CategoryType } from '../../../types';

export const getCategory = (category: CategoryType | undefined) =>
  category || CATEGORY_OPTIONS[0].value;

export const getCategoryDefaultValue = (category: CategoryType | undefined) =>
  CATEGORY_OPTIONS.find((categoryInfo) => categoryInfo.value === category)?.label ??
  CATEGORY_OPTIONS[0].label;

export const getCategoryByName = (categoryName: string) =>
  CATEGORY_OPTIONS.find((categoryInfo) => categoryInfo.label === categoryName)?.value;
