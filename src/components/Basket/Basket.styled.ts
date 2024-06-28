import styled from '@emotion/styled';

export const BasketContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(6)};
  }

  @media screen and (min-width: 1440px) {
    gap: 0;
  }

  h1 {
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 32px;

      margin-bottom: ${({ theme }) => theme.spacing(12.5)};
    }
  }
`;
