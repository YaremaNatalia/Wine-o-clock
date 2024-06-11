import Catalog from '@/components/Catalog';
import Loader from '@/components/Loader';
import { FC } from 'react';
import NotFoundPage from './NotFoundPage';
import { IPage } from '@/types/types';

const CatalogPage: FC<IPage> = ({ isError, isLoading }) => {
  return (
    <>{isError ? <NotFoundPage /> : isLoading ? <Loader /> : <Catalog />}</>
  );
};

export default CatalogPage;
