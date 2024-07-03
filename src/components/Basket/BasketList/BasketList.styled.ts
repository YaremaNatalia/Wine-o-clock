import styled from '@emotion/styled';

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.fillGreyColor};
  padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(3)}`};
  border-radius: 6px;
  height: 100%;

  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(4)}`};
    gap: ${({ theme }) => theme.spacing(6)};
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ theme }) => `${theme.spacing(7.5)} ${theme.spacing(5)}`};
    flex: 1;
  }

  h2 {
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 20px;
    }
  }
`;

export const ProductListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PaymentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(8)};
  }

  & > ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
    font-size: 12px;

    @media screen and (min-width: 768px) {
      gap: ${({ theme }) => theme.spacing(2.5)};
      font-size: 16px;
    }

    & > li {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .toPay {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;
