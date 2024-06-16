export interface IFilter {
  onSelectFilterValue: (value: string) => void;
  removeSelectFilterValue: (value: string) => void;
  toShameValue?: string;
  setToShameValue?: (value: string) => void;
  filtersValue?: string[];
  priceValues: [number, number];
  setPriceValues: (value: [number, number]) => void;
}
