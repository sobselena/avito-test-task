import { useGetDescriptionMutation } from '../../../../redux/api/llm-api';
import type { RawFormValues } from '../../../../types';
import { LLMGeneratorButton } from '../llm-generator-button';

export const DescriptionButton = ({
  values,
  onSave,
}: {
  values: RawFormValues;
  onSave?: (value?: string) => void;
}) => {
  const [getDescription, { data, isLoading, isError }] = useGetDescriptionMutation();

  return (
    <LLMGeneratorButton
      values={values}
      descriptionData={data}
      isLoading={isLoading}
      isError={isError}
      label="Придумать описание"
      onSave={onSave}
      getData={(valuesData) => getDescription(valuesData).unwrap()}
    />
  );
};
