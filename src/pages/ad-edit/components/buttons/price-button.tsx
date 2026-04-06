import { useGetMarketPriceMutation } from '../../../../redux/api/llm-api';
import type { RawFormValues } from '../../../../types';
import { LLMGeneratorButton } from '../llm-generator-button';

export const PriceButton = ({
  values,
  onSave,
}: {
  values: RawFormValues;
  onSave?: (value?: string) => void;
}) => {
  const [getDescription, { data, isLoading, isError }] = useGetMarketPriceMutation();

  return (
    <LLMGeneratorButton
      values={values}
      descriptionData={data}
      isLoading={isLoading}
      isError={isError}
      label="Узнать рыночную цену"
      onSave={onSave}
      getData={(valuesData) => getDescription(valuesData).unwrap()}
    />
  );
};
