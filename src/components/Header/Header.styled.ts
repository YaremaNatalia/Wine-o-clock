import { ClassNames } from '@/constants';
import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: relative;
  & > div {
    display: flex;
    justify-content: space-between;

    & a[class=${ClassNames.logo}] {
      display: inline-block;
      & svg {
        display: block;
        width: 86px;
        height: 32px;
      }
    }

    & a[class=${ClassNames.basket}] {
      display: inline-block;
      padding: 6px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primaryBurgundy};
      transition: background-color
        ${({ theme }) => theme.transitionDurationAndFunc};
      &:is(:hover, :focus) {
        background-color: ${({ theme }) => theme.colors.primaryAccentColor};
      }
      & svg {
        display: block;
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.colors.primaryWhite};
      }
    }
  }
`;
