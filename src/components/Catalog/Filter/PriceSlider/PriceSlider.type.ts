import { UseFormRegister, UseFormReset } from 'react-hook-form';
export interface IPriceValues {
  minPrice?: number;
  maxPrice?: number;
}
export interface IProps {
  register: UseFormRegister<IPriceValues>;
  reset: UseFormReset<IPriceValues>;
  priceValues: [number, number];
  setPriceValues: (value: [number, number]) => void;
  setCurrentPage: (value: number) => void;
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
