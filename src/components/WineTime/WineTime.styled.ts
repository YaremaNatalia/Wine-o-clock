import { theme } from '@/constants';
import styled from '@emotion/styled';

export const WineTimeStyled = styled.div`
  & > div {
    & > svg {
      display: block;
      margin: auto;
      width: 300px;
      height: 300px;
      fill: ${({ theme }) => theme.colors.primaryBurgundy};

      @media screen and (min-width: ${theme.breakpoints.desktop}px) {
        width: 400px;
        height: 400px;
      }
    }

    & > button {
      display: block;
      margin-left: auto;
      margin-right: auto;

      margin-bottom: ${({ theme }) => theme.spacing(10)};

      @media screen and (min-width: ${theme.breakpoints.tablet}px) {
        width: 245px;
      }
      @media screen and (min-width: ${theme.breakpoints.desktop}px) {
        margin-bottom: ${({ theme }) => theme.spacing(12.5)};
        width: 275px;
      }
    }
  }
`;
