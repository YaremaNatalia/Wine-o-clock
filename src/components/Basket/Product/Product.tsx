import { FC, useEffect, useState } from 'react';
import { IProps } from './Product.types';
import { ProductStyled } from './Product.styled';
import { RxCross1 } from 'react-icons/rx';
import Counter from '@/components/WineDetails/Counter';
import { IWine } from '@/types/types';
import useCartMutation from '@/hooks/useCartMutation';
import { operations } from '@/tanStackQuery';

const Product: FC<IProps> = ({ productId, amount, updatePrice }) => {
  const { mutateCart, isCartPending } = useCartMutation();
  const data = operations.getAllWinesCache();

  const wine =
    data?.products.find((wine: IWine) => wine._id === productId) || null;

  const initialCounterValue = amount || 1;
  const [counterValue, setCounterValue] = useState<number>(initialCounterValue);

  const winePrice =
    wine && wine.quantity > 0
      ? parseFloat((wine.price * counterValue).toFixed(2))
      : 0;

  useEffect(() => {
    if (wine && counterValue > 0) {
      updatePrice(wine._id, winePrice);
    }
  }, [wine, winePrice, counterValue, updatePrice]);

  if (!wine) {
    return <p className='soldOut'>Sold out</p>;
  }

  const {
    _id,
    title,
    imageUrl,
    wineColor,
    sugarConsistency,
    bottleCapacity,
    quantity,
  } = wine;

  const onDelete = (_id: string) => {
    mutateCart({ wine, action: 'remove' });
    setCounterValue(0);
    updatePrice(_id, 0);
  };

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
            isCartPending={isCartPending}
          />
          {quantity === 0 && <p className='soldOut'>Sold out</p>}
          <p className='winePrice'>{winePrice} ₴</p>
        </div>
      </div>
    </ProductStyled>
  );
};

export default Product;
