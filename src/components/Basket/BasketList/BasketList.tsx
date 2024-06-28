import { operations } from '@/tanStackQuery';
import { FC, useState } from 'react';
import { ProductListStyled, ProductsWrapper } from './BasketList.styled';
import Product from '../Product';

const BasketList: FC = () => {
  const data = operations.allWines();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [listPrice, setListPrice] = useState<number>(0);
  const [deliveryPrice, setDeliveryPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  return (
    <ProductsWrapper>
      <h2>Products</h2>
      <ProductListStyled>
        {data?.products.map((wine) => (
          <Product key={wine._id} wine={wine} />
        ))}
      </ProductListStyled>
      <ul className='additionalPayments'>
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
    </ProductsWrapper>
  );
};

export default BasketList;
