import { FC, useEffect, useState } from 'react';
import PageNavigation from '../PageNavigation';
import { PagePaths } from '@/constants';
import Container from '../Container';
import BasketList from './BasketList';

import BasketContacts from './BasketContacts';
import { BasketStyled } from './Basket.styled';
import { operations } from '@/tanStackQuery';
import OrderConfirmedMessage from './OrderConfirmedMessage';
import { setLocalStorage } from '@/utils';
import EmptyPage from '../EmptyPage';
import { useBasketContext } from '@/Context/ContextHooks';

const Basket: FC = () => {
  const allWines = operations.allWines()?.products;

  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const { basketWines, setBasketWines } = useBasketContext();

  useEffect(() => {
    if (allWines) {
      const winesWithNumberToOrder = setLocalStorage.getBasket(allWines);
      setBasketWines(winesWithNumberToOrder);
    }
  }, [allWines, setBasketWines]);

  const handleOrderConfirm = (orderNumber: string) => {
    setOrderNumber(orderNumber);
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
            {basketWines && basketWines.length > 0 ? (
              <BasketStyled>
                <h1>Placing an order</h1>
                <div className='contentWrapper'>
                  <BasketList
                    wines={basketWines}
                    onOrderConfirm={handleOrderConfirm}
                  />
                  <BasketContacts onOrderConfirm={handleOrderConfirm} />
                </div>
              </BasketStyled>
            ) : (
              <EmptyPage title='basket' />
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Basket;
