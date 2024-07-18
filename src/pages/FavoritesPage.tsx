import Favorites from '@/components/Favorites';
import Loader from '@/components/Loader';
import { FC } from 'react';
import NotFoundPage from './NotFoundPage';
import { IPage } from '@/types/types';

const FavoritesPage: FC<IPage> = ({ isLoading, isFetching, isError }) => {
  if (isLoading) return <Loader />;
  if (isFetching) return <Loader />;
  if (isError) return <NotFoundPage />;

  return <Favorites />;
};
  

export default FavoritesPage;