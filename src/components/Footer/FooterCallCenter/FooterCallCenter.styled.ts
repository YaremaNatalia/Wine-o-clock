import { theme } from '@/constants';
import styled from '@emotion/styled';

export const FooterCallCenterWrapper = styled.div`
  .callCenterTitle {
    width: 230px;

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      width: 182px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      width: auto;
    }
  }
`;
