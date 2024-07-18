import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { FilterItem, FiltersList, Form } from './Filter.styled';
import PriceSlider from './PriceSlider';
import { operations } from '@/tanStackQuery';
import { setFilterOptions, setFilterWines, setToggle } from '@/utils';
import { IFilter, IFormValues } from './Filter.types';
import ToShame from './ToShame';

const Filter: FC<IFilter> = ({
  onSelectFilterValue,
  removeSelectFilterValue,
  toShameValue,
  handleToShameChange,
  filtersValue,
  priceValues,
  setPriceValues,
  setCurrentPage,
  searchedWines,
  minPrice,
  maxPrice,
}) => {
  const [showCollectionsList, setShowCollectionsList] =
    useState<boolean>(false);
  const [showColorsList, setShowColorsList] = useState<boolean>(false);
  const [showSweetnessList, setShowSweetnessList] = useState<boolean>(false);
  const [showCountriesList, setShowCountriesList] = useState<boolean>(false);
  const [showRegionsList, setShowRegionsList] = useState<boolean>(false);
  const [countries, setCountries] = useState<string[]>([]);
  const [regions, setRegions] = useState<string[]>([]);

  const data = operations.getAllWinesCache();
  const { register, setValue, reset, watch } = useForm<IFormValues>();

  useEffect(() => {
    if (data?.products) {
      const fullCountriesList = setFilterWines.setValueList(
        data.products,
        'countries'
      );
      const searchedCountriesList = setFilterWines.setValueList(
        searchedWines,
        'countries'
      );
      const selectedCountriesList =
        searchedCountriesList.length > 0
          ? searchedCountriesList
          : fullCountriesList;
      setCountries(selectedCountriesList);
    }
  }, [data, searchedWines]);

  useEffect(() => {
    const selectedCountries = watch('country') || [];

    const fullRegionsList = setFilterWines.setValueList(
      data?.products,
      'regions'
    );
    const searchedRegionsList = setFilterWines.setValueList(
      searchedWines,
      'regions'
    );
    const regionsList =
      searchedRegionsList && searchedRegionsList.length > 0
        ? searchedRegionsList
        : fullRegionsList;

    const toFilterData =
      searchedRegionsList.length > 0 ? searchedWines : data?.products;

    if (selectedCountries.length > 0 && toFilterData) {
      const selectedRegions = [
        ...new Set(
          toFilterData
            .filter((product) => selectedCountries.includes(product.country))
            .map((product) => product.region)
        ),
      ].sort();
      setRegions(selectedRegions);
    } else {
      setRegions(regionsList);
    }
  }, [data, searchedWines, watch('country')]);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterType: keyof IFormValues
  ) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    const currentValues = watch(filterType);
    const selectedValues: string[] = Array.isArray(currentValues)
      ? currentValues
      : [];
    const updatedValues = isChecked
      ? [...selectedValues, value]
      : selectedValues.filter((item) => item !== value);

    setValue(filterType, updatedValues);
    onSelectFilterValue(value);
    if (!isChecked) {
      removeSelectFilterValue(value);
    }
  };

  useEffect(() => {
    if (filtersValue?.length === 0) {
      reset();
    }
  }, [reset, filtersValue]);

  return (
    <Form>
      <FilterItem>
        <ToShame
          handleToShameChange={handleToShameChange}
          toShameValue={toShameValue}
        />
      </FilterItem>
      <FilterItem>
        <div
          className='filterTitle'
          onClick={setToggle(setShowCollectionsList)}
        >
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
        <PriceSlider
          register={register}
          reset={reset}
          priceValues={priceValues}
          setPriceValues={setPriceValues}
          setCurrentPage={setCurrentPage}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </FilterItem>
      <FilterItem title='Color'>
        <div className='filterTitle' onClick={setToggle(setShowColorsList)}>
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
        <div className='filterTitle' onClick={setToggle(setShowSweetnessList)}>
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
        <div className='filterTitle' onClick={setToggle(setShowCountriesList)}>
          Country
          {showCountriesList ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </div>
        {showCountriesList && countries && (
          <FiltersList>
            {countries.map((country) => (
              <label key={country}>
                <input
                  {...register('country')}
                  type='checkbox'
                  value={country}
                  onChange={(e) => handleCheckboxChange(e, 'country')}
                />
                {country}
              </label>
            ))}
          </FiltersList>
        )}
      </FilterItem>
      <FilterItem>
        <div className='filterTitle' onClick={setToggle(setShowRegionsList)}>
          Region
          {showRegionsList ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </div>
        {showRegionsList && regions && (
          <FiltersList>
            {regions.map((region) => (
              <label key={region}>
                <input
                  {...register('region')}
                  type='checkbox'
                  value={region}
                  onChange={(e) => handleCheckboxChange(e, 'region')}
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
