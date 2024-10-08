import { theme } from '@/constants';
import styled from '@emotion/styled';

export const WineListSectionStyled = styled.div`
  .sectionTitle {
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      font-size: 20px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      font-size: 32px;
    }
  }

  .listNavWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing(6)};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      margin-bottom: ${({ theme }) => theme.spacing(8)};
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      margin-bottom: ${({ theme }) => theme.spacing(12.5)};
    }
  }

  .arrowWrapper {
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(4)};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      gap: ${({ theme }) => theme.spacing(5)};
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${({ theme }) => theme.spacing(8)};
      height: ${({ theme }) => theme.spacing(8)};
      background-color: transparent;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.decorativeLightGrey};
      padding: ${({ theme }) => theme.spacing(1.5)};
      margin: 0;
      cursor: pointer;

      @media screen and (min-width: ${theme.breakpoints.tablet}px) {
        width: ${({ theme }) => theme.spacing(10)};
        height: ${({ theme }) => theme.spacing(10)};
        padding: ${({ theme }) => theme.spacing(2.5)};
      }

      svg {
        color: ${({ theme }) => theme.colors.primaryBlack};
      }
    }

    button:disabled svg {
      color: ${({ theme }) => theme.colors.decorativeLightGrey};
      cursor: default;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-column-gap: ${({ theme }) => theme.spacing(1)};
    grid-row-gap: ${({ theme }) => theme.spacing(5)};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      grid-column-gap: ${({ theme }) => theme.spacing(3)};
      grid-row-gap: ${({ theme }) => theme.spacing(8)};
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      grid-template-columns: repeat(auto-fill, minmax(305px, 1fr));
      grid-row-gap: ${({ theme }) => theme.spacing(12.5)};
    }
  }
`;
