import { theme } from '@/constants';
import styled from '@emotion/styled';

export const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(6)};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.primaryBlack};
    width: 334px;

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      min-width: 630px;
      font-size: 20px;
    }
  }
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2.5)};

  label {
    color: ${({ theme }) => theme.colors.modalInputColor};
  }

  input {
    padding: ${({ theme }) => theme.spacing(2.5)};
    border: none;
    box-shadow: none;
    flex-grow: 1;
    text-align: right;
  }

  span {
    color: red;
    font-size: 14px;
  }
`;
