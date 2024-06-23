import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import { AriaLabels, ButtonTypes, FormTypes, InputTypes } from '@/constants';
import { FormData } from './HeaderSearchInput.types';
import { Form } from './HeaderSearchInput.styled';
import IconButton from '@/components/IconButton';
import { IoSearch } from 'react-icons/io5';
import { IWine } from '@/types/types';
import HeaderSearchDropdown from '@/components/Header/HeaderSearchDropdown';

import { operations } from '@/tanStackQuery';
import { setSearchKeys } from '@/utils';
import { useNavigate } from 'react-router-dom';

const HeaderSearchInput: FC = () => {
  const { register, reset } = useForm<FormData>({
    defaultValues: {
      search: '',
    },
  });

  // const searchQuery = watch('search').toLowerCase();

  const [searchResults, setSearchResults] = useState<IWine[]>([]);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const data = operations.allWines();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    if (searchQuery.length >= 2) {
      setIsButtonActive(true);

      const result = data?.products.filter((wine: IWine) => {
        if (searchQuery === 'sale') {
          return wine.isSale === true;
        } else {
          return Object.keys(wine)
            .filter((key) => !setSearchKeys.keysToExclude.includes(key))
            .some((key: string) => {
              const value = wine[key];
              if (typeof value === 'string') {
                return value.toLowerCase().includes(searchQuery);
              } else if (typeof value === 'number') {
                return value.toString().toLowerCase() === searchQuery;
              }
              return false;
            });
        }
      });

      setSearchResults(result || []);
    } else {
      setIsButtonActive(false);
      setSearchResults([]);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    reset();
    setIsButtonActive(false);
    setSearchResults([]);
    if (query.length >= 3) {
      navigate(`/searchResult/${query}`);
    }
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
        onChange={handleChange}
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
