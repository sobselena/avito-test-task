import { categoryTranslations } from '../../../constants';
import type { CategoryType, ParamsType } from '../../../types';

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
