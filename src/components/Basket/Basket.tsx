import { FC } from 'react';
import PageNavigation from '../PageNavigation';
import { PagePaths } from '@/constants';
import Container from '../Container';
import BasketList from './BasketList';

import BasketContacts from './BasketContacts';
import { BasketStyled } from './Basket.styled';

const Basket: FC = () => {
  return (
    <>
      <PageNavigation
        firstTitle='Main page'
        firstLink={PagePaths.homePath}
        secondTitle='Placing an order'
      />
      <Container>
        <BasketStyled>
          <h1>Placing an order</h1>
          <div className='contentWrapper'>
            <BasketList />
            <BasketContacts/>
          </div>
        </BasketStyled>
      </Container>
    </>
  );
};

export default Basket;
