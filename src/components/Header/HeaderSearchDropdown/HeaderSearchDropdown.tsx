import { FC, useEffect, useRef } from 'react';
import {
  SearchDropdownStyled,
  StyledNavLink,
  WineDetails,
  WineName,
  WinePhoto,
  WinePrice,
} from './HeaderSearchDropdown.styled';
import { IProps } from './HeaderSearchDropdown.type';

const HeaderSearchDropdown: FC<IProps> = ({ wines, resetForm, setWines }) => {
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleClick = () => {
    resetForm();
    setWines([]);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        resetForm();
        setWines([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [resetForm, setWines]);

  return (
    <SearchDropdownStyled ref={dropdownRef}>
      {wines.map(({ id, wineName, price, imageUrl }) => (
        <li key={id}>
          <StyledNavLink to='/store' onClick={handleClick}>
            <WinePhoto src={imageUrl} alt={wineName} />
            <WineDetails>
              <WineName>{wineName}</WineName>
              <WinePrice>${price}</WinePrice>
            </WineDetails>
          </StyledNavLink>
        </li>
      ))}
    </SearchDropdownStyled>
  );
};

export default HeaderSearchDropdown;
