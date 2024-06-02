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
import NotFoundPage from '@/pages/NotFoundPage';
import Filter from '../Filter';
import { setFilterOptions, usePagination } from '@/utils';
import FilterDropdown from '../Filter/FilterDropdown';
import ModalFilters from '../ModalFilters';

const CatalogContent: FC = () => {
  const [page, setPage] = useState(1);
  const [wines, setWines] = useState<IWine[]>([]);

  const [limit, setLimit] = useState(4);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dropdownShameValue, setDropdownShameValue] = useState<string>('');
  const [dropdownPageValue, setDropdownPageValue] = useState<string>('');
  const [filtersValue, setFiltersValue] = useState<string[]>([]);

  const data = operations.allWines();
  const { currentPage, currentItems, toNextPage, totalPages } = usePagination(
    data?.products ?? [],
    limit
  );

  useEffect(() => {
    if (wines) {
      if (wines.length === 0) {
        setWines(currentItems);
      } else if (page !== currentPage) {
        setWines((prevWines) => [...prevWines, ...currentItems]);
        setPage(currentPage);
      }
    }
  }, [wines, page, currentItems, currentPage]);

  // if (!data) return <Loader />;
  if (!data) {
    return <NotFoundPage />;
  }

  const handleShowMore = async (e: BtnClickEvent) => {
    toNextPage();
    e.currentTarget.blur();
  };

  const handleToShameChange = (value: string) => {
    setDropdownShameValue(value);
    if (!wines) return;
    const sortedWines = [...wines];
    if (value === 'By name') {
      sortedWines.sort((a, b) => a.title.localeCompare(b.title));
    } else if (value === 'From cheap') {
      sortedWines.sort((a, b) => a.price - b.price);
    } else if (value === 'From expensive') {
      sortedWines.sort((a, b) => b.price - a.price);
    }
    setWines(sortedWines);
  };

  const handlePerPageChange = (value: string) => {
    setDropdownPageValue(value);
    const numbValue = parseInt(value, 10);
    if (numbValue) {
      setLimit(numbValue);
      setPage(1);
    }
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleChoseFilter = (value: string) => {
    setFiltersValue((prev) => {
      const newFilters = new Set(prev);
      newFilters.add(value);
      return Array.from(newFilters);
    });
  };

  const handleRemoveFilter = () => {
    console.log('click Remove filter');
  };

  const handleClearAllFilters = () => {
    console.log('click Remove all filters');
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
            <FilterDropdown
              options={setFilterOptions.toShameOptions}
              onChange={handleToShameChange}
              title='To shame'
              value={dropdownShameValue}
            />
          </ToShameWrapper>
          <SelectPerPageWrapper>
            <FilterDropdown
              options={setFilterOptions.productPerPageOptions}
              onChange={handlePerPageChange}
              title='Number of products on the page'
              value={dropdownPageValue}
            />
          </SelectPerPageWrapper>
        </NavigationWrapper>
        <ContentWrapper>
          <div>
            <Filter
              wines={wines}
              onFilter={setWines}
              onChoseFilter={handleChoseFilter}
              onRemoveFilter={handleRemoveFilter}
              onClearAllFilters={handleClearAllFilters}
            />
          </div>
          <div className='filtersWinesWrapper'>
            <div className='chosenFiltersContainer'>
              {Array.isArray(filtersValue) &&
                filtersValue.map((v, index) => (
                  <button
                    key={index}
                    onClick={handleRemoveFilter}
                    className='chosenFilterBtn'
                  >
                    {v}
                    <RxCross2 size={11} />
                  </button>
                ))}
              {filtersValue.length > 0 && (
                <button onClick={handleClearAllFilters}>
                  Reset all filters
                  <RxCross2 size={11} />
                </button>
              )}
            </div>
            {wines.length > 0 && <WineList wines={wines} />}
          </div>
        </ContentWrapper>
        {wines && page < totalPages && (
          <Button
            title='Show more'
            buttonDesign={ButtonDesign.burgundy}
            onClick={handleShowMore}
            // disabled={isLoading}
          />
        )}
      </ContentStyled>
      {modalIsOpen && (
        <ModalFilters onModalClose={handleCloseModal} title='Filter products' />
      )}
    </>
  );
};

export default CatalogContent;
