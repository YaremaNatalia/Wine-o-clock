import { WineCardStyledProps } from '@/components/WineCard/WineCard.types';
import { theme } from '@/constants';
import styled from '@emotion/styled';

export const WineInfoStyled = styled.div<WineCardStyledProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)};
  }

  .nameWrapper {
    display: none;

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      display: block;
    }
  }

  .wineName {
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    text-align: start;
    overflow: hidden;

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      font-size: 24px;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }

  .winePrice {
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    ${({ theme, quantity }) =>
      quantity === 0 &&
      `
      color: ${theme.colors.secondaryGrey};
    `}

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      font-size: 28px;
    }
  }

  & > button {
    width: 100%;
    border-radius: 0;

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      width: 192px;
      border-radius: 47px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      width: 275px;
      height: 60px;
      font-size: 20px;
    }
  }
`;

export const WineInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  span {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    text-transform: capitalize;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    font-size: 20px;
  }
`;
