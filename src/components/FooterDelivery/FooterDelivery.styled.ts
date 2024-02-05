import styled from '@emotion/styled';

export const FooterDeliveryWrapper = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1439.98px) {
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(13)};
  }
`;

export const DeliveryWrapper = styled.div`
  margin-bottom: 30px;
`;

export const PaymentWrapper = styled.div`
  .paymentTitle {
    margin-bottom: ${({ theme }) => theme.spacing(5)};
  }
`;

export const PaymentLogoWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};

  .visaIcon {
    color: #1434cb;
  }

  @media screen and (min-width: 768px) and (max-width: 1439.98px) {
    flex-direction: column;
    gap: 0;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: wrap;
    gap: 0;
    width: 135px;

    li:first-of-type {
      margin-right: ${({ theme }) => theme.spacing(5)};
    }
  }
`;
