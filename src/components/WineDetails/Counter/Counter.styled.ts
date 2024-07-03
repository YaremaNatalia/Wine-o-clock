import { theme } from '@/constants';
import styled from '@emotion/styled';

export const CounterStyled = styled.div<{ basket?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme, basket }) =>
    basket ? theme.spacing(4) : theme.spacing(10)};
  border: ${({ theme, basket }) =>
    basket ? `1px solid ${theme.colors.decorativeLightGrey}` : 'none'};
  border-radius: 12px;
  padding: ${({ theme, basket }) =>
    basket ? theme.spacing(0.56) : theme.spacing(0)};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${({ theme, basket }) =>
      basket ? theme.spacing(1) : theme.spacing(0)};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    padding: ${({ theme, basket }) =>
      basket ? theme.spacing(1) : theme.spacing(0)};
    gap: ${({ theme, basket }) =>
      basket ? theme.spacing(4) : theme.spacing(22)};
  }

  .counterValue {
    font-size: ${({ basket }) => (basket ? '12px' : '18px')};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      font-size: ${({ basket }) => (basket ? '14px' : '18px')};
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      font-size: ${({ basket }) => (basket ? '14px' : '20px')};
    }
  }

  & button {
    width: ${({ theme, basket }) =>
      basket ? theme.spacing(6) : theme.spacing(8)};
    height: ${({ theme, basket }) =>
      basket ? theme.spacing(6) : theme.spacing(8)};
    background-color: ${({ theme, basket }) =>
      basket ? theme.colors.primaryBurgundy : 'transparent'};
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.decorativeLightGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      width: ${({ theme, basket }) =>
        basket ? theme.spacing(6) : theme.spacing(10)};
      height: ${({ theme, basket }) =>
        basket ? theme.spacing(6) : theme.spacing(10)};
    }

    svg {
      color: ${({ theme, basket }) =>
        basket ? theme.colors.primaryWhite : theme.colors.primaryBlack};
    }

    &:disabled {
      background-color: transparent;
      cursor: default;

      svg {
        color: ${({ theme, basket }) =>
          basket
            ? theme.colors.primaryBlack
            : theme.colors.decorativeLightGrey};
      }
    }
  }
`;
