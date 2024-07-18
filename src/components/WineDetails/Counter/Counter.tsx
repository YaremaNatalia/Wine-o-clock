import { FC } from 'react';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { IProps } from './Counter.types';
import { CounterStyled } from './Counter.styled';
import useAddToBasket from '@/hooks/useAddToBasket';

const Counter: FC<IProps> = ({
  basket,
  wine,
  counterValue,
  setCounterValue,
}) => {
  const { quantity } = wine || {};
  const { mutateAddBasket } = useAddToBasket();

  const onDecrBtnClick = () => {
    if (counterValue > 1) {
      setCounterValue(counterValue - 1);
      const numbToOrder = counterValue - 1;
      mutateAddBasket({ wine, numbToOrder });
    }
  };

  const onIncrBtnClick = () => {
    if (counterValue < quantity) {
      setCounterValue(counterValue + 1);
      const numbToOrder = counterValue + 1;
      mutateAddBasket({ wine, numbToOrder });
    }
  };

  return (
    <CounterStyled basket={basket}>
      <button
        type='button'
        onClick={onDecrBtnClick}
        disabled={counterValue === 1}
      >
        <FiMinus size={basket ? 19 : 20} />
      </button>
      <span className='counterValue'>{counterValue}</span>
      <button
        type='button'
        onClick={onIncrBtnClick}
        disabled={counterValue === quantity || quantity === 0}
      >
        <FiPlus size={20} />
      </button>
    </CounterStyled>
  );
};

export default Counter;
