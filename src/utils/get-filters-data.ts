import { PAGINATION_LIMIT } from '../constants';
import type { AdsFilters, SortDirectionType } from '../types';

export function getFiltersData(searchParams: URLSearchParams): AdsFilters {
  const page = Number(searchParams.get('page')) || 1;

  const categories = searchParams.getAll('category').join(',');

  return {
    limit: PAGINATION_LIMIT,
    skip: (page - 1) * PAGINATION_LIMIT,
    q: searchParams.get('q') || '',
    categories,
    needsRevision: searchParams.get('needsRevision') === 'true',
    sortDirection: (searchParams.get('sortDirection') as SortDirectionType) || 'asc',
  };
}
