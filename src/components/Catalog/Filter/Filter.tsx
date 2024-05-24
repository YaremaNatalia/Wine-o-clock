import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { FilterItem, FiltersList, Form } from './Filter.styled';
import PriceSlider from './PriceSlider';
import { operations } from '@/tanStackQuery';

const Filter: FC = () => {
  const [showToShameList, setShowToShameList] = useState<boolean>(false);
  const [showCollectionsList, setShowCollectionsList] =
    useState<boolean>(false);
  const [showColorsList, setShowColorsList] = useState<boolean>(false);
  const [showSweetnessList, setShowSweetnessList] = useState<boolean>(false);
  const [showCountriesList, setShowCountriesList] = useState<boolean>(false);
  const [showRegionsList, setShowRegionsList] = useState<boolean>(false);

  interface IFilters {
    collections: string;
    toShame: string;
    color: string;
    sweetness: string;
    country: string;
    region: string;
  }

  const data = operations.allWines();
  const countriesList = [
    ...new Set(data?.products.map((product) => product.country)),
  ].sort();
  const regionsList = [
    ...new Set(data?.products.map((product) => product.region)),
  ].sort();

  const { register, handleSubmit, setValue, watch } = useForm<IFilters>();

  const onSubmitForm: SubmitHandler<IFilters> = () => {
    setShowToShameList(false);
    setShowCollectionsList(false);
    setShowColorsList(false);
    setShowSweetnessList(false);
    setShowCountriesList(false);
    setShowRegionsList(false);
  };

  const toggleList =
    (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
      setter((prev) => !prev);
    };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <FilterItem>
        <div
          className='filterTitle'
          onClick={toggleList(setShowCollectionsList)}
        >
          Collections
          {showCollectionsList ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </div>
        {showCollectionsList && (
          <FiltersList>
            <label>
              <input type='radio' value='new' {...register('collections')} />
              New Collections
            </label>
            <label>
              <input type='radio' value='sales' {...register('collections')} />
              Sales
            </label>
            <label>
              <input
                type='radio'
                value='bestsellers'
                {...register('collections')}
              />
              Bestsellers
            </label>
          </FiltersList>
        )}
      </FilterItem>
      <FilterItem title='Price'>
        <div className='filterTitle'>Price</div>
        <PriceSlider />
      </FilterItem>
      <FilterItem title='Color'>
        <div className='filterTitle' onClick={toggleList(setShowColorsList)}>
          Color {showColorsList ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </div>
        {showColorsList && (
          <FiltersList>
            <label>
              <input type='radio' value='red' {...register('color')} />
              Red
            </label>
            <label>
              <input type='radio' value='white' {...register('color')} />
              White
            </label>
            <label>
              <input type='radio' value='rose' {...register('color')} />
              Rose
            </label>
          </FiltersList>
        )}
      </FilterItem>

      <FilterItem>
        <div className='filterTitle' onClick={toggleList(setShowSweetnessList)}>
          Sweetness
          {showSweetnessList ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </div>
        {showSweetnessList && (
          <FiltersList>
            <label>
              <input type='radio' value='dry' {...register('sweetness')} />
              Dry
            </label>
            <label>
              <input
                type='radio'
                value='Medium dry'
                {...register('sweetness')}
              />
              Medium dry
            </label>
            <label>
              <input type='radio' value='medium' {...register('sweetness')} />
              Medium
            </label>
            <label>
              <input type='radio' value='sweet' {...register('sweetness')} />
              Sweet
            </label>
          </FiltersList>
        )}
      </FilterItem>
      <FilterItem>
        <div className='filterTitle' onClick={toggleList(setShowCountriesList)}>
          Country
          {showCountriesList ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </div>
        {showCountriesList && data && (
          <FiltersList>
            {countriesList.map((country) => (
              <label key={country}>
                <input type='radio' value={country} {...register('country')} />
                {country}
              </label>
            ))}
          </FiltersList>
        )}
      </FilterItem>
      <FilterItem>
        <div className='filterTitle' onClick={toggleList(setShowRegionsList)}>
          Region
          {showRegionsList ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </div>
        {showRegionsList && data && (
          <FiltersList>
            {regionsList.map((region) => (
              <label key={region}>
                <input type='radio' value={region} {...register('region')} />
                {region}
              </label>
            ))}
          </FiltersList>
        )}
      </FilterItem>
    </Form>
  );
};

export default Filter;
