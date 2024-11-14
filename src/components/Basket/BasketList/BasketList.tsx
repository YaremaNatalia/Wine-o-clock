import { FC, useState } from 'react';
import {
  PaymentsWrapper,
  ProductListStyled,
  ProductsWrapper,
} from './BasketList.styled';
import Product from '../Product';
import { IProps } from './BasketList.types';
import { operations } from '@/tanStackQuery';
import { IWine } from '@/types/types';

const BasketList: FC<IProps> = ({ wines }) => {
  const data = operations.getAllWinesCache();
  const availableWines = wines.filter((wine) =>
    data?.products.some((product: IWine) => product._id === wine.productId)
  );

  const [productPrice, setProductPrice] = useState<{
    [key: string]: number;
  }>({});
  const [deliveryPrice] = useState<number>(0);
  const [discount] = useState<number>(0);

  const updatePrice = (id: string, price: number) => {
    setProductPrice((prevPrices) => {
      if (prevPrices[id] !== price) {
        return {
          ...prevPrices,
          [id]: price,
        };
      }
      return prevPrices;
    });
  };

  const listPrice = parseFloat(
    Object.values(productPrice)
      .reduce((total, price) => total + price, 0)
      .toFixed(2)
  );

  const totalPrice = listPrice + deliveryPrice - discount;

  return (
    <ProductsWrapper>
      <h2>Products</h2>
      <ProductListStyled>
        {availableWines?.map((wine) => (
          <Product
            key={wine.productId}
            productId={wine.productId}
            amount={wine.amount}
            updatePrice={updatePrice}
          />
        ))}
      </ProductListStyled>
      <PaymentsWrapper>
        <ul>
          <li>
            <p>Together</p>
            <div>{listPrice} ₴</div>
          </li>
          <li>
            <p>Cost of delivery</p>
            <div>{deliveryPrice} ₴</div>
          </li>
          <li>
            <p>Discount</p>
            <div>{discount} ₴</div>
          </li>
        </ul>
        <div className='toPay'>
          <p>To pay</p>
          {totalPrice} ₴
        </div>
      </PaymentsWrapper>
    </ProductsWrapper>
  );
};

export default BasketList;
