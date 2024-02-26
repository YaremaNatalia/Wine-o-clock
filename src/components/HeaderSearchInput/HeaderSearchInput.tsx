import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import Input from '@/components/Input';
import { AriaLabels, ButtonTypes, FormTypes, InputTypes } from '@/constants';
import { FormData } from './HeaderSearchInput.types';
import { Form } from './HeaderSearchInput.styled';
import IconButton from '@/components/IconButton';
import { IoSearch } from 'react-icons/io5';

import wineData from '../../utils/data.json';
import { IWine } from '@/types/types';
import HeaderSearchDropdown from '@/components/HeaderSearchDropdown';
import { keysToExclude } from '@/utils';

const HeaderSearchInput: FC = () => {
  const { register, reset } = useForm<FormData>({
    defaultValues: {
      search: '',
    },
  });

  const [wines, setWines] = useState<IWine[]>([]);

  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    if (query.length >= 2) {
      setIsButtonActive(true);

      const result = wineData.filter((wine: IWine) => {
        if (query === 'sale') {
          return wine.isSale === true;
        } else {
          return Object.keys(wine)
            .filter((key) => !keysToExclude.includes(key))
            .some((key: string) => {
              const value = wine[key];
              if (typeof value === 'string') {
                return value.toLowerCase().includes(query);
              } else if (typeof value === 'number') {
                return value.toString().toLowerCase() === query;
              } else if (typeof value === 'object') {
                if ('name' in value && typeof value.name === 'string') {
                  return value.name.toLowerCase().includes(query);
                }
              }
              return false;
            });
        }
      });

      setWines(result);
    } else {
      setIsButtonActive(false);
      setWines([]);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      console.log('click');
      e.currentTarget.blur();
      reset();
      setIsButtonActive(false);
    } catch (error) {
      console.error('Error:', error);
      reset();
      setWines([]);
      setIsButtonActive(false);
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
      {wines.length > 0 && (
        <HeaderSearchDropdown
          wines={wines}
          resetForm={reset}
          setWines={setWines}
        />
      )}
    </Form>
  );
};

export default HeaderSearchInput;
