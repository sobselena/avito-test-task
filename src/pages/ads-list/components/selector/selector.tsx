import { Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { selectors } from '../../constants/selectors';
import { useSearchParams } from 'react-router';

export const Selector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortColumn = searchParams.get('sortColumn');
  const sortDirection = searchParams.get('sortDirection');
  const currentSelector = selectors.find(
    ({ value }) => value && value.column === sortColumn && value.direction === sortDirection
  );

  function handleSelect(value: string | null) {
    const params = new URLSearchParams(searchParams);
    const selector = selectors.find(({ label }) => value === label);

    if (selector?.value) {
      params.set('sortColumn', selector.value.column);
      params.set('sortDirection', selector.value.direction);
    } else {
      params.delete('sortColumn');
      params.delete('sortDirection');
    }

    setSearchParams(params);
  }
  return (
    <Select
      variant="default"
      placeholder="Pick value"
      data={selectors.map((selector) => selector.label)}
      value={currentSelector?.label || 'Без сортировки'}
      onChange={(value) => handleSelect(value)}
      rightSection={<IconChevronDown size={18} />}
      comboboxProps={{ width: 240 }}
      allowDeselect={false}
      styles={{
        input: {
          border: '5px solid var(--mantine-color-gray-light)',
        },
      }}
    />
  );
};
