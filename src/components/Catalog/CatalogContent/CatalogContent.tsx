import Button from '@/components/Button';
import WineList from '@/components/WineList';
import { ButtonDesign } from '@/constants';
import { operations } from '@/tanStackQuery';
import { BtnClickEvent, FilterType, IWine } from '@/types/types';
import { FC, useEffect, useState } from 'react';
import { PiSliders } from 'react-icons/pi';
import {
  ContentStyled,
  ContentWrapper,
  FilterWrapper,
  NavigationWrapper,
  SelectPerPageWrapper,
  ToShameWrapper,
} from './CatalogContent.styled';
import Filter from '../Filter';
import { setFilterOptions, setFilterWines, setWindowResize } from '@/utils';
import FilterDropdown from '../Filter/FilterDropdown';
import ModalFilters from '../ModalFilters';
import ToShame from '../Filter/ToShame';
import CheckedFilters from './CheckedFilters';
import { IProps } from './CatalogContent.types';
import { useForm } from 'react-hook-form';
import { IFormValues } from '../Filter/Filter.types';

const CatalogContent: FC<IProps> = ({ searchedWines }) => {
  const data = operations.getAllWinesCache();
  const screenSize = setWindowResize();
  const defaultPerPageValue = screenSize.isTabletScreen ? '12' : '6';

  const products = searchedWines || data?.products;

  const [wines, setWines] = useState<IWine[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toShameValue, setToShameValue] = useState<string>('By name');
  const [perPageValue, setPerPageValue] = useState<string>(defaultPerPageValue);
  const [filtersValue, setFiltersValue] = useState<string[]>([]);
  const [displayedWines, setDisplayedWines] = useState<IWine[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceValues, setPriceValues] = useState<[number, number]>([0, 1000]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const { register, setValue, reset, watch } = useForm<IFormValues>();

  useEffect(() => {
    if (products) {
      let filteredWines = setFilterWines.filterCatalogWines(
        products,
        filtersValue
      );
      filteredWines = setFilterWines.sortToShameWines(
        filteredWines,
        toShameValue
      );
      filteredWines = setFilterWines.filterPrice(filteredWines, priceValues);
      setWines(filteredWines);
    }
  }, [products, filtersValue, toShameValue, priceValues]);

  useEffect(() => {
    const paginatedWines = wines.slice(
      0,
      parseInt(perPageValue, 10) * currentPage
    );
    setDisplayedWines(paginatedWines);
  }, [wines, perPageValue, currentPage]);

  useEffect(() => {
    if (products && products?.length > 0) {
      const newMinPrice = Math.floor(
        Math.min(...products.map((product) => product.price))
      );
      const newMaxPrice = Math.ceil(
        Math.max(...products.map((product) => product.price))
      );
      setMinPrice(newMinPrice);
      setMaxPrice(newMaxPrice);
    }
  }, [products]);

  useEffect(() => {
    setPriceValues([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const handleShowMore = (e: BtnClickEvent) => {
    setCurrentPage((prevPage) => prevPage + 1);
    e.currentTarget.blur();
  };

  const handleToShameChange = (value: string) => {
    setToShameValue(value);
    setCurrentPage(1);
  };

  const handlePerPageChange = (value: string) => {
    setPerPageValue(value);
    setCurrentPage(1);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleSelectFilterValue = (value: string) => {
    const newFilters = [...filtersValue, value];
    setFiltersValue(newFilters);
    setCurrentPage(1);
  };

  const handleRemoveFilterValue = (value: string, filterType?: FilterType) => {
    const newFilters = filtersValue.filter((filter) => filter !== value);
    setFiltersValue(newFilters);
    setCurrentPage(1);
    if (filterType) {
      setValue(filterType, newFilters);
    }
  };

  const handleRemoveAllFiltersValues = () => {
    setFiltersValue([]);
    setPriceValues([minPrice, maxPrice]);
    setToShameValue('By name');
    if (products) {
      setWines(products);
    }
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(wines.length / parseInt(perPageValue, 10));

  const perPageOptions = screenSize.isTabletScreen
    ? setFilterOptions.productPerPageOptionsTablet
    : setFilterOptions.productPerPageOptions;

  return (
    <>
      <ContentStyled>
        <NavigationWrapper>
          <FilterWrapper>
            <PiSliders onClick={handleOpenModal} size={24} />
            <p>Filters</p>
          </FilterWrapper>
          <p className='filterProducts'>Filter products</p>
          <ToShameWrapper>
            <ToShame
              handleToShameChange={handleToShameChange}
              toShameValue={toShameValue}
            />
          </ToShameWrapper>
          <SelectPerPageWrapper>
            <FilterDropdown
              options={perPageOptions}
              onChange={handlePerPageChange}
              title='Number of products on the page'
              value={perPageValue}
            />
          </SelectPerPageWrapper>
        </NavigationWrapper>
        <ContentWrapper>
          <div>
            <Filter
              onSelectFilterValue={handleSelectFilterValue}
              removeSelectFilterValue={handleRemoveFilterValue}
              toShameValue={toShameValue}
              handleToShameChange={handleToShameChange}
              filtersValue={filtersValue}
              priceValues={priceValues}
              setPriceValues={setPriceValues}
              setCurrentPage={setCurrentPage}
              searchedWines={searchedWines}
              minPrice={minPrice}
              maxPrice={maxPrice}
              register={register}
              setValue={setValue}
              reset={reset}
              watch={watch}
            />
          </div>
          <div className='filtersWinesWrapper'>
            <CheckedFilters
              filtersValue={filtersValue}
              priceValues={priceValues}
              setPriceValues={setPriceValues}
              handleRemoveFilterValue={handleRemoveFilterValue}
              handleRemoveAllFiltersValues={handleRemoveAllFiltersValues}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
            {displayedWines.length > 0 ? (
              <WineList wines={displayedWines} />
            ) : (
              <p className='noWineFound'>Oops, no wine found... </p>
            )}
          </div>
        </ContentWrapper>
        {displayedWines.length > 0 && currentPage < totalPages && (
          <Button
            title='Show more'
            buttonDesign={ButtonDesign.burgundy}
            onClick={handleShowMore}
          />
        )}
      </ContentStyled>
      {modalIsOpen && (
        <ModalFilters
          onModalClose={handleCloseModal}
          title='Filter products'
          onSelectFilterValue={handleSelectFilterValue}
          removeSelectFilterValue={handleRemoveFilterValue}
          toShameValue={toShameValue}
          handleToShameChange={handleToShameChange}
          filtersValue={filtersValue}
          priceValues={priceValues}
          setPriceValues={setPriceValues}
          setCurrentPage={setCurrentPage}
          searchedWines={searchedWines}
          minPrice={minPrice}
          maxPrice={maxPrice}
          register={register}
          setValue={setValue}
          reset={reset}
          watch={watch}
        />
      )}
    </>
  );
};

export default CatalogContent;
