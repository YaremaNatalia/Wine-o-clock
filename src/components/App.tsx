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

const App = () => {
  const { data: token } = useQuery<string>({
    queryKey: [QueryKeys.token],
  });
  const { isFetching } = useQuery<IUser | null>({
    queryKey: [QueryKeys.user, token],
    queryFn: () => operations.refreshUser(token),
  });

  const { isError, isLoading } = useGetAllWines();

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
          // element={<PrivateRoute element={<FavoritesPage/>} />}
          element={<PublicRoute element={<FavoritesPage />} />}
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
          // element={<PrivateRoute element={<BasketPage />} />}
          element={<PublicRoute element={<BasketPage />} />}
        />
        <Route path={PagePaths.logInPath} element={<LoginPage />} />
        <Route path={PagePaths.signUpPath} element={<SignUpPage />} />
        <Route path={PagePaths.confOfRegPath} element={<ConfOfRegPage />} />
        <Route path={PagePaths.basketPath} element={<div>basketPath</div>} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
