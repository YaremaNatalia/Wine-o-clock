import { FC, useEffect, useState } from 'react';
import { IProps } from './WineInfo.types';
import { WineInfoList, WineInfoStyled } from './WineInfo.styled';
import StarRating from '../StarRating';
import Button from '../../Button';
import { ButtonForms, ButtonTypes } from '@/constants';
import BasketPlus from '@/icons/basketPlus.svg?react';
import BasketPlusGreen from '@/icons/basketPlusGreen.svg?react';
import { BtnClickEvent } from '@/types/types';
import Counter from '../Counter';
import useCartMutation from '@/hooks/useCartMutation';
import { operations } from '@/tanStackQuery';

const WineInfo: FC<IProps> = ({ wine }) => {
  const { mutateCart, isCartPending } = useCartMutation();
  const {
    _id,
    wineColor,
    sugarConsistency,
    country,
    region,
    bottleCapacity,
    alcohol,
    price,
    title,
    evaluation = 0,
    quantity,
  } = wine ?? {};
  const [counterValue, setCounterValue] = useState<number>(1);

  const cart = operations.getCartCache();

  const [isInCart, setIsInCart] = useState<boolean>(false);

  useEffect(() => {
    if (cart) {
      setIsInCart(cart.some((item) => item.productId === _id));
    }
  }, [cart, _id]);

  const handleBtnClick = (e: BtnClickEvent) => {
    mutateCart({ wine, amount: counterValue, action: 'add' });
    setCounterValue(1);
    e.currentTarget.blur();
  };

  const totalPrice = (counterValue * price).toFixed(2);

  return (
    <WineInfoStyled quantity={quantity}>
      <div className='nameWrapper'>
        <p className='wineName'>
          {wineColor} {sugarConsistency} wine "{title}" {bottleCapacity} L
        </p>
        <StarRating data={evaluation} />
      </div>
      <WineInfoList>
        <li>
          Color: <span>{wineColor}</span>
        </li>
        <li>
          Sweetness: <span>{sugarConsistency}</span>
        </li>
        <li>
          Country: <span>{country}</span>
        </li>
        <li>
          Region: <span>{region}</span>
        </li>
        <li>
          Volume: <span>{bottleCapacity}</span>
        </li>
        <li>
          Alcohol: <span> {alcohol}%</span>
        </li>
      </WineInfoList>
      <Counter
        wine={wine}
        counterValue={counterValue}
        setCounterValue={setCounterValue}
      />
      <p className='winePrice'>{price} ₴</p>
      {quantity > 0 && (
        <Button
          svg={isInCart ? <BasketPlusGreen /> : <BasketPlus />}
          buttonForm={ButtonForms.other}
          title={isCartPending ? 'Loading...' : 'Add to cart'}
          price={`${totalPrice} ₴`}
          type={ButtonTypes.button}
          onClick={handleBtnClick}
          disabled={isCartPending}
        ></Button>
      )}
    </WineInfoStyled>
  );
};

export default WineInfo;
