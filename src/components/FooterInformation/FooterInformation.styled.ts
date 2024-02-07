import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FooterInfoBlockWrapper = styled.div`
  .infoWrapper {
    @media screen and (min-width: 768px) and (max-width: 1439.98px) {
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
