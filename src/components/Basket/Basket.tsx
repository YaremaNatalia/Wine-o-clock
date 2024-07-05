import { FC } from 'react';
import PageNavigation from '../PageNavigation';
import { PagePaths } from '@/constants';
import Container from '../Container';
import BasketList from './BasketList';

import BasketContacts from './BasketContacts';
import { BasketStyled } from './Basket.styled';
import { operations } from '@/tanStackQuery';
import EmptyCart from './EmptyCart';

const Basket: FC = () => {
  const data = operations.allWines();
  // const redWines =
  //   data?.products.filter((wine) => wine.wineColor === 'red') || [];
  const sweetWines =
    data?.products.filter((wine) => wine.sugarConsistency === 'Sweet') || [];
  const wines = sweetWines;
  return (
    <>
      <PageNavigation
        firstTitle='Main page'
        firstLink={PagePaths.homePath}
        secondTitle='Placing an order'
      />
      <Container>
        {wines && wines.length > 0 ? (
          <BasketStyled>
            <h1>Placing an order</h1>
            <div className='contentWrapper'>
              <BasketList wines={wines} />
              <BasketContacts />
            </div>
          </BasketStyled>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </>
  );
};

export default Basket;
