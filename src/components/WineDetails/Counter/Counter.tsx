import { FC, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IProps } from './Counter.types';
import { CounterStyled } from './Counter.styled';

const Counter: FC<IProps> = ({ quantity, onCounterChange }) => {
  const [counterValue, setCounterValue] = useState(1);

  const onDecrBtnClick = () => {
    if (counterValue > 1) {
      setCounterValue((prevState) => prevState - 1);
      onCounterChange(counterValue - 1);
    }
  };

  const onIncrBtnClick = () => {
    if (counterValue < quantity) {
      setCounterValue((prevState) => prevState + 1);
      onCounterChange(counterValue + 1);
    }
  };

  return (
    <CounterStyled>
      <button
        type='button'
        onClick={onDecrBtnClick}
        disabled={counterValue === 1}
      >
        <IoIosArrowBack size={20} />
      </button>
      <span className='counterValue'>{counterValue}</span>
      <button
        type='button'
        onClick={onIncrBtnClick}
        disabled={counterValue === quantity || quantity === 0}
      >
        <IoIosArrowForward size={20} />
      </button>
    </CounterStyled>
  );
};

export default Counter;
