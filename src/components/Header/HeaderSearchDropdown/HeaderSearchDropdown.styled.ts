import { WineCardStyledProps } from '@/components/WineCard/WineCard.types';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SearchDropdownStyled = styled.ul`
  max-height: 60vh;
  width: 90%;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border: 1px solid ${({ theme }) => theme.colors.fillGreyColor};
  border-top: none;
  padding: ${({ theme }) => theme.spacing(3)};
  z-index: 999;
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);

  li {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
`;

export const StyledNavLink = styled(NavLink)`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(3)};

  color: inherit;
  cursor: pointer;
`;
export const WinePhotoWrapper = styled.div`
  position: relative;

  .winePhoto {
    width: 80px;
    min-width: 80px;
    height: 80px;
    object-fit: contain;
  }

  .outOfStockOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: 10px;
    z-index: 1;

    svg {
      margin-top: 30%;
      width: 50px;
      height: 50px;
      z-index: 2;
      fill: ${({ theme }) => theme.colors.primaryBurgundy};
    }
  }
`;

export const WineDetails = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const WineName = styled.span``;

export const WinePrice = styled.span<WineCardStyledProps>`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primaryBlack};

  ${({ theme, quantity }) =>
    quantity === 0 &&
    `
      color: ${theme.colors.secondaryGrey};
    `}
`;
