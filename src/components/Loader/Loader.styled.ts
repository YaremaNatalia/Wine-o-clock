import styled from '@emotion/styled';

export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  height: calc(100vh - 112px); 

   @media screen and (min-width: 768px) {
    height: calc(100vh - 153px);
  }

  @media screen and (min-width: 1440px) {
    height: calc(100vh - 120px);
  } 

  svg {
    @media screen and (min-width: 1440px) {
      width: 80px;
      height: 80px;
    }
  }
`;
