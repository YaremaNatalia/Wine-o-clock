import Loader from '@/components/Loader';

import { FC } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import { IPage } from '@/types/types';
import SearchResult from '@/components/SearchResult';

const SearchResultPage: FC<IPage> = ({ isError, isLoading }) => {
  const { query } = useParams();

  return (
    <>
      {isError ? (
        <NotFoundPage />
      ) : isLoading ? (
        <Loader />
      ) : (
        <SearchResult query={query} />
      )}
    </>
  );
};

export default SearchResultPage;
