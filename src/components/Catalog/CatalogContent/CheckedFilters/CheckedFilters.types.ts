import { FilterType } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';

export interface IProps {
  filtersValue: string[];
  handleRemoveFilterValue: (value: string, filterType?: FilterType) => void;
  handleRemoveAllFiltersValues: () => void;
  priceValues: [number, number];
  setPriceValues: Dispatch<SetStateAction<[number, number]>>;
  minPrice: number;
  maxPrice: number;
}
