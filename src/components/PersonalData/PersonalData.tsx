import { FC } from 'react';
import PersonalDataNavigation from './PersonalDataNavigation';
import Container from '../Container';
import { IProps } from './PersonalData.types';
import PersonalDataForm from './PersonalDataForm';
// import { IUser } from '@/types/types';
import {
  OrdersAmountContainer,
  PersonalDataWrapper,
  TitlePersonalData,
} from './PersonalData.styled';
import Section from '../Section';
import { PiUserBold } from 'react-icons/pi';

const PersonalData: FC<IProps> = ({ user }) => {
  // const numberOfOrders = (user: IUser): number => {
  //   return user.orders ? user.orders.length : 0;
  // };
  // const calculateTotalOrders = (user: IUser): number => {
  //   if (!user.orders || user.orders.length === 0) {
  //     return 0;
  //   }
  //   return user.orders.reduce((sum, order) => sum + order.total, 0);
  // };

  return (
    <>
      <Container>
        <PersonalDataNavigation />
        <Section>
          <TitlePersonalData>
            <div>
              <PiUserBold />
              <p>Personal data</p>
            </div>
            <button type='submit'>Edit Data</button>
          </TitlePersonalData>
          <PersonalDataWrapper>
            <PersonalDataForm user={user} />
            <OrdersAmountContainer>
              <div>
                <p>Number of orders</p>
                <p>0</p>
              </div>
              <div>
                <p>Total</p>
                <p>0 ₴</p>
              </div>
            </OrdersAmountContainer>
          </PersonalDataWrapper>
        </Section>
      </Container>
    </>
  );
};

export default PersonalData;
