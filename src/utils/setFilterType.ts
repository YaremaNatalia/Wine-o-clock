import { FilterType } from '@/types/types';
import setFilterOptions from './setFilterOptions';
import setFilterWines from './setFilterWines';
import { operations } from '@/tanStackQuery';

const setFilterType = (value: string): FilterType => {
  const data = operations.getAllWinesCache();
  if (!data || !data.products) {
    throw new Error('No product data available');
  }

  if (setFilterOptions.collections.includes(value)) return 'collections';
  if (setFilterOptions.color.includes(value)) return 'color';
  if (setFilterOptions.sweetness.includes(value)) return 'sweetness';

  const countries = setFilterWines.setValueList(data.products, 'countries');
  if (countries.includes(value)) return 'country';

  const regions = setFilterWines.setValueList(data.products, 'regions');
  if (regions.includes(value)) return 'region';

  throw new Error('Unknown filter type');
};
export default setFilterType;
