import { FC, useEffect, useState } from 'react';
import { IProps } from './Product.types';
import { ProductStyled } from './Product.styled';
import { RxCross1 } from 'react-icons/rx';
import Counter from '@/components/WineDetails/Counter';

const Product: FC<IProps> = ({ wine, calculateProductPrice }) => {
  const {
    title,
    price,
    imageUrl,
    wineColor,
    sugarConsistency,
    bottleCapacity,
    quantity,
  } = wine;

  const [counterValue, setCounterValue] = useState<number>(1);

  const onDelete = () => {
    console.log('deleted');
  };

  const winePrice = quantity > 0 ? price : 0;

  useEffect(() => {
    if (counterValue > 0 && winePrice) {
      calculateProductPrice(counterValue * winePrice);
    }
  }, [winePrice, counterValue, calculateProductPrice]);

  return (
    <ProductStyled quantity={quantity}>
      <img className='wineImg' src={imageUrl} alt='Wine image' />
      <div className='infoWrapper'>
        <div className='nameWrapper'>
          <p className='wineName'>
            {wineColor} {sugarConsistency} wine "{title}" {bottleCapacity} L
          </p>
          <button onClick={onDelete}>
            <RxCross1 size={20} />
          </button>
        </div>
        <div className='priceWrapper'>
          <Counter
            basket={true}
            quantity={quantity}
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
