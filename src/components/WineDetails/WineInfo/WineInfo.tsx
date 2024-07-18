import { FC, useState } from 'react';
import { IProps } from './WineInfo.types';
import { WineInfoList, WineInfoStyled } from './WineInfo.styled';
import StarRating from '../StarRating';
import Button from '../../Button';
import { ButtonForms, ButtonTypes } from '@/constants';
import BasketPlus from '@/icons/basketPlus.svg?react';
import { BtnClickEvent } from '@/types/types';
import Counter from '../Counter';

import useAddToBasket from '@/hooks/useAddToBasket';

const WineInfo: FC<IProps> = ({ wine }) => {
  const {
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
  const { mutateAddBasket, isPending } = useAddToBasket();

  const handleBtnClick = (e: BtnClickEvent) => {
    mutateAddBasket({ wine, numbToOrder: counterValue });
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
          svg={<BasketPlus />}
          buttonForm={ButtonForms.other}
          title={isPending ? 'Loading...' : 'Add to cart'}
          price={`${totalPrice} ₴`}
          type={ButtonTypes.button}
          onClick={handleBtnClick}
          disabled={isPending}
        ></Button>
      )}
    </WineInfoStyled>
  );
};

export default WineInfo;
