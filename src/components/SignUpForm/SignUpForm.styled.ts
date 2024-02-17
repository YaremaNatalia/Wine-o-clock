import { theme } from '@/constants';
import styled from '@emotion/styled';

export const Header = styled.div`
  padding-top: ${({ theme }) => theme.spacing(11)};
  padding-bottom: ${({ theme }) => theme.spacing(8)};
  border-bottom: 1px solid #eae9e9;
`;

export const Title = styled.p`
  color: rgb(20, 20, 20);
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  letter-spacing: 2.2%;
  text-align: center;
`;

export const Form = styled.form`
  padding: ${({ theme }) =>
    `${theme.spacing(6)} ${theme.spacing(4)} ${theme.spacing(8)}`};

  & > label:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${({ theme }) =>
      `${theme.spacing(8)} ${theme.spacing(20)} ${theme.spacing(8)}`};

    & > label:not(:last-of-type) {
      margin-bottom: ${({ theme }) => theme.spacing(4)};
    }
  }
`;

export const PrivacyPolicyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(8)};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column-reverse;
  }
`;
