// import MasterCard from '../icons/masterCard.svg?react';

import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@/components/SharedLayout';
import { PagePaths } from '@/constants';
import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';

const App = () => {
  return (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route path={PagePaths.storePath} element={<div>storePath</div>} />
        <Route index element={<MainPage />} />
        <Route path={PagePaths.aboutUsPath} element={<div>aboutUsPath</div>} />
        <Route path={PagePaths.personalDataPath} element={<LoginPage />} />
        <Route
          path={PagePaths.favoritesPath}
          element={<div>favoritesPath</div>}
        />
        <Route path={PagePaths.basketPath} element={<div>basketPath</div>} />
        <Route path='*' element={<div>notFound</div>} />
      </Route>
    </Routes>
  );
};

export default App;
