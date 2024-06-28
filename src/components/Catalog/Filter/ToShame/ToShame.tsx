import { FC } from 'react';
import FilterDropdown from '../FilterDropdown';
import { setFilterOptions } from '@/utils';
import { IProps } from './ToShame.types';

const ToShame: FC<IProps> = ({ handleToShameChange, toShameValue }) => {
  return (
    <FilterDropdown
      options={setFilterOptions.toShameOptions}
      onChange={handleToShameChange}
      title='To shame'
      value={toShameValue}
    />
  );
};

export default ToShame;
