import { FC, useEffect, useState } from 'react';

import { IProps } from './SearchResult.types';
import PageNavigation from '../PageNavigation';
import { PagePaths } from '@/constants';
import { operations } from '@/tanStackQuery';
import { setFilterOptions } from '@/utils';

import { IWine } from '@/types/types';
import Container from '../Container';
import CatalogContent from '../Catalog/CatalogContent';
import {
  NoWineFound,
  SearchResultStyled,
  SearchResultTitle,
} from './SearchResult.styled';

const SearchResult: FC<IProps> = ({ query }) => {
  const [wines, setWines] = useState<IWine[]>([]);
  const data = operations.getAllWinesCache();

  useEffect(() => {
    if (query) {
      const result = data?.products.filter((wine: IWine) => {
        if (query === 'sale') {
          return wine.isSale === true;
        } else {
          return Object.keys(wine)
            .filter(
              (key) => !setFilterOptions.searchKeysToExclude.includes(key)
            )
            .some((key: string) => {
              const value = wine[key];
              if (typeof value === 'string') {
                return value.toLowerCase().includes(query);
              } else if (typeof value === 'number') {
                return value.toString().toLowerCase() === query;
              }
              return false;
            });
        }
      });
      setWines(result || []);
    }
  }, [data, query, setWines]);

  return (
    <SearchResultStyled>
      <PageNavigation
        firstTitle='Main page'
        firstLink={PagePaths.homePath}
        secondTitle='Search result'
      />
      <Container>
        <SearchResultTitle>
          <h1 className='searchResult'>Search results</h1>
          {wines.length > 0 && (
            <p className='productsFound'>
              <span>{wines.length}</span> wines found
            </p>
          )}
        </SearchResultTitle>
        {wines.length > 0 ? (
          <CatalogContent searchedWines={wines} />
        ) : (
          <NoWineFound>
            Oops, no matches found for <span>"{query}"</span>
          </NoWineFound>
        )}
      </Container>
    </SearchResultStyled>
  );
};

export default SearchResult;
