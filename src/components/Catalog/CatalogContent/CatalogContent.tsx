import Button from '@/components/Button';
import WineList from '@/components/WineList';
import { ButtonDesign } from '@/constants';
import { operations } from '@/tanStackQuery';
import { BtnClickEvent, IWine } from '@/types/types';
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

const CatalogContent: FC = () => {
  const data = operations.allWines();
  const screenSize = setWindowResize();
  const defaultPerPageValue = screenSize.isTabletScreen ? '12' : '6';
  const [wines, setWines] = useState<IWine[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toShameValue, setToShameValue] = useState<string>('By name');
  const [perPageValue, setPerPageValue] = useState<string>(defaultPerPageValue);
  const [filtersValue, setFiltersValue] = useState<string[]>([]);
  const [displayedWines, setDisplayedWines] = useState<IWine[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceValues, setPriceValues] = useState<[number, number]>([0, 3000]);

  useEffect(() => {
    if (data?.products) {
      setWines(data.products);
    }
  }, [data]);

  useEffect(() => {
    const shamedWines = setFilterWines.sortToShameWines(wines, toShameValue);
    const priceFilteredWines = setFilterWines.filterPrice(
      shamedWines,
      priceValues
    );
    const paginatedWines = priceFilteredWines.slice(
      0,
      parseInt(perPageValue, 10) * currentPage
    );
    setDisplayedWines(paginatedWines);
  }, [wines, toShameValue, perPageValue, currentPage, priceValues]);

  useEffect(() => {
    if (data?.products) {
      const filteredWines = setFilterWines.filterCatalogWines(
        data.products,
        filtersValue
      );
      setWines(filteredWines);
    }
  }, [data?.products, filtersValue]);

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

  const handleRemoveFilterValue = (value: string) => {
    const newFilters = filtersValue.filter((filter) => filter !== value);
    setFiltersValue(newFilters);
    setCurrentPage(1);
  };

  const handleRemoveAllFiltersValues = () => {
    setFiltersValue([]);
    setPriceValues([0, 3000]);
    setToShameValue('By name');
    if (data) {
      setWines(data.products);
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
              setToShameValue={handleToShameChange}
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
              setToShameValue={handleToShameChange}
              filtersValue={filtersValue}
              priceValues={priceValues}
              setPriceValues={setPriceValues}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className='filtersWinesWrapper'>
            <CheckedFilters
              filtersValue={filtersValue}
              priceValues={priceValues}
              setPriceValues={setPriceValues}
              handleRemoveFilterValue={handleRemoveFilterValue}
              handleRemoveAllFiltersValues={handleRemoveAllFiltersValues}
            />
            {displayedWines.length > 0 ? (
              <WineList wines={displayedWines} />
            ) : (
              <p className='noWineFound'>Oops, no wine found...</p>
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
          setToShameValue={handleToShameChange}
          filtersValue={filtersValue}
          priceValues={priceValues}
          setPriceValues={setPriceValues}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default CatalogContent;
