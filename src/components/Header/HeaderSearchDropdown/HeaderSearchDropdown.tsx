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
import { useLocation } from 'react-router-dom';

const HeaderSearchDropdown: FC<IProps> = ({ wines, resetForm, setWines }) => {
  const location = useLocation();
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
      {wines.map(({ _id, title, price, imageUrl }) => (
        <li key={_id}>
          <StyledNavLink
            state={{ from: location }}
            to={`/store/${_id}`}
            onClick={handleClick}
          >
            <WinePhoto src={imageUrl} alt={title} />
            <WineDetails>
              <WineName>{title}</WineName>
              <WinePrice>${price}</WinePrice>
            </WineDetails>
          </StyledNavLink>
        </li>
      ))}
    </SearchDropdownStyled>
  );
};

export default HeaderSearchDropdown;
