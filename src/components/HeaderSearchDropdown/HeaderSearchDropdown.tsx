import { IWine } from '@/types/types';
import { Dispatch, FC, SetStateAction } from 'react';
import {
  SearchDropdownStyled,
  StyledNavLink,
  WineDetails,
  WineName,
  WinePhoto,
  WinePrice,
} from './HeaderSearchDropdown.styled';

interface IHeaderSearchDropdown {
  wines: IWine[];
  resetForm: () => void;
  setWines: Dispatch<SetStateAction<IWine[]>>;
}

const HeaderSearchDropdown: FC<IHeaderSearchDropdown> = ({
  wines,
  resetForm,
  setWines,
}) => {
  const handleClick = () => {
    resetForm();
    setWines([]);
  };

  return (
    <SearchDropdownStyled>
      {wines.map((wine) => (
        <li key={wine.id}>
          <StyledNavLink to='/store' onClick={handleClick}>
            <WinePhoto src={wine.imageUrl} alt={wine.wineName} />
            <WineDetails>
              <WineName>{wine.wineName}</WineName>
              <WinePrice>${wine.price}</WinePrice>
            </WineDetails>
          </StyledNavLink>
        </li>
      ))}
    </SearchDropdownStyled>
  );
};

export default HeaderSearchDropdown;
