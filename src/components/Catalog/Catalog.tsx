import { FC } from 'react';
import PageNavigation from '../PageNavigation';
import { PagePaths } from '@/constants';

import Container from '../Container';
import CatalogHero from './CatalogHero';
import CatalogContent from './CatalogContent';

const Catalog: FC = () => {
  return (
    <>
      <CatalogHero />
      <PageNavigation
        firstTitle='Main page'
        firstLink={PagePaths.homePath}
        secondTitle='Store'
      />
      <Container>
        <CatalogContent />
      </Container>
    </>
  );
};

export default Catalog;
