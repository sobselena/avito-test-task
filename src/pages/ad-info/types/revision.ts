import type { CategoryType, ParamsType } from '../../../types';

export type RevisionType = {
  category: CategoryType;
  params: ParamsType;
  description?: string;
};
