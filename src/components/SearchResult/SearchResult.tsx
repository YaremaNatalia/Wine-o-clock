import { FC } from 'react';
import { IProps } from './SearchResult.types';
import PageNavigation from '../PageNavigation';
import { PagePaths } from '@/constants';

const SearchResult: FC<IProps> = ({ query }) => {
  return (
    <>
      <PageNavigation
        firstTitle='Main page'
        firstLink={PagePaths.homePath}
        secondTitle='Search result'
      />
    </>
  );
};

export default SearchResult;
