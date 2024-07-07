import { Dispatch, SetStateAction } from 'react';
import { UseFormRegister, UseFormReset } from 'react-hook-form';
export interface IPriceValues {
  minPrice?: number;
  maxPrice?: number;
}
export interface IProps {
  register: UseFormRegister<IPriceValues>;
  reset: UseFormReset<IPriceValues>;
  priceValues: [number, number];
  setPriceValues: Dispatch<SetStateAction<[number, number]>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  minPrice: number;
  maxPrice: number;
}

export interface StyledTrackProps {
  index: number;
  theme?: {
    colors: {
      decorativeLightGrey: string;
      primaryBurgundy: string;
    };
  };
}
