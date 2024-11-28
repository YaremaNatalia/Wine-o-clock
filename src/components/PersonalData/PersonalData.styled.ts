import { theme } from '@/constants';
import styled from '@emotion/styled';

export const PersonalDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export const OrdersAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primaryBurgundy};
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  gap: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    font-size: 16px;
    height: 125px;
    width: 245px;
    padding: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(4)}`};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    font-size: 18px;
    height: 125px;
    width: 305px;
    padding: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(6)}`};
  }

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const TitlePersonalData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(8)};

  & > div {
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      font-size: 24px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      font-size: 32px;
    }
  }
  & > button {
    border: none;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    background-color: transparent;
    &:is(:hover, :focus) {
      color: ${({ theme }) => theme.colors.primaryAccentColor};
    }

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      font-size: 15px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      font-size: 18px;
    }
  }
`;
