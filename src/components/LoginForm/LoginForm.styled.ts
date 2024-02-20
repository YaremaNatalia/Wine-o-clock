import { ClassNames, theme } from '@/constants';
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
  line-height: 1.11;
  letter-spacing: 2.2%;
  text-align: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    font-size: 32px;
  }
`;

export const Form = styled.form`
  padding: ${({ theme }) =>
    `${theme.spacing(6)} ${theme.spacing(4)} ${theme.spacing(8)}`};

  & > label:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  & a[class=${ClassNames.signUpLink}] {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.primaryBurgundy};
    border-radius: 24px;
    color: ${({ theme }) => theme.colors.primaryBurgundy};
    font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: 1.25;
  }

  & > a {
    display: block;
    margin-top: ${({ theme }) => theme.spacing(4)};
    color: #f42408;
    font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 1.71;
    letter-spacing: 1.1%;
    text-align: center;
    text-decoration-line: underline;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${({ theme }) =>
      `${theme.spacing(8)} ${theme.spacing(20)} ${theme.spacing(8)}`};

    & > label:not(:last-of-type) {
      margin-bottom: ${({ theme }) => theme.spacing(4)};
    }

    & > a {
      margin-top: ${({ theme }) => theme.spacing(9)};
    }
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(8)};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;

    & button,
    & a {
      width: 208px;
    }
  }
`;
