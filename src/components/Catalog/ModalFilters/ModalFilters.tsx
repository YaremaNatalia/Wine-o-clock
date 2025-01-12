import { FC, useEffect } from 'react';

import { createPortal } from 'react-dom';
import Filter from '../Filter';
import { RxCross1 } from 'react-icons/rx';

import { ModalStyled, Overlay } from './ModalFilters.styled';
import { IProps } from './ModalFilters.types';

const modalRoot = document.querySelector('#modal-root');

const ModalFilters: FC<IProps> = ({
  onModalClose,
  title,
  filtersValue,
  onSelectFilterValue,
  removeSelectFilterValue,
  toShameValue,
  handleToShameChange,
  priceValues,
  setPriceValues,
  setCurrentPage,
  searchedWines,
  minPrice,
  maxPrice,
  register,
  setValue,
  reset,
  watch,
}) => {
  useEffect(() => {
    const closeModalEsc = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };
    document.addEventListener('keydown', closeModalEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', closeModalEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onModalClose]);

  const handleClose = ({
    target,
    currentTarget,
  }: React.MouseEvent<HTMLDivElement>) => {
    if (target === currentTarget) {
      onModalClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleClose}>
      <ModalStyled>
        <div className='titleWrapper'>
          <p>{title}</p>
          <button onClick={onModalClose}>
            <RxCross1 size={20} />
          </button>
        </div>
        <Filter
          filtersValue={filtersValue}
          onSelectFilterValue={onSelectFilterValue}
          removeSelectFilterValue={removeSelectFilterValue}
          handleToShameChange={handleToShameChange}
          toShameValue={toShameValue}
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
      </ModalStyled>
      ,
    </Overlay>,
    modalRoot!
  );
};

export default ModalFilters;
