import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { WineCardStyledProps } from './WineCard.types';

export const WineDetailsLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  transition: ${({ theme }) => theme.transitionDurationAndFunc};
  color: ${({ theme }) => theme.colors.primaryBlack};
  border-radius: 10px;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const WineCardStyled = styled.li<WineCardStyledProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(3)}`};

  .outOfStockOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: 10px;
    z-index: 1;

    svg {
      margin-top: 45%;
      width: 100px;
      height: 100px;
      z-index: 2;
      fill: ${({ theme }) => theme.colors.primaryBurgundy};

      @media screen and (min-width: 1440px) {
        margin-top: 35%;
        width: 200px;
        height: 200px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    gap: ${({ theme }) => theme.spacing(2.5)};
    padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(5)}`};
  }

  .imgWrapper {
    position: relative;
  }

  .iconsWrapper {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      border-radius: 33px;
      padding: 2px 11px;
      font-size: 8px;
      font-weight: ${({ theme }) => theme.fontWeight.medium};

      @media screen and (min-width: 1440px) {
        font-size: 14px;
        padding: 4px 19px;
      }
    }

    svg {
      color: ${({ theme }) => theme.colors.primaryBurgundy};
    }
  }

  .labelWrapper {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.25)};
    width: 41px;

    @media screen and (min-width: 1440px) {
      width: 70px;
    }
  }

  .wineImg {
    margin: 0 auto;
    width: auto;
    height: 194px;

    @media screen and (min-width: 1440px) {
      height: 346px;
    }
  }

  .wineNewLabel {
    background-color: ${({ theme }) => theme.colors.secondaryGreen};
  }

  .wineDiscountLabel {
    background-color: ${({ theme }) => theme.colors.secondaryOrange};
  }

  .wineCardInfo {
    display: flex;
    flex-direction: column;
  }

  .wineName {
    height: 33px;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media screen and (min-width: 1440px) {
      height: 52px;
      font-size: 16px;
      margin-bottom: 0;
    }
  }

  .wineCountry {
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-bottom: ${({ theme }) => theme.spacing(1)};

    @media screen and (min-width: 1440px) {
      margin-bottom: 0;
    }
  }

  .priceWrapper {
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 1440px) {
      height: 70px;
    }

    button {
      @media screen and (min-width: 1440px) {
        height: 70px;
        width: 70px;
      }

      svg {
        height: 32px;
        width: 32px;

        @media screen and (min-width: 1440px) {
          height: 42px;
          width: 42px;
        }
      }
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

    @media screen and (min-width: 1440px) {
      font-size: 28px;
    }
  }
`;
