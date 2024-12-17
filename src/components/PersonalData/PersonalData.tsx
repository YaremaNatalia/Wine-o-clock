import { FC } from 'react';
import PersonalDataNavigation from './PersonalDataNavigation';
import Container from '../Container';
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
import { INewUser } from '@/types/types';
import useUpdateUser from '@/hooks/useUpdateUser';
// import { operations } from '@/tanStackQuery';

const PersonalData: FC = () => {
  //  const user = operations.getPersonalDataCache();
  // const numberOfOrders = (user: IUser): number => {
  //   return user.orders ? user.orders.length : 0;
  // };
  // const calculateTotalOrders = (user: IUser): number => {
  //   if (!user.orders || user.orders.length === 0) {
  //     return 0;
  //   }
  //   return user.orders.reduce((sum, order) => sum + order.total, 0);
  // };
  const { updateUser, isPendingUpdateUser } = useUpdateUser();
  const onSubmit: SubmitHandler<INewUser> = async (data) => {
    updateUser(data);
    console.log('Submitting data:', data);
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
            <button
              type='submit'
              form='personal-data-form'
              disabled={isPendingUpdateUser}
            >
              Edit Data
            </button>
          </TitlePersonalData>
          <PersonalDataWrapper>
            <PersonalDataForm onSubmit={onSubmit} />
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
