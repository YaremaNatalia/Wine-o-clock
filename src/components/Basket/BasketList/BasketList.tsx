import { FC, useState } from 'react';
import {
  PaymentsWrapper,
  ProductListStyled,
  ProductsWrapper,
} from './BasketList.styled';
import Product from '../Product';
import { IProps } from './BasketList.types';

const BasketList: FC<IProps> = ({ wines }) => {
  const [productPrices, setProductPrices] = useState<number[]>([]);
  const [deliveryPrice] = useState<number>(0);
  const [discount] = useState<number>(0);

  const calculateProductPrice = (index: number, price: number) => {
    setProductPrices((prevPrices) => {
      const newPrices = [...prevPrices];
      if (newPrices[index] !== price) {
        newPrices[index] = price;
        return newPrices;
      }
      return prevPrices;
    });
  };

  const listPrice = parseFloat(
    productPrices
      .filter((price) => typeof price === 'number')
      .reduce((total, price) => total + price, 0)
      .toFixed(2)
  );
  const totalPrice = listPrice + deliveryPrice - discount;

  return (
    <ProductsWrapper>
      <h2>Products</h2>
      <ProductListStyled>
        {wines?.map((wine, index) => (
          <Product
            key={wine._id}
            wine={wine}
            calculateProductPrice={(price) =>
              calculateProductPrice(index, price)
            }
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
