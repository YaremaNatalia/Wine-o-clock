export interface IProps {
  filtersValue: string[];
  handleRemoveFilterValue: (value: string) => void;
  handleRemoveAllFiltersValues: () => void;
  priceValues: [number, number];
  setPriceValues: (value: [number, number]) => void;
}
