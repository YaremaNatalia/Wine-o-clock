import { FC, useState } from 'react';
import ReactSlider, { ReactSliderProps } from 'react-slider';
import { SliderWrapper, StyledTrack } from './PriceSlider.styled';

const PriceSlider: FC = () => {
  const [values, setValues] = useState<[number, number]>([0, 3000]);
  console.log(values);

  const handleChange = (newValues: [number, number]) => {
    setValues(newValues);
  };

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
          />
        </div>
        <div className='inputWrapper'>
          <label htmlFor='maxPrice'>Max:</label>
          <input
            type='number'
            id='maxPrice'
            value={values[1]}
            onChange={(e) => handleChange([values[0], +e.target.value])}
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
