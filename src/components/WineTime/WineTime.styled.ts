import styled from '@emotion/styled';

export const WineTimeStyled = styled.div`
  & > div {
    
      & > svg {
        display: block;
        margin: auto;
        width: 300px;
        height: 300px;
        fill: ${({ theme }) => theme.colors.primaryBurgundy};
        margin-bottom: 40px;

        @media screen and (min-width: 1440px) {
         width: 400px;
        height: 400px;
         margin-bottom: 50px;

      }
      }
      
    }

    & > button {
      display: block;
      margin-left: auto;
      margin-right: auto;

      margin-bottom: ${({ theme }) => theme.spacing(10)};

      @media screen and (min-width: 768px) {
        width: 245px;
      }
      @media screen and (min-width: 1440px) {
        margin-bottom: ${({ theme }) => theme.spacing(12.5)};
        width: 275px;
      }
    }
  }
`;
