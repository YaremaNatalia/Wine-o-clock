import { theme } from '@/constants';
import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    font-size: 18px;
  }

  label {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  textarea {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.decorativeLightGrey};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    border: none;
    min-height: 88px;

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      margin-bottom: ${({ theme }) => theme.spacing(4)};
    }
  }

  button {
    margin: 0 auto;
    width: 255px;

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      font-size: 20px;
      width: 275px;
    }
  }
`;
