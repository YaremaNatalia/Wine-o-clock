import { FC, useEffect, useRef } from 'react';
import ReactSlider, { ReactSliderProps } from 'react-slider';
import { SliderWrapper, StyledTrack } from './PriceSlider.styled';
import { IProps } from './PriceSlider.type';

const PriceSlider: FC<IProps> = ({
  register,
  reset,
  priceValues,
  setPriceValues,
}) => {
  const minPriceRef = useRef<HTMLInputElement>(null);
  const maxPriceRef = useRef<HTMLInputElement>(null);

  const handleChange = (newValues: [number, number]) => {
    setPriceValues(newValues);
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
    if (priceValues[0] === 0 && priceValues[1] === 3000) {
      reset();
    }
  }, [reset, priceValues]);

  const Track: ReactSliderProps<[number, number]>['renderTrack'] = (
    props,
    state
  ) => <StyledTrack {...props} index={state.index} />;

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
        min={0}
        max={3000}
        renderTrack={Track}
      />
    </SliderWrapper>
  );
};

export default PriceSlider;
