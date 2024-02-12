import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import Input from '@/components/Input';
import { AriaLabels, ButtonTypes, FormTypes, InputTypes } from '@/constants';
import { FormData } from './HeaderSearchInput.types';
import { Form } from './HeaderSearchInput.styled';
import IconButton from '@/components/IconButton';
import { IoSearch } from 'react-icons/io5';

import wineData from '../../utils/data.json';
import WineList from '@/components/WineList/WineList';
import { IWine, IWineKeys } from '@/types/types';

const HeaderSearchInput: FC = () => {
  const { register, reset } = useForm<FormData>({
    defaultValues: {
      search: '',
    },
  });

  const [wines, setWines] = useState<IWine[]>([]);
  const keys = ['name', 'color', 'sweetness', 'country', 'region', 'price'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    if (searchValue.length >= 2) {
      const result = wineData.filter((wine: IWineKeys) =>
        keys.some((key) =>
          wine[key]
            ?.toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
      );
      setWines(result);
    } else {
      setWines([]);
    }
  };

  const handleClick = () => {
    try {
      console.log('click');
      reset();
      setWines([]);
    } catch (error) {
      console.error('Error:', error);
      setWines([]);
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
      >
        <IoSearch size={20} />
      </IconButton>
      <WineList wines={wines} />
    </Form>
  );
};

export default HeaderSearchInput;
