import { FC } from 'react';
import FilterDropdown from '../FilterDropdown';
import { setFilterOptions } from '@/utils';
import { IProps } from './ToShame.types';

const ToShame: FC<IProps> = ({ setToShameValue, toShameValue }) => {
  return (
    <FilterDropdown
      options={setFilterOptions.toShameOptions}
      onChange={setToShameValue}
      title='To shame'
      value={toShameValue}
    />
  );
};

export default ToShame;
