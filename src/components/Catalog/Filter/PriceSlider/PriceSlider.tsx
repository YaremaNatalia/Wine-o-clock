import { FC, useEffect, useRef } from 'react';
import ReactSlider, { ReactSliderProps } from 'react-slider';
import { SliderWrapper, StyledTrack } from './PriceSlider.styled';
import { IProps } from './PriceSlider.type';

const PriceSlider: FC<IProps> = ({
  register,
  reset,
  priceValues,
  setPriceValues,
  setCurrentPage,
  minPrice,
  maxPrice,
}) => {
  const minPriceRef = useRef<HTMLInputElement>(null);
  const maxPriceRef = useRef<HTMLInputElement>(null);

  const handleChange = (newValues: [number, number]) => {
    setPriceValues(newValues);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (minPriceRef.current) {
      register('minPrice');
    }
    if (maxPriceRef.current) {
      register('maxPrice');
    }
  }, [register]);

  useEffect(() => {
    if (priceValues[0] === minPrice && priceValues[1] === maxPrice) {
      reset();
    }
  }, [reset, priceValues, minPrice, maxPrice]);

  const Track: ReactSliderProps<[number, number]>['renderTrack'] = (
    { key, style, className },
    state
  ) => (
    <StyledTrack
      key={key}
      style={style}
      className={className}
      index={state.index}
    />
  );

  return (
    <SliderWrapper>
      <div className='labelsWrapper'>
        <div className='inputWrapper'>
          <label htmlFor='minPrice'>Min:</label>
          <input
            type='number'
            id='minPrice'
            value={priceValues[0]}
            onChange={(e) => handleChange([+e.target.value, priceValues[1]])}
            ref={minPriceRef}
          />
        </div>
        <div className='inputWrapper'>
          <label htmlFor='maxPrice'>Max:</label>
          <input
            type='number'
            id='maxPrice'
            value={priceValues[1]}
            onChange={(e) => handleChange([priceValues[0], +e.target.value])}
            ref={maxPriceRef}
          />
        </div>
      </div>
      <ReactSlider
        className='slider'
        value={priceValues}
        onChange={handleChange}
        min={minPrice}
        max={maxPrice}
        renderTrack={Track}
      />
    </SliderWrapper>
  );
};

export default PriceSlider;
