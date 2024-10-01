import { FC, useState } from 'react';
import PageNavigation from '../PageNavigation';
import { PagePaths } from '@/constants';
import Container from '../Container';
import BasketList from './BasketList';
import BasketContacts from './BasketContacts';
import { BasketStyled } from './Basket.styled';
import OrderConfirmedMessage from './OrderConfirmedMessage';
import EmptyPage from '../EmptyPage';
import { operations } from '@/tanStackQuery';
import { setFilterWines } from '@/utils';
import WineListSection from '../WineListSection';

const Basket: FC = () => {
  const [orderNumber, setOrderNumber] = useState<string | null>(null);

  const data = operations.getAllWinesCache();
  const bestsellers = setFilterWines.filterMainWines(
    data?.products ?? [],
    'bestsellers'
  );
  const wines = operations.getBasketCache();
  const handleOrderConfirm = (orderNumber: string) => {
    setOrderNumber(orderNumber);
    console.log(wines);
  };
  return (
    <>
      <PageNavigation
        firstTitle='Main page'
        firstLink={PagePaths.homePath}
        secondTitle='Placing an order'
      />
      <Container>
        {orderNumber ? (
          <OrderConfirmedMessage orderNumber={orderNumber} />
        ) : (
          <>
            {wines && wines.length > 0 ? (
              <BasketStyled>
                <h1>Placing an order</h1>
                <div className='contentWrapper'>
                  <BasketList wines={wines} />
                  <BasketContacts onOrderConfirm={handleOrderConfirm} />
                </div>
              </BasketStyled>
            ) : (
              <EmptyPage title='basket' />
            )}
          </>
        )}
      </Container>
      {bestsellers && bestsellers.length > 0 && (
        <WineListSection
          wines={bestsellers}
          sectionTitle='Bestsellers'
          componentTitle='MainPage'
        />
      )}
    </>
  );
};

export default Basket;
