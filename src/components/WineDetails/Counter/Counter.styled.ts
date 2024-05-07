import styled from '@emotion/styled';

export const CounterStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};

  @media screen and (min-width: 1440px) {
    gap: ${({ theme }) => theme.spacing(22)};
  }

  .counterValue {
    font-size: 18px;

    @media screen and (min-width: 1440px) {
      font-size: 20px;
    }
  }

  & button {
    width: ${({ theme }) => theme.spacing(8)};
    height: ${({ theme }) => theme.spacing(8)};
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.decorativeLightGrey};
    padding: ${({ theme }) => theme.spacing(1.5)};
    margin: 0;
    cursor: pointer;

    @media screen and (min-width: 1440px) {
      width: ${({ theme }) => theme.spacing(10)};
      height: ${({ theme }) => theme.spacing(10)};
      padding: ${({ theme }) => theme.spacing(2.5)};
    }

    svg {
      color: ${({ theme }) => theme.colors.primaryBlack};
    }
  }

  button:disabled svg {
    color: ${({ theme }) => theme.colors.decorativeLightGrey};
    cursor: default;
  }
`;
