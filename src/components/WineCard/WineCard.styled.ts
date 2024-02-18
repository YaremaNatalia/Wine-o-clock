import styled from '@emotion/styled';

export const WineCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  width: 154px; 
  height: 100%;

  margin-left: auto;
  margin-right: auto;

  .imgWrapper {
    position: relative;
    width: 100%;
    /* height: 207px; */

    p {
      /* position: absolute;
      left: 0; */
      display: block;
      border-radius: 33px;
      padding: 2px 12px;
    }

    svg {
      /* position: absolute;
      top: 0;
      right: 0; */
      color: ${({ theme }) => theme.colors.primaryBurgundy};
    }
  }
  .WineImg {
  }
  .wineNewLabel {
    /* top: 0; */

    background-color: ${({ theme }) => theme.colors.secondaryGreen};
  }
  .wineDiscount {
    /* top: 20px; */

    background-color: ${({ theme }) => theme.colors.secondaryOrange};
  }

  .wineCardInfo {
  }
  .wineName {
  }
  .wineCountry {
  }
  .winePrice {
  }

  @media screen and (min-width: 768px) {
    width: 157px;
  }

  @media screen and (min-width: 1440px) {
    width: 305px;
  }
`;
