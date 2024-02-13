import { IWine } from '@/types/types';
import { FC } from 'react';
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
}

const HeaderSearchDropdown: FC<IHeaderSearchDropdown> = ({
  wines,
  resetForm,
}) => {
  return (
    <SearchDropdownStyled>
      <ul>
        {wines.map((wine) => (
          <li key={wine._id}>
            <StyledNavLink to='/store' onClick={() => resetForm()}>
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
