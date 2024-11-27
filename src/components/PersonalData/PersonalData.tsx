import { FC } from 'react';
import PersonalDataNavigation from './PersonalDataNavigation';
import Container from '../Container';
import { IProps } from './PersonalData.types';
import PersonalDataForm from './PersonalDataForm';
import { IUser } from '@/types/types';
import { OrdersAmountContainer } from './PersonalData.styled';

const PersonalData: FC<IProps> = ({ user }) => {
  const numberOfOrders = (user: IUser): number => {
    return user.orders ? user.orders.length : 0;
  };
  const calculateTotalOrders = (user: IUser): number => {
    if (!user.orders || user.orders.length === 0) {
      return 0;
    }
    return user.orders.reduce((sum, order) => sum + order.total, 0);
  };

  return (
    <>
      <Container>
        <PersonalDataNavigation />
        <PersonalDataForm user={user} />
        <OrdersAmountContainer>
          <div>
            <p>Number of orders</p>
          </div>
          <p>{numberOfOrders}</p>
          <div>
            <p>Total</p>
            <p>{calculateTotalOrders} ₴</p>
          </div>
        </OrdersAmountContainer>
      </Container>
    </>
  );
};

export default PersonalData;
