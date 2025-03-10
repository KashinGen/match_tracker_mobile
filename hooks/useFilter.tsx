import { useState } from 'react';
import { SelectOption } from '../types';

const options: SelectOption[] = [
  {
    value: 'All',
    label: 'Все статусы',
  },
  {
    value: 'Ongoing',
    label: 'Ongoing',
  },
  {
    value: 'Scheduled',
    label: 'Scheduled',
  },
  {
    value: 'Finished',
    label: 'Finished',
  },
];


export const useFilter = () => {
  const [selectedOption, setSelectedOption] = useState<SelectOption>(options[0]);
  return {
    selectedOption,
    setSelectedOption,
    options,
  };
};
