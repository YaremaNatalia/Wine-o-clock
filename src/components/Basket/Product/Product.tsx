import { FC, useEffect, useState } from 'react';
import { IProps } from './Product.types';
import { ProductStyled } from './Product.styled';
import { RxCross1 } from 'react-icons/rx';
import Counter from '@/components/WineDetails/Counter';
import { operations } from '@/tanStackQuery';
import { IWine } from '@/types/types';
import useCartMutation from '@/hooks/useCartMutation';

const Product: FC<IProps> = ({ productId, amount, productPrice }) => {
  const data = operations.getAllWinesCache();
  const { mutateCart, isCartPending } = useCartMutation();

  const wine =
    data?.products.find((wine: IWine) => wine._id === productId) || null;

  const {
    _id,
    title,
    price,
    imageUrl,
    wineColor,
    sugarConsistency,
    bottleCapacity,
    quantity,
  } = wine;

  const initialCounterValue = typeof amount === 'number' ? amount : 0;
  const [counterValue, setCounterValue] = useState<number>(initialCounterValue);

  const onDelete = (_id: string) => {
    mutateCart({ wine, action: 'remove' });
    setCounterValue(0);
    productPrice(_id, 0);
  };

  const winePrice = quantity > 0 ? (price * counterValue).toFixed(2) : 0;

  useEffect(() => {
    if (counterValue > 0 && winePrice) {
      productPrice(_id, counterValue * winePrice);
    }
  }, [winePrice, counterValue, productPrice, _id]);

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
            basket
            wine={wine}
            counterValue={counterValue}
            setCounterValue={setCounterValue}
          />
          {quantity === 0 && <p className='soldOut'>Sold out</p>}
          <p className='winePrice'>{winePrice} ₴</p>
        </div>
      </div>
    </ProductStyled>
  );
};

export default Product;
