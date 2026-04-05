export type FieldsProps = Partial<{
  label: string;
  data: string[];
  value?: string;
  defaultValue?: string;
  fw?: number;
  necessary?: boolean;
  onChange?: (value: string) => void;
  allowDeselect: boolean;
}>;
