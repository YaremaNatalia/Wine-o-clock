import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import {
  AriaLabels,
  ButtonTypes,
  FormTypes,
  InputTypes,
  PagePaths,
} from '@/constants';
import { FormData } from './HeaderSearchInput.types';
import { Form } from './HeaderSearchInput.styled';
import IconButton from '@/components/IconButton';
import { IoSearch } from 'react-icons/io5';
import { IWine } from '@/types/types';
import HeaderSearchDropdown from '@/components/Header/HeaderSearchDropdown';
import Fuse from 'fuse.js';
import { operations } from '@/tanStackQuery';
import { setFilterOptions } from '@/utils';
import { useNavigate } from 'react-router-dom';

const HeaderSearchInput: FC = () => {
  const { register, reset, watch } = useForm<FormData>({
    defaultValues: {
      search: '',
    },
  });

  const searchQuery = watch('search').toLowerCase();
  const navigate = useNavigate();
  const data = operations.allWines();

  const [searchResults, setSearchResults] = useState<IWine[]>([]);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const availableWines =
      data?.products.filter((wine) => wine.quantity > 0) || [];
    const fuse = availableWines
      ? new Fuse(availableWines, setFilterOptions.fuseSearchOptions)
      : null;
    if (searchQuery.length >= 2 && fuse) {
      setIsButtonActive(true);
      const result = fuse.search(searchQuery).map(({ item }) => item);
      setSearchResults(result);
      setQuery(searchQuery);
    } else {
      setIsButtonActive(false);
      setSearchResults([]);
    }
  }, [searchQuery, data]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (query.length >= 2) {
      navigate(`${PagePaths.searchResultPath.replace(':query', query)}`);
    }
    e.currentTarget.blur();
    reset();
    setIsButtonActive(false);
    setSearchResults([]);
    setQuery('');
  };

  return (
    <Form>
      <Input
        {...register('search')}
        formType={FormTypes.search}
        settings={{
          placeholder: 'Search',
          required: true,
        }}
        type={InputTypes.text}
      />
      <IconButton
        btnSize={32}
        ariaLabel={AriaLabels.search}
        type={ButtonTypes.button}
        onClick={handleClick}
        disabled={!isButtonActive}
      >
        <IoSearch size={20} />
      </IconButton>
      {searchResults.length > 0 && (
        <HeaderSearchDropdown
          wines={searchResults}
          resetForm={reset}
          setWines={setSearchResults}
        />
      )}
    </Form>
  );
};

export default HeaderSearchInput;
