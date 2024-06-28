import styled from '@emotion/styled';

export const ProductStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(5)} 0;
  border-bottom: ${({ theme }) =>
    `1px solid ${theme.colors.decorativeLightGrey}`};

  @media screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media screen and (min-width: 1440px) {
    gap: ${({ theme }) => theme.spacing(5)};
  }

  .wineImg {
    height: 78px;
    width: 40px;

    @media screen and (min-width: 768px) {
      height: 104px;
      width: 47px;
    }

    @media screen and (min-width: 1440px) {
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

      @media screen and (min-width: 768px) {
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
        @media screen and (min-width: 768px) {
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

    .winePrice {
      font-size: 14px;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.primaryBurgundy};

      @media screen and (min-width: 768px) {
        font-size: 20px;
      }

      @media screen and (min-width: 1440px) {
        font-size: 24px;
      }
    }
  }
`;
