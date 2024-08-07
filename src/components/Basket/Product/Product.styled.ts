import styled from '@emotion/styled';
import { ProductStyledProps } from './Product.types';
import { theme } from '@/constants';

export const ProductStyled = styled.div<ProductStyledProps>`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(5)} 0;
  border-bottom: ${({ theme }) =>
    `1px solid ${theme.colors.decorativeLightGrey}`};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(5)};
  }

  .wineImg {
    height: 78px;
    width: 40px;

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      height: 104px;
      width: 47px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      height: 150px;
      width: 68px;
    }
  }

  .infoWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .nameWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .wineName {
      font-size: 12px;
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};

      ${({ theme, quantity }) =>
        quantity === 0 &&
        `
      color: ${theme.colors.secondaryGrey};
    `}

      @media screen and (min-width: ${theme.breakpoints.tablet}px) {
        font-size: 16px;
      }
    }

    button {
      font-size: 24px;
      font-weight: 400;
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.secondaryGrey};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primaryBurgundy};
      }

      & > svg {
        @media screen and (min-width: ${theme.breakpoints.tablet}px) {
          height: 24px;
          width: 24px;
        }
      }
    }
  }

  .priceWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .soldOut {
      font-size: 14px;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.primaryBurgundy};

      @media screen and (min-width: ${theme.breakpoints.tablet}px) {
        font-size: 18px;
      }
    }

    .winePrice {
      font-size: 14px;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${(props) =>
        props.quantity === 0
          ? props.theme.colors.secondaryGrey
          : props.theme.colors.primaryBurgundy};

      @media screen and (min-width: ${theme.breakpoints.tablet}px) {
        font-size: 20px;
      }

      @media screen and (min-width: ${theme.breakpoints.desktop}px) {
        font-size: 24px;
      }
    }
  }
`;
