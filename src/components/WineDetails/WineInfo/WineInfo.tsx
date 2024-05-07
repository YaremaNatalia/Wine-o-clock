import { FC, useState } from 'react';
import { IProps } from './WineInfo.types';
import { WineInfoList, WineInfoStyled } from './WineInfo.styled';
import StarRating from '../StarRating';
import Button from '../../Button';
import { ButtonForms, ButtonTypes } from '@/constants';
import BasketPlus from '@/icons/basketPlus.svg?react';
import { BtnClickEvent } from '@/types/types';
import Counter from '../Counter';

const WineInfo: FC<IProps> = ({
  id,
  color,
  sweetness,
  country,
  region,
  volume,
  alcohol,
  name,
  rating,
  price,
  quantity,
}) => {
  const [counterValue, setCounterValue] = useState<number>(1);

  const handleBtnClick = (e: BtnClickEvent) => {
    if (counterValue <= quantity) {
      console.log(id, counterValue);
    }

    e.currentTarget.blur();
  };
  const totalPrice = counterValue * price;
  return (
    <WineInfoStyled>
      <div className='nameWrapper'>
        <p className='wineName'>{name}</p>
        <StarRating data={rating} />
      </div>
      <WineInfoList>
        <li>
          Color: <span>{color}</span>
        </li>
        <li>
          Sweetness: <span>{sweetness}</span>
        </li>
        <li>
          Country: <span>{country}</span>
        </li>
        <li>
          Region: <span>{region}</span>
        </li>
        <li>
          Volume: <span>{volume}</span>
        </li>
        <li>
          Alcohol: <span> {alcohol}%</span>
        </li>
      </WineInfoList>
      <Counter quantity={quantity} onCounterChange={setCounterValue} />
      <p className='winePrice'>{price} ₴</p>
      <Button
        svg={<BasketPlus />}
        buttonForm={ButtonForms.other}
        title='Add to cart'
        price={`${totalPrice} ₴`}
        type={ButtonTypes.button}
        onClick={handleBtnClick}
      ></Button>
    </WineInfoStyled>
  );
};

export default WineInfo;
