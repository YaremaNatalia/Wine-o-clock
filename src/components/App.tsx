import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@/components/SharedLayout';
import { PagePaths } from '@/constants';
import MainPage from '@/pages/MainPage';
import PrivateRoute from '@/components/PrivateRoute';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import ConfOfRegPage from '@/pages/ConfOfRegPage';
import NotFoundPage from '@/pages/NotFoundPage';
import WineTimePage from '@/pages/WineTimePage';

const App = () => {
  return (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route path={PagePaths.storePath} element={<div>storePath</div>} />
        <Route index element={<MainPage />} />
        <Route path={PagePaths.wineTimePath} element={<WineTimePage/>} />
        <Route path={PagePaths.aboutUsPath} element={<div>aboutUsPath</div>} />
        <Route
          path={PagePaths.personalDataPath}
          element={<PrivateRoute element={<div>personalDataPath</div>} />}
        />
        <Route
          path={PagePaths.favoritesPath}
          element={<div>favoritesPath</div>}
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
