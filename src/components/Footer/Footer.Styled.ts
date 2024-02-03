import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FooterStyled = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};
  /* width: 372px;
  padding: 40px 16px; */
  background-color: ${({ theme }) => theme.colors.primaryBlack};
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  /* @media screen and (min-width: 768px) {
   
  } */
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 0;
    padding: 50px 0 97px;
  }
`;
export const FooterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing(17)};
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
  @media screen and (min-width: 1440px) {
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

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`;

export const FooterBlockWrapper = styled.div`
  .callCenterTitle {
    width: 230px;
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
  margin-bottom: 30px;
  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }

  .newsTitle {
    width: 196px;
    @media screen and (min-width: 1440px) {
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
    color: ${({ theme }) => theme.colors.primaryBurgundy};
  }
`;
