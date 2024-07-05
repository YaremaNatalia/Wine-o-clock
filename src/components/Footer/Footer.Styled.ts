import { theme } from '@/constants';
import styled from '@emotion/styled';

export const FooterStyled = styled.footer`
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primaryBlack};
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  padding-top: ${({ theme }) => theme.spacing(32)};
  padding-bottom: ${({ theme }) => theme.spacing(25)};

  .footerLogo {
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -63px;

    width: 126px;
    height: 47px;
    transition: ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus {
      transform: scale(1.1);
    }

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      top: unset;

      bottom: 50px;
      left: 50%;
      margin-left: -63px;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    padding-top: ${({ theme }) => theme.spacing(12)};
  }
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    flex-wrap: nowrap;
    gap: ${({ theme }) => theme.spacing(17)};
  }
`;

export const FooterTitle = styled.h4`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing(7)};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    text-align: start;
    margin-bottom: ${({ theme }) => theme.spacing(6)};
    font-size: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    margin-bottom: ${({ theme }) => theme.spacing(7)};
    font-size: 18px;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    align-items: start;
  }
`;
