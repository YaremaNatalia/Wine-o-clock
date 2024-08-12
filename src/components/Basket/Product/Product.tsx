import { FC, useEffect, useState } from 'react';
import { IProps } from './Product.types';
import { ProductStyled } from './Product.styled';
import { RxCross1 } from 'react-icons/rx';
import useRemoveFromBasket from '@/hooks/useRemoveFromBasket';
import Counter from '@/components/WineDetails/Counter';


const Product: FC<IProps> = ({
  wine,
  calculateProductPrice,
}) => {
  const {
    _id,
    title,
    price,
    imageUrl,
    wineColor,
    sugarConsistency,
    bottleCapacity,
    quantity,
    numberToOrder,
  } = wine;

  const initialCounterValue =
    typeof numberToOrder === 'number' ? numberToOrder : 0;
  const [counterValue, setCounterValue] = useState<number>(initialCounterValue);

  const { removeFromBasket } = useRemoveFromBasket();

  const onDelete = (_id: string) => {
    removeFromBasket(_id);
    setCounterValue(0);
    calculateProductPrice(_id, 0);
  };

  const winePrice = quantity > 0 ? price : 0;

  useEffect(() => {
    if (counterValue > 0 && winePrice)
      calculateProductPrice(_id, counterValue * winePrice);
  }, [winePrice, counterValue, calculateProductPrice, _id]);

  return (
    <ProductStyled quantity={quantity}>
      <img className='wineImg' src={imageUrl} alt='Wine image' />
      <div className='infoWrapper'>
        <div className='nameWrapper'>
          <p className='wineName'>
            {wineColor} {sugarConsistency} wine "{title}" {bottleCapacity} L
          </p>
          <button onClick={() => onDelete(_id)}>
            <RxCross1 size={20} />
          </button>
        </div>
        <div className='priceWrapper'>
          <Counter
            wine={wine}
            counterValue={counterValue}
            setCounterValue={setCounterValue}
          />
          {quantity == 0 && <p className='soldOut'>Sold out</p>}
          <p className='winePrice'>{winePrice} ₴</p>
        </div>
      </div>
    </ProductStyled>
  );
};

export default Product;
