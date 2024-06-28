import { IWine } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';

export interface IFilter {
  onSelectFilterValue: (value: string) => void;
  removeSelectFilterValue: (value: string) => void;
  toShameValue?: string;
  handleToShameChange: (value: string) => void;
  filtersValue?: string[];
  priceValues: [number, number];
  setPriceValues: Dispatch<SetStateAction<[number, number]>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  searchedWines?: IWine[];
}

export interface IFormValues {
  collections?: string[];
  color?: string[];
  sweetness?: string[];
  country?: string[];
  region?: string[];
  minPrice?: number;
  maxPrice?: number;
}
