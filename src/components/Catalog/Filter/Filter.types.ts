export interface IFilter {
  onSelectFilterValue: (value: string) => void;
  toShameValue?: string;
  setToShameValue?: (value: string) => void;
  filtersValue?: string[];
}
