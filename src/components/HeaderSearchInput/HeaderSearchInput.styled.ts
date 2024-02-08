import styled from '@emotion/styled';

export const Form = styled.form`
  margin: 0 auto;
  margin-top: 8px;
  position: relative;
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 363px;
  }

  input {
    background-color: ${({ theme }) => theme.colors.fillGreyColor};
  }

  button {
    position: absolute;
    top: 0;
    right: 0;

    @media screen and (min-width: 768px) {
      height: 45px;
      width: 45px;

      svg {
        height: 24px;
        width: 24px;
      }
    }
  }
`;
