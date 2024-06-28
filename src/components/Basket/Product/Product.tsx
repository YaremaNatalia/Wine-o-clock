import { FC, useState } from 'react';
import { IProps } from './Product.types';
import { ProductStyled } from './Product.styled';
import { RxCross1 } from 'react-icons/rx';
import Counter from '@/components/WineDetails/Counter';

const Product: FC<IProps> = ({ wine }) => {
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

  return (
    <ProductStyled>
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
          <p className='winePrice'>{price} ₴</p>
        </div>
      </div>
    </ProductStyled>
  );
};

export default Product;
