import { FC, useEffect, useRef, useState } from 'react';
import ReactSlider, { ReactSliderProps } from 'react-slider';
import { SliderWrapper, StyledTrack } from './PriceSlider.styled';
import { IProps } from './PriceSlider.typer';

const PriceSlider: FC<IProps> = ({ register }) => {
  const [values, setValues] = useState<[number, number]>([0, 3000]);

  const minPriceRef = useRef<HTMLInputElement>(null);
  const maxPriceRef = useRef<HTMLInputElement>(null);

  const handleChange = (newValues: [number, number]) => {
    setValues(newValues);
  };

  useEffect(() => {
    if (minPriceRef.current) {
      register('minPrice');
    }
    if (maxPriceRef.current) {
      register('maxPrice');
    }
  }, [register]);

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
            value={values[0]}
            onChange={(e) => handleChange([+e.target.value, values[1]])}
            ref={minPriceRef}
          />
        </div>
        <div className='inputWrapper'>
          <label htmlFor='maxPrice'>Max:</label>
          <input
            type='number'
            id='maxPrice'
            value={values[1]}
            onChange={(e) => handleChange([values[0], +e.target.value])}
            ref={maxPriceRef}
          />
        </div>
      </div>
      <ReactSlider
        className='slider'
        value={values}
        onChange={handleChange}
        min={0}
        max={3000}
        renderTrack={Track}
      />
    </SliderWrapper>
  );
};

export default PriceSlider;
