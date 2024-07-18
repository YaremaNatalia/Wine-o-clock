import Basket from '@/components/Basket';
import Loader from '@/components/Loader';
import { FC } from 'react';
import NotFoundPage from './NotFoundPage';
import { IPage } from '@/types/types';

const BasketPage: FC<IPage> = ({ isLoading, isFetching, isError }) => {
  if (isLoading) return <Loader />;
  if (isFetching) return <Loader />;
  if (isError) return <NotFoundPage />;
  return <Basket />;
};

export default BasketPage;
