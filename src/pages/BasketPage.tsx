import Basket from '@/components/Basket';
import Loader from '@/components/Loader';
import { FC } from 'react';
import NotFoundPage from './NotFoundPage';
import useGetBasket from '@/hooks/useGetBasket';

const BasketPage: FC = () => {
  const { data, isLoading, isFetching, isError } = useGetBasket();

  if (isLoading) return <Loader />;
  if (isFetching) return <Loader />;
  if (isError) return <NotFoundPage />;
  if (!data) return <NotFoundPage />;
  return <Basket wines={data} />;
};

export default BasketPage;
