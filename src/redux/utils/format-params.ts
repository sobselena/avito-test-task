import { categoryTranslations } from '../../constants';
import type { CategoryType, ParamsType } from '../../types';

export const formatParams = (category: CategoryType, params: ParamsType | undefined): string => {
  if (!params) return 'нет';

  const config = categoryTranslations[category];

  return Object.entries(params)
    .filter(([key, value]) => key !== 'category' && value !== undefined && value !== '')
    .map(([key, value]) => {
      const fieldConfig = config?.[key];

      if (!fieldConfig) {
        return `${key}: ${value}`;
      }

      let formattedValue = value;

      if (fieldConfig.possibleValues) {
        const found = fieldConfig.possibleValues.find((option) => option.value === value);

        if (found) {
          formattedValue = found.label;
        }
      }

      return `${fieldConfig.label}: ${formattedValue}`;
    })
    .join('\n');
};
