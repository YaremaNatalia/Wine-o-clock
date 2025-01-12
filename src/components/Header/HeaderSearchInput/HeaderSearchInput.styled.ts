import { theme } from '@/constants';
import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    width: 363px;
  }

  input {
    background-color: ${({ theme }) => theme.colors.placeholderColor};
  }

  button {
    position: absolute;
    top: 0;
    right: 0;

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      height: 45px;
      width: 45px;

      svg {
        height: 24px;
        width: 24px;
      }
    }
  }
`;
