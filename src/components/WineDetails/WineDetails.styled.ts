import { theme } from '@/constants';
import styled from '@emotion/styled';

export const WineDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WineWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(5)};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(32)};
  }
`;

export const WineCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-left: auto;
  margin-right: auto;

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
      margin-top: 50%;
      width: 200px;
      height: 200px;
      z-index: 2;
      fill: ${({ theme }) => theme.colors.primaryBurgundy};

      @media screen and (min-width: ${theme.breakpoints.tablet}px) {
        margin-top: 59%;
        width: 150px;
        height: 150px;
      }

      @media screen and (min-width: ${theme.breakpoints.desktop}px) {
        margin-top: 47%;
        width: 300px;
        height: 300px;
      }
    }
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    width: 246px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    width: 522px;
    gap: ${({ theme }) => theme.spacing(5)};
    padding: ${({ theme }) => theme.spacing(4)};
  }

  .nameWrapper {
    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      display: none;
    }
  }
  .wineName {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    text-align: start;
    overflow: hidden;
  }

  .imgWrapper {
    position: relative;
    margin-bottom: ${({ theme }) => theme.spacing(8)};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      margin-bottom: 0;
      padding: 40px 0;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      padding: 30px 0;
    }
  }

  .iconsWrapper {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      text-align: center;
      border-radius: 33px;
      padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(5.25)}`};
      font-size: 12px;
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      width: 70px;

      @media screen and (min-width: ${theme.breakpoints.tablet}px) {
        width: 80px;
        font-size: 16px;
        padding: 4px 14px;
      }
    }

    svg {
      width: 24px;
      height: 24px;
      color: ${({ theme }) => theme.colors.primaryBurgundy};

      @media screen and (min-width: ${theme.breakpoints.tablet}px) {
        width: 32px;
        height: 32px;
      }
    }
  }

  .labelWrapper {
    display: flex;
    flex-direction: column;

    gap: ${({ theme }) => theme.spacing(1.25)};
  }

  .wineImg {
    margin: 0 auto;
    width: auto;
    height: 338px;

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      height: 310px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      height: 620px;
    }
  }

  .wineNewLabel {
    background-color: ${({ theme }) => theme.colors.secondaryGreen};
  }

  .wineDiscountLabel {
    background-color: ${({ theme }) => theme.colors.secondaryOrange};
  }
`;

export const InfoWrapper = styled.div`
  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    width: 422px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    width: 630px;
  }
`;

export const WineDetailsLinks = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.decorativeLightGrey};

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      bottom: -10px;
    }
  }

  a {
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      font-size: 16px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      font-size: 18px;
    }

    cursor: pointer;
    position: relative;
    &:hover {
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 5px;
        background-color: ${({ theme }) => theme.colors.primaryBurgundy};

        @media screen and (min-width: ${theme.breakpoints.desktop}px) {
          bottom: -9px;
        }
      }
    }

    &.active::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 5px;
      background-color: ${({ theme }) => theme.colors.primaryBurgundy};

      @media screen and (min-width: ${theme.breakpoints.desktop}px) {
        bottom: -9px;
      }
    }
  }
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  height: auto;
`;
