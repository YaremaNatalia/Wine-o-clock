import { FC } from 'react';
import { FaCheck } from 'react-icons/fa6';

import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { PagePaths } from '@/constants';
import { ConfirmedMessageWrapper } from './OrderConfirmedMessage.styled';
import { IOrderConfirmedMessage } from './OrderConfirmedMessage.types';

const OrderConfirmedMessage: FC<IOrderConfirmedMessage> = ({ orderNumber }) => {
  return (
    <ConfirmedMessageWrapper>
      <h2>Your order has been received</h2>
      <FaCheck title='Success' size={50} />
      <p className='mainInfo'>Thank you for your purchase!</p>
      <div className='secondaryInfo'>
        <p>Your order ID is : {orderNumber} </p>
        <p>
          You will receive an order confirmation email with details of your
          order.
        </p>
      </div>
      <Link to={PagePaths.storePath}>
        <Button
          title='Continue shopping'
          onClick={(e) => {
            e.currentTarget.blur();
          }}
        />
      </Link>
    </ConfirmedMessageWrapper>
  );
};

export default OrderConfirmedMessage;
