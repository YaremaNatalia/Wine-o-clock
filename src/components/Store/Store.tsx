import { FC } from 'react';
import PageNavigation from '../PageNavigation';
import { PagePaths } from '@/constants';
import StoreHero from './StoreHero';
import StoreContent from './StoreContent';
import Container from '../Container';

const Store: FC = () => {
  return (
    <>
      <StoreHero />
      <PageNavigation
        firstTitle='Main page'
        firstLink={PagePaths.homePath}
        secondTitle='Store'
      />
      <Container>
        <StoreContent />
      </Container>
    </>
  );
};

export default Store;
