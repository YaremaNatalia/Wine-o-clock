import { theme } from '@/constants';
import styled from '@emotion/styled';

export const ClockStyled = styled.div`
  width: 128px;
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primaryWhite};

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    width: 280px;
    font-size: 64px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
