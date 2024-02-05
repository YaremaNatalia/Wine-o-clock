import styled from '@emotion/styled';

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
`;

export const LogoStyled = styled.img`
  width: 126px;
  height: 47px;
  transition: ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 50px;
    left: 50%;
    margin-left: -63px;
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
