import type { SortColumnType, SortDirectionType } from '../../../types';

export type SelectorsType = {
  label: string;
  value: null | {
    column: SortColumnType;
    direction: SortDirectionType;
  };
};
