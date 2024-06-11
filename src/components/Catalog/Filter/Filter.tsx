import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { FilterItem, FiltersList, Form } from './Filter.styled';
import PriceSlider from './PriceSlider';
import { operations } from '@/tanStackQuery';
import { setFilterOptions, toggle } from '@/utils';
import { IFilter } from './Filter.types';
import ToShame from './ToShame';

const Filter: FC<IFilter> = ({
  onSelectFilterValue,
  toShameValue,
  setToShameValue,
  filtersValue,
}) => {
  const [showCollectionsList, setShowCollectionsList] =
    useState<boolean>(false);
  const [showColorsList, setShowColorsList] = useState<boolean>(false);
  const [showSweetnessList, setShowSweetnessList] = useState<boolean>(false);
  const [showCountriesList, setShowCountriesList] = useState<boolean>(false);
  const [showRegionsList, setShowRegionsList] = useState<boolean>(false);
  const [countries, setCountries] = useState<string[]>([]);
  const [regions, setRegions] = useState<string[]>([]);

  const data = operations.allWines();
  const { register, setValue, watch, reset } = useForm();

  const selectedCountries = (watch('country') || []) as string[];
  const selectedRegions = watch('region') || ([] as string[]);

  useEffect(() => {
    if (data?.products) {
      const countriesList = [
        ...new Set(data?.products.map((product) => product.country)),
      ].sort();
      setCountries(countriesList);
    }
  }, [data]);

  useEffect(() => {
    if (selectedCountries.length > 0 && data) {
      const selectedRegions = [
        ...new Set(
          data?.products
            .filter((product) => selectedCountries.includes(product.country))
            .map((product) => product.region)
        ),
      ].sort();
      setRegions(selectedRegions);
      // } else if (selectedCountries.length === 0) {
      //   const regionsList = [
      //     ...new Set(data?.products.map((product) => product.region)),
      //   ].sort();
      //   setRegions(regionsList);
    }
  }, [selectedCountries, data]);

  const changeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const updatedCountries = selectedCountries.includes(value)
      ? selectedCountries.filter((country: string) => country !== value)
      : [...selectedCountries, value];
    setValue('country', updatedCountries);
    onSelectFilterValue(value);
  };

  const changeRegion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const selectedRegions = watch('region') || [];
    const updatedRegions = selectedRegions.includes(value)
      ? selectedRegions.filter((region: string) => region !== value)
      : [...selectedRegions, value];
    setValue('region', updatedRegions);
    onSelectFilterValue(value);
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterType: string
  ) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    const selectedValues = watch(filterType) || [];
    const updatedValues = isChecked
      ? [...selectedValues, value]
      : selectedValues.filter((item: string) => item !== value);

    setValue(filterType, updatedValues);
    onSelectFilterValue(value);
  };

  useEffect(() => {
    if (filtersValue?.length === 0) {
      reset();
    }
  }, [reset, filtersValue]);

  return (
    // <Form onSubmit={handleSubmit(onSubmitForm)}>
    <Form>
      <FilterItem>
        <ToShame
          setToShameValue={setToShameValue}
          toShameValue={toShameValue}
        />
      </FilterItem>
      <FilterItem>
        <div className='filterTitle' onClick={toggle(setShowCollectionsList)}>
          Collections
          {showCollectionsList ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </div>
        {showCollectionsList && (
          <FiltersList>
            {setFilterOptions.collections.map((collection) => (
              <label key={collection}>
                <input
                  {...register('collections')}
                  type='checkbox'
                  value={collection}
                  onChange={(e) => handleCheckboxChange(e, 'collections')}
                />
                {collection}
              </label>
            ))}
          </FiltersList>
        )}
      </FilterItem>
      <FilterItem title='Price'>
        <div className='filterTitle'>Price</div>
        <PriceSlider register={register} />
      </FilterItem>
      <FilterItem title='Color'>
        <div className='filterTitle' onClick={toggle(setShowColorsList)}>
          Color {showColorsList ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </div>
        {showColorsList && (
          <FiltersList>
            {setFilterOptions.color.map((c) => (
              <label key={c}>
                <input
                  {...register('color')}
                  type='checkbox'
                  value={c}
                  onChange={(e) => handleCheckboxChange(e, 'color')}
                />
                {c}
              </label>
            ))}
          </FiltersList>
        )}
      </FilterItem>
      <FilterItem>
        <div className='filterTitle' onClick={toggle(setShowSweetnessList)}>
          Sweetness
          {showSweetnessList ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </div>
        {showSweetnessList && (
          <FiltersList>
            {setFilterOptions.sweetness.map((s) => (
              <label key={s}>
                <input
                  {...register('sweetness')}
                  type='checkbox'
                  value={s}
                  onChange={(e) => handleCheckboxChange(e, 'sweetness')}
                />
                {s}
              </label>
            ))}
          </FiltersList>
        )}
      </FilterItem>
      <FilterItem>
        <div className='filterTitle' onClick={toggle(setShowCountriesList)}>
          Country
          {showCountriesList ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </div>
        {showCountriesList && data && (
          <FiltersList>
            {countries.map((country) => (
              <label key={country}>
                <input
                  {...register('country')}
                  type='checkbox'
                  value={country}
                  checked={selectedCountries.includes(country)}
                  onChange={changeCountry}
                />
                {country}
              </label>
            ))}
          </FiltersList>
        )}
      </FilterItem>
      <FilterItem>
        <div className='filterTitle' onClick={toggle(setShowRegionsList)}>
          Region
          {showRegionsList ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </div>
        {showRegionsList && data && (
          <FiltersList>
            {regions.map((region) => (
              <label key={region}>
                <input
                  {...register('region')}
                  type='checkbox'
                  value={region}
                  checked={selectedRegions.includes(region)}
                  onChange={changeRegion}
                />
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