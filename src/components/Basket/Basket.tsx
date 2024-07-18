import { FC, useState } from 'react';
import PageNavigation from '../PageNavigation';
import { PagePaths } from '@/constants';
import Container from '../Container';
import BasketList from './BasketList';
import BasketContacts from './BasketContacts';
import { BasketStyled } from './Basket.styled';
import OrderConfirmedMessage from './OrderConfirmedMessage';
import EmptyPage from '../EmptyPage';
import { IProps } from './Basket.types';

const Basket: FC<IProps> = ({ wines }) => {
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  // const [basket, setBasket] = useState<IWine[]>([]);

  // useEffect(() => {
  //   const allWines = operations.allWines()?.products || [];
  //   const localStorageBasketWines =
  //     setLocalStorage.getLocalStorageBasket(allWines) || [];

  //   if (wines.length > 0) {
  //     setBasket(wines);
  //   } else if (localStorageBasketWines.length > 0) {
  //     setBasket(localStorageBasketWines);
  //   } else {
  //     setBasket([]);
  //   }
  // }, [setBasket, wines]);

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
            {wines && wines.length > 0 ? (
              <BasketStyled>
                <h1>Placing an order</h1>
                <div className='contentWrapper'>
                  <BasketList
                    wines={wines}
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
