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
import { filterWines, setFilterOptions, usePagination } from '@/utils';
import FilterDropdown from '../Filter/FilterDropdown';
import ModalFilters from '../ModalFilters';
import ToShame from '../Filter/ToShame';

const CatalogContent: FC = () => {
  const data = operations.allWines();
  const [wines, setWines] = useState<IWine[]>(data?.products || []);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toShameValue, setToShameValue] = useState<string>('By name');
  const [perPageValue, setPerPageValue] = useState<string>('6');
  const [filtersValue, setFiltersValue] = useState<string[]>([]);
  const [displayedWines, setDisplayedWines] = useState<IWine[]>([]);

  const { currentPage, currentItems, toNextPage, totalPages } = usePagination(
    wines,
    parseInt(perPageValue, 10),
    toShameValue
  );

  useEffect(() => {
    setDisplayedWines(currentItems);
  }, [currentItems]);

  const handleShowMore = async (e: BtnClickEvent) => {
    toNextPage();
    setDisplayedWines((prevDisplayedWines) => [
      ...prevDisplayedWines,
      ...currentItems,
    ]);

    e.currentTarget.blur();
  };

  const handleToShameChange = (value: string) => {
    setToShameValue(value);
  };

  const handlePerPageChange = (value: string) => {
    setPerPageValue(value);
    setDisplayedWines([]);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleSelectFilterValue = (value: string) => {
    setFiltersValue((prev) => [...prev, value]);
    if (data?.products) {
      const newFilters = [...filtersValue, value];
      const filteredWines = filterWines.filterWines(data.products, newFilters);
      setWines(filteredWines);
    }
  };

  const handleRemoveFilterValue = (value: string) => {
    const newFilters = filtersValue.filter((filter) => filter !== value);
    setFiltersValue(newFilters);
    if (data?.products) {
      const filteredWines = filterWines.filterWines(data.products, newFilters);
      setWines(filteredWines);
    }
  };

  const handleRemoveAllFiltersValues = () => {
    setFiltersValue([]);
    setToShameValue('By name');
    if (data) {
      setWines(data.products);
    }
  };

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
              filtersValue={filtersValue}
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
        {currentItems.length > 0 && currentPage !== totalPages && (
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
          toShameValue={toShameValue}
          setToShameValue={handleToShameChange}
          filtersValue={filtersValue}
        />
      )}
    </>
  );
};

export default CatalogContent;
