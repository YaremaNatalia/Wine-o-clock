import { FC } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { IProps } from './CheckedFilters.types';
import { CheckedFiltersContainer } from './CheckedFilters.styled';

const CheckedFilters: FC<IProps> = ({
  filtersValue,
  handleRemoveFilterValue,
  handleRemoveAllFiltersValues,
  priceValues,
  setPriceValues,
}) => {
  return (
    <CheckedFiltersContainer>
      {filtersValue &&
        filtersValue.map((v, index) => (
          <button key={index} onClick={() => handleRemoveFilterValue(v)}>
            {v}
            <RxCross2 size={11} />
          </button>
        ))}
      {(priceValues[0] > 0 || priceValues[1] < 3000) && (
        <button onClick={() => setPriceValues([0, 3000])}>
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
