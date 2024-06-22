import { FC } from 'react';

import Main from '@/components/Main';
import Loader from '@/components/Loader';
import NotFoundPage from './NotFoundPage';
import { IPage } from '@/types/types';



const MainPage: FC<IPage> = ({ isLoading, isError }) => {
  return <>{isError ? <NotFoundPage /> : isLoading ? <Loader /> : <Main />}</>;
};

export default MainPage;
