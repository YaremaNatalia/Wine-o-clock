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
      <ul>
        {wines.map((wine) => (
          <li key={wine._id}>
            <StyledNavLink to='/store' onClick={handleClick}>
              <WinePhoto src={wine.photo} alt={wine.name} />
              <WineDetails>
                <WineName>{wine.name}</WineName>
                <WinePrice>${wine.price}</WinePrice>
              </WineDetails>
            </StyledNavLink>
          </li>
        ))}
      </ul>
    </SearchDropdownStyled>
  );
};

export default HeaderSearchDropdown;
