import Button from '@/components/Button';
import WineList from '@/components/WineList';
import { ButtonDesign } from '@/constants';
import { operations } from '@/tanStackQuery';
import { BtnClickEvent, IWine } from '@/types/types';
import { FC, useEffect, useState } from 'react';
import { PiSliders } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import {
  ContentStyled,
  ContentWrapper,
  FilterWrapper,
  NavigationWrapper,
  SelectPerPageWrapper,
  ToShameWrapper,
} from './CatalogContent.styled';
import Filter from '../Filter';
import { filterWines, setFilterOptions } from '@/utils';
import FilterDropdown from '../Filter/FilterDropdown';
import ModalFilters from '../ModalFilters';
import ToShame from '../Filter/ToShame';

const CatalogContent: FC = () => {
  const data = operations.allWines();
  const [wines, setWines] = useState<IWine[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toShameValue, setToShameValue] = useState<string>('By name');
  const [perPageValue, setPerPageValue] = useState<string>('6');
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
    const shamedWines = filterWines.sortToShameWines(wines, toShameValue);
    const priceFilteredWines = filterWines.filterPrice(
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
      const filteredWines = filterWines.filterCatalogWines(
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
              options={setFilterOptions.productPerPageOptions}
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
            />
          </div>
          <div className='filtersWinesWrapper'>
            <div className='chosenFiltersContainer'>
              {filtersValue &&
                filtersValue.map((v, index) => (
                  <button
                    key={index}
                    onClick={() => handleRemoveFilterValue(v)}
                    className='chosenFilterBtn'
                  >
                    {v}
                    <RxCross2 size={11} />
                  </button>
                ))}
              {(priceValues[0] > 0 || priceValues[1] < 3000) && (
                <button onClick={() => setPriceValues([0, 3000])}>
                  {priceValues[0]} - {priceValues[1]} ₴
                  <RxCross2 size={11} />
                </button>
              )}
              {filtersValue.length > 0 && (
                <button onClick={handleRemoveAllFiltersValues}>
                  Reset all filters
                  <RxCross2 size={11} />
                </button>
              )}
            </div>
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
        />
      )}
    </>
  );
};

export default CatalogContent;
