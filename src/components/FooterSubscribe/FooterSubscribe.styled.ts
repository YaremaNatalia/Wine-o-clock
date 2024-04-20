import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 330px;
  }
  @media screen and (min-width: 1440px) {
    width: 350px;
  }

  button {
    position: absolute;
    top: 0;
    right: -1px;

    @media screen and (min-width: 768px) {
      width: 141px;
    }
    @media screen and (min-width: 1440px) {
      width: 160px;
    }
  }
`;
