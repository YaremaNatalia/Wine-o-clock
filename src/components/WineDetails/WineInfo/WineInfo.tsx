import { FC, useState } from 'react';
import { IProps } from './WineInfo.types';
import { WineInfoList, WineInfoStyled } from './WineInfo.styled';
import StarRating from '../StarRating';
import Button from '../../Button';
import { ButtonForms, ButtonTypes } from '@/constants';
import BasketPlus from '@/icons/basketPlus.svg?react';
import { BtnClickEvent } from '@/types/types';
import Counter from '../Counter';
import toast from 'react-hot-toast';
import CustomToast from '@/components/CustomToast';
import { setLocalStorage } from '@/utils';
import { operations } from '@/tanStackQuery';
import { useBasketContext } from '@/Context/ContextHooks';

const WineInfo: FC<IProps> = ({
  _id,
  wineColor,
  sugarConsistency,
  country,
  region,
  bottleCapacity,
  alcohol,
  price,
  title,
  evaluation,
  quantity,
}) => {
  const [counterValue, setCounterValue] = useState<number>(1);
  const allWines = operations.allWines()?.products;
  const { setBasketWines } = useBasketContext();

  const handleBtnClick = (e: BtnClickEvent) => {
    const result = setLocalStorage.addToBasket(_id, quantity, counterValue);
    if (result) {
      toast.success(
        <CustomToast message={`Wine ${title} added to your cart!`} />
      );
    } else {
      toast.error(<CustomToast message='Sorry, not enough wine in stock' />);
    }
    if (allWines) {
      const basket = setLocalStorage.getBasket(allWines);
      setBasketWines(basket);
    }
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
        quantity={quantity}
        counterValue={counterValue}
        setCounterValue={setCounterValue}
        _id={_id}
      />
      <p className='winePrice'>{price} ₴</p>
      {quantity > 0 && (
        <Button
          svg={<BasketPlus />}
          buttonForm={ButtonForms.other}
          title='Add to cart'
          price={`${totalPrice} ₴`}
          type={ButtonTypes.button}
          onClick={handleBtnClick}
        ></Button>
      )}
    </WineInfoStyled>
  );
};

export default WineInfo;
