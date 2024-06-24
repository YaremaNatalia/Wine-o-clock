import { IWine } from "@/types/types";

export interface IFilter {
  onSelectFilterValue: (value: string) => void;
  removeSelectFilterValue: (value: string) => void;
  toShameValue?: string;
  setToShameValue: (value: string) => void;
  filtersValue?: string[];
  priceValues: [number, number];
  setPriceValues: (value: [number, number]) => void;
  setCurrentPage: (value: number) => void;
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
