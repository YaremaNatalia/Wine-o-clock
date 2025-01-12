import { FC } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { IProps } from './CheckedFilters.types';
import { CheckedFiltersContainer } from './CheckedFilters.styled';
import { setFilterType } from '@/utils';

const CheckedFilters: FC<IProps> = ({
  filtersValue,
  handleRemoveFilterValue,
  handleRemoveAllFiltersValues,
  priceValues,
  setPriceValues,
  minPrice,
  maxPrice,
}) => {
  return (
    <CheckedFiltersContainer>
      {filtersValue &&
        filtersValue.map((value, index) => {
          const filterType = setFilterType(value);

          return (
            <button
              key={index}
              onClick={() => handleRemoveFilterValue(value, filterType)}
            >
              {value}
              <RxCross2 size={11} />
            </button>
          );
        })}
      {(priceValues[0] !== minPrice || priceValues[1] !== maxPrice) && (
        <button onClick={() => setPriceValues([minPrice, maxPrice])}>
          {priceValues[0]} - {priceValues[1]} ₴
          <RxCross2 size={11} />
        </button>
      )}
      {filtersValue.length > 0 && (
        <button onClick={handleRemoveAllFiltersValues}>
          Reset all filters
          <RxCross2 size={11} />
        </button>
      )}
    </CheckedFiltersContainer>
  );
};

export default CheckedFilters;
