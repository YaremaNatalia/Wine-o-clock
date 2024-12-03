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
import { SubmitHandler } from 'react-hook-form';
import { IUser } from '@/types/types';

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

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    try {
      console.log('Submitting data:', data);
      // const response = await $instance.put('/api/user/update', data);
      // console.log('Server response:', response.data);
      // alert('Data updated successfully');
    } catch (error) {
      console.error('Error updating user data:', error);
      // alert('Failed to update data');
    }
  };

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
            <button type='submit' form='personal-data-form'>
              Edit Data
            </button>
          </TitlePersonalData>
          <PersonalDataWrapper>
            <PersonalDataForm user={user} onSubmit={onSubmit} />
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
