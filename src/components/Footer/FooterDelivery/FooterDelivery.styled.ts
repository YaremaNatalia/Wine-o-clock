import { theme } from '@/constants';
import styled from '@emotion/styled';

export const FooterDeliveryWrapper = styled.div`
  @media screen and (min-width: ${theme.breakpoints.tablet}px) and (max-width: ${theme.breakpoints.desktop-0.2}px) {
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(13)};
  }
`;

export const DeliveryWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(7)};
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

  @media screen and (min-width: ${theme.breakpoints.tablet}px) and (max-width: ${theme.breakpoints.desktop - 0.2}px) {
    flex-direction: column;
    gap: 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    flex-wrap: wrap;
    gap: 0;
    width: 135px;

    li:first-of-type {
      margin-right: ${({ theme }) => theme.spacing(5)};
    }
  }
`;
