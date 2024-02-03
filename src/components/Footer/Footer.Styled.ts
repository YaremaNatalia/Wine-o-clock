import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FooterStyled = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};
  background-color: ${({ theme }) => theme.colors.primaryBlack};
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  @media screen and (min-width: 768px) {
    gap: 0;
    padding: 50px 0 97px;
  }

  @media screen and (min-width: 1440px) {
    padding: 50px 0 97px;
  }
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
    gap: ${({ theme }) => theme.spacing(17)};
  }

  .deliveryWrapper {
    @media screen and (min-width: 768px) and (max-width: 1439.98px) {
      display: flex;
      flex-direction: row;
      gap: ${({ theme }) => theme.spacing(13)};
    }
  }

  .newsWrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media screen and (min-width: 768px) and (max-width: 1439.98px) {
      margin: 32px 0;
      width: 100%;

      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
export const LogoStyled = styled.img`
  width: 126px;
  height: 47px;
  transition: all ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 50px;
    transform: translateX(-50%);
    left: 50%;
    margin-bottom: 0;
  }
`;
export const FooterTitle = styled.h4`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  @media screen and (min-width: 768px) {
    text-align: start;
    margin-bottom: ${({ theme }) => theme.spacing(6)};
    font-size: 16px;
  }
  @media screen and (min-width: 1440) {
    margin-bottom: 30px;
    font-size: 18px;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: 768px) {
    align-items: start;
  }
`;

export const FooterBlockWrapper = styled.div`
  .infoWrapper {
    @media screen and (min-width: 768px) and (max-width: 1439.98px) {
      width: 121px;
    }
  }

  .callCenterTitle {
    width: 230px;
    @media screen and (min-width: 768px) {
      width: 182px;
    }
    @media screen and (min-width: 1440px) {
      width: auto;
    }
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
    li:first-child {
      margin-right: ${({ theme }) => theme.spacing(5)};
    }
  }
`;

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }

  .newsTitle {
    width: 196px;
    @media screen and (min-width: 768px) {
      width: auto;
    }
  }
`;
export const NetworksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;
export const NetworkLogoWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};

  li {
    transition: all ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }

  svg {
    display: block;
    color: ${({ theme }) => theme.colors.primaryWhite};
    transition: all ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.primaryBurgundy};
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  cursor: pointer;

  transition: all ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.decorativeColor};
  }
`;
