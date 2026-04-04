import type { CategoryType, ParamsType } from '../../../types';
import { categoryTranslations } from '../constants';

export const getUnfilledCharacteristics = ({
  category,
  params,
}: {
  category: CategoryType;
  params: ParamsType;
}) => {
  const translations = categoryTranslations[category];
  return (Object.keys(translations) as (keyof ParamsType)[]).filter(
    (translation) => !params[translation]
  );
};
