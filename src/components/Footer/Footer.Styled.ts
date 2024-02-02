import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 372px;
  padding: 40px 16px;
  background-color: ${({ theme }) => theme.colors.primaryBlack};
  color: ${({ theme }) => theme.colors.primaryWhite};
`;
export const LogoStyled = styled.img`
  width: 126px;
  height: 47px;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  transition: all ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
export const FooterTitle = styled.h4`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const FooterBlockWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  .callCenterTitle {
    width: 230px;
  }
`;

export const DeliveryWrapper = styled.div`
  margin-bottom: 30px;
`;
export const PaymentWrapper = styled.div``;
export const PaymentLogoWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  .newsTitle {
    width: 196px;
  }
`;
export const NetworksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NetworkLogoWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};

  svg {
    display: block;
    color: ${({ theme }) => theme.colors.primaryWhite};
    transition: all ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.primaryBurgundy};
      /* transform: scale(1.1); */
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
