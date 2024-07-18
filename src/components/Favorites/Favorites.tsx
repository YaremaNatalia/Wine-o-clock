import { FC, useEffect, useState } from 'react';
import PageNavigation from '../PageNavigation';
import { PagePaths } from '@/constants';
import Container from '../Container';
import WineList from '../WineList';
import WineListSection from '../WineListSection';
import { operations } from '@/tanStackQuery';
import { setFilterWines, setLocalStorage } from '@/utils';
import { FavoritesStyled } from './Favorites.styled';
import EmptyPage from '../EmptyPage';
import { IWine } from '@/types/types';

const Favorites: FC = () => {
  const allWines = operations.allWines()?.products || [];
  const [favorites, setFavorites] = useState<IWine[]>([]);

  const bestsellers = setFilterWines.filterMainWines(
    allWines ?? [],
    'bestsellers'
  );

  useEffect(() => {
    const favoritesWines = operations.getFavorites();
    const localStorageFavoritesWines =
      setLocalStorage.getLocalStorageFavorites(allWines);

    if (favoritesWines) {
      setFavorites(favoritesWines);
    } else if (localStorageFavoritesWines) {
      setFavorites(localStorageFavoritesWines);
    } else {
      setFavorites([]);
    }
  }, [allWines, setFavorites]);

  return (
    <FavoritesStyled>
      <PageNavigation
        firstTitle='Main page'
        firstLink={PagePaths.homePath}
        secondTitle='Favorites'
      />
      <Container>
        {favorites.length > 0 ? (
          <WineList wines={favorites} />
        ) : (
          <EmptyPage title='favorites' />
        )}
      </Container>
      {bestsellers && bestsellers.length > 0 && (
        <WineListSection
          wines={bestsellers}
          sectionTitle='Bestsellers'
          componentTitle='WineDetails'
        />
      )}
    </FavoritesStyled>
  );
};

export default Favorites;
