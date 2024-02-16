import { ClassNames } from '@/constants';
import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  display: inline-block;
  min-width: 100%;
  position: relative;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  & > div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(4)};

    @media screen and (min-width: 768px) {
      gap: ${({ theme }) => theme.spacing(2)};
    }
  }

  .headerWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    & a[class=${ClassNames.logo}] {
      display: inline-block;
      & svg {
        display: block;
        width: 86px;
        height: 32px;

        @media screen and (min-width: 768px) {
          width: 122px;
          height: 45px;
        }

        @media screen and (min-width: 1440px) {
          width: 163px;
          height: 60.49px;
        }
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

        @media screen and (min-width: 768px) {
          width: 24px;
          height: 24px;
        }
      }

      @media screen and (min-width: 768px) {
        padding: 10px;
      }

      @media screen and (min-width: 1440px) {
        padding: 18px;
      }
    }

    @media screen and (min-width: 1440px) {
      flex-wrap: nowrap;
    }
  }

  @media screen and (max-width: 1439px) {
    padding-top: ${({ theme }) => theme.spacing(4)};
    padding-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;
