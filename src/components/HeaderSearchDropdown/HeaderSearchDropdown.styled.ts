import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SearchDropdownStyled = styled.div`
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

export const WinePhoto = styled.img`
  width: 80px;
  min-width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const WineDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const WineName = styled.span``;

export const WinePrice = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primaryBlack};
`;
