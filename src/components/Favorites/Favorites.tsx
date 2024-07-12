import { FC, useEffect } from 'react';
import PageNavigation from '../PageNavigation';
import { PagePaths } from '@/constants';
import Container from '../Container';
import WineList from '../WineList';
import WineListSection from '../WineListSection';
import { operations } from '@/tanStackQuery';
import { setFilterWines, setLocalStorage } from '@/utils';
import { FavoritesStyled } from './Favorites.styled';
import EmptyPage from '../EmptyPage';
import { useFavoritesContext } from '@/Context/ContextHooks';


const Favorites: FC = () => {
  const allWines = operations.allWines()?.products;
  const { favoritesWines, setFavoritesWines } = useFavoritesContext();

  const bestsellers = setFilterWines.filterMainWines(
    allWines ?? [],
    'bestsellers'
  );

  useEffect(() => {
    if (allWines) {
      const favoriteWines = setLocalStorage.getFavorites(allWines);
      setFavoritesWines(favoriteWines);
    }
  }, [allWines, setFavoritesWines]);

  useEffect(() => {
    if (allWines) {
      const favoriteWines = setLocalStorage.getFavorites(allWines);
      const updatedWines = favoriteWines.filter((favoriteWine) => {
        return !favoritesWines.some((wine) => wine._id === favoriteWine._id);
      });
      if (updatedWines.length > 0) {
        setFavoritesWines([...favoritesWines, ...updatedWines]);
      }
    }
  }, [allWines, favoritesWines, setFavoritesWines]);

  return (
    <FavoritesStyled>
      <PageNavigation
        firstTitle='Main page'
        firstLink={PagePaths.homePath}
        secondTitle='Favorites'
      />
      <Container>
        {favoritesWines.length > 0 ? (
          <WineList wines={favoritesWines} />
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
