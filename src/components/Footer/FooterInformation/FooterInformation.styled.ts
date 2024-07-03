import { theme } from '@/constants';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FooterInfoBlockWrapper = styled.div`
  .infoWrapper {
    @media screen and (min-width: ${theme.breakpoints.tablet}px) and (max-width: ${theme.breakpoints.desktop - 0.2}px) {
      width: 121px;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  cursor: pointer;

  transition: all ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primaryBurgundy};
  }
`;
