import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@/components/SharedLayout';
import { PagePaths } from '@/constants';
import MainPage from '@/pages/MainPage';
import PrivateRoute from '@/components/PrivateRoute';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import ConfOfRegPage from '@/pages/ConfOfRegPage';
import PublicRoute from './PublicRoute';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys, operations } from '@/tanStackQuery';
import Loader from '@/components/Loader';
import { IUser } from '@/types/types';

const App = () => {
  const { data: token } = useQuery<string>({
    queryKey: [QueryKeys.token],
  });
  const { isFetching } = useQuery<IUser | null>({
    queryKey: [QueryKeys.user, token],
    queryFn: () => operations.refreshUser(token),
  });

  return isFetching ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route path={PagePaths.storePath} element={<div>storePath</div>} />
        <Route index element={<MainPage />} />
        <Route path={PagePaths.aboutUsPath} element={<div>aboutUsPath</div>} />
        <Route
          path={PagePaths.personalDataPath}
          element={<PrivateRoute element={<div>personalDataPath</div>} />}
        />
        <Route
          path={PagePaths.favoritesPath}
          element={<PrivateRoute element={<div>favoritesPath</div>} />}
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
          element={<PrivateRoute element={<div>basketPath</div>} />}
        />
        <Route path='*' element={<div>notFound</div>} />
      </Route>
    </Routes>
  );
};

export default App;
