import { FC } from 'react';
import PageNavigation from '../PageNavigation';
import { PagePaths } from '@/constants';
import Container from '../Container';
import BasketProducts from './BasketList';
import { BasketContentWrapper } from './Basket.styled';

const Basket: FC = () => {
  return (
    <>
      <PageNavigation
        firstTitle='Main page'
        firstLink={PagePaths.homePath}
        secondTitle='Placing an order'
      />
      <Container>
        <BasketContentWrapper>
          <h1>Placing an order</h1>
          <BasketProducts />
        </BasketContentWrapper>
      </Container>
    </>
  );
};

export default Basket;
