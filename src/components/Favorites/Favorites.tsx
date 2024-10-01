import { FC } from 'react';
import PageNavigation from '../PageNavigation';
import { PagePaths } from '@/constants';
import Container from '../Container';
import WineList from '../WineList';
import WineListSection from '../WineListSection';
import { operations } from '@/tanStackQuery';
import { setFilterWines } from '@/utils';
import { FavoritesStyled } from './Favorites.styled';
import EmptyPage from '../EmptyPage';

const Favorites: FC = () => {
  const data = operations.getAllWinesCache();
  const wines = operations.getFavoritesCache();
  const favoriteWines = wines
    ? data?.products.filter((wine) => wines.includes(wine._id))
    : [];
  const bestsellers = setFilterWines.filterMainWines(
    data?.products ?? [],
    'bestsellers'
  );

  return (
    <>
      <FavoritesStyled>
        <PageNavigation
          firstTitle='Main page'
          firstLink={PagePaths.homePath}
          secondTitle='Favorites'
        />
        <Container>
          {favoriteWines && favoriteWines.length > 0 ? (
            <WineList wines={favoriteWines} />
          ) : (
            <EmptyPage title='favorites' />
          )}
        </Container>
      </FavoritesStyled>
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

export default Favorites;
