import { theme } from '@/constants';
import styled from '@emotion/styled';

export const PersonalDataNavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.primaryWhite};
  background-color: ${({ theme }) => theme.colors.primaryBurgundy};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding: ${({ theme }) => theme.spacing(4)} 0;

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(6)};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)};
    padding: ${({ theme }) => theme.spacing(6)} 0;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primaryWhite};

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryWhite};
    border: none;
    padding: 0;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.primaryAccentColor};
    }

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      font-size: 16px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      font-size: 20px;
    }
  }

  svg {
    width: 16px;
    height: 16px;

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      width: 20px;
      height: 20px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      width: 24px;
      height: 24px;
    }
  }
`;
