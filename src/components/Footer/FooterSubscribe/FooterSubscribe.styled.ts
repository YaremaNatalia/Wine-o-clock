import { theme } from '@/constants';
import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    width: 330px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    width: 350px;
  }

  button {
    position: absolute;
    top: 0;
    right: -1px;

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      width: 141px;
    }
    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      width: 160px;
    }
  }
`;
