import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@/components/SharedLayout';
import { PagePaths } from '@/constants';
import MainPage from '@/pages/MainPage';
import PrivateRoute from '@/components/Routs/PrivateRoute';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import ConfOfRegPage from '@/pages/ConfOfRegPage';
import NotFoundPage from '@/pages/NotFoundPage';
import WineTimePage from '@/pages/WineTimePage';
import PublicRoute from '@/components/Routs/PublicRoute';
import Loader from '@/components/Loader';
import { QueryKeys, operations } from '@/tanStackQuery';
import { useQuery } from '@tanstack/react-query';
import { IUser } from '@/types/types';
import WineDetailsPage from '@/pages/WineDetailsPage';
import AboutUsPage from '@/pages/AboutUsPage';
import CatalogPage from '@/pages/CatalogPage';
import SearchResultPage from '@/pages/SearchResultPage';
import BasketPage from '@/pages/BasketPage';
import FavoritesPage from '@/pages/FavoritesPage';
import useGetAllWines from '@/hooks/useGetAllWines';
import useGetFavorites from '@/hooks/useGetFavorites';
import useGetCart from '@/hooks/useGetCart';

const App = () => {
  const { data: token } = useQuery<string>({
    queryKey: [QueryKeys.token],
  });
  const { isFetching } = useQuery<IUser | null>({
    queryKey: [QueryKeys.user, token],
    queryFn: () => operations.refreshUser(token),
  });

  const { isError, isLoading } = useGetAllWines();
  const { isCartLoading, isCartError, isCartFetching } = useGetCart();
  const { isFavoritesLoading, isFavoritesError, isFavoritesFetching } =
    useGetFavorites();

  return isFetching ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route
          path={PagePaths.storePath}
          element={<CatalogPage isLoading={isLoading} isError={isError} />}
        />
        <Route
          index
          element={<MainPage isLoading={isLoading} isError={isError} />}
        />
        <Route
          path={PagePaths.searchResultPath}
          element={<SearchResultPage isLoading={isLoading} isError={isError} />}
        />
        <Route path={PagePaths.wineTimePath} element={<WineTimePage />} />
        <Route path={PagePaths.wineDetailsPath} element={<WineDetailsPage />} />
        <Route path={PagePaths.aboutUsPath} element={<AboutUsPage />} />
        <Route
          path={PagePaths.personalDataPath}
          element={<PrivateRoute element={<div>personalDataPath</div>} />}
        />
        <Route
          path={PagePaths.favoritesPath}
          element={
            <PublicRoute
              element={
                <FavoritesPage
                  isLoading={isFavoritesLoading}
                  isError={isFavoritesError}
                  isFetching={isFavoritesFetching}
                />
              }
            />
          }
        />
        <Route
          path={PagePaths.logInPath}
          element={<PublicRoute element={<LoginPage />} restricted />}
        />
        <Route
          path={PagePaths.signUpPath}
          element={<PublicRoute element={<SignUpPage />} restricted />}
        />
        <Route
          path={PagePaths.confOfRegPath}
          element={<PublicRoute element={<ConfOfRegPage />} restricted />}
        />
        <Route
          path={PagePaths.basketPath}
          element={
            <PublicRoute
              element={
                <BasketPage
                  isLoading={isCartLoading}
                  isError={isCartError}
                  isFetching={isCartFetching}
                />
              }
            />
          }
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
