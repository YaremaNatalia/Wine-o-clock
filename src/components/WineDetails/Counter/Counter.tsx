import { FC } from 'react';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { IProps } from './Counter.types';
import { CounterStyled } from './Counter.styled';
import Loader from '@/components/Loader';
// import useCartUpdate from '@/hooks/useCartUpdate';

const Counter: FC<IProps> = ({
  basket,
  wine,
  counterValue,
  setCounterValue,
  isCartPending,
  // isInCart,
}) => {
  const { quantity } = wine || {};
  // const { updateCart } = useCartUpdate(wine, counterValue);

  // useEffect(() => {
  //   if (isInCart) {
  //     updateCart({ wine, amount: counterValue });
  //   }
  // }, [counterValue, isInCart, updateCart, wine]);

  const onDecrBtnClick = () => {
    if (counterValue > 1) {
      setCounterValue(counterValue - 1);
    }
  };

  const onIncrBtnClick = () => {
    if (counterValue < quantity) {
      setCounterValue(counterValue + 1);
    }
  };

  return (
    <CounterStyled basket={basket}>
      <button
        type='button'
        onClick={onDecrBtnClick}
        disabled={counterValue === 1 || isCartPending}
      >
        {isCartPending ? (
          <Loader basket={true} />
        ) : (
          <FiMinus size={basket ? 19 : 20} />
        )}
      </button>
      <span className='counterValue'>{counterValue}</span>
      <button
        type='button'
        onClick={onIncrBtnClick}
        disabled={counterValue === quantity || quantity === 0 || isCartPending}
      >
        {isCartPending ? <Loader basket={true} /> : <FiPlus size={20} />}
      </button>
    </CounterStyled>
  );
};

export default Counter;
