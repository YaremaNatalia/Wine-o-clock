import styled from '@emotion/styled';

export const MainHeroStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  color: ${({ theme }) => theme.colors.primaryBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spacing(10)};

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > p {
      margin-bottom: ${({ theme }) => theme.spacing(3)};
      font-size: 14px;
      font-weight: ${({ theme }) => theme.fontWeight.regular};

      @media screen and (min-width: 768px) {
        font-size: 20px;
      }

      @media screen and (min-width: 1440px) {
        margin-bottom: ${({ theme }) => theme.spacing(15)};
        margin-right: auto;
        width: ${({ theme }) => theme.spacing(157)};
      }
    }

    & > a {
      margin-right: auto;
      width: 100%;

      & > button {
        margin-bottom: ${({ theme }) => theme.spacing(15)};

        @media screen and (min-width: 768px) {
          margin-bottom: ${({ theme }) => theme.spacing(7)};
          width: 245px;
          
        }
        @media screen and (min-width: 1440px) {
          margin-bottom: ${({ theme }) => theme.spacing(12)};
          width: 275px;
         
     
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing(8)};
  }
`;

export const HeroTitle = styled.h1`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamily.otherFontFamily};
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  align-self: center;

  @media screen and (min-width: 768px) {
    align-self: start;
    font-size: 48px;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }

  @media screen and (min-width: 1440px) {
    font-size: 76px;
    margin-bottom: ${({ theme }) => theme.spacing(12)};
  }

  .freeDelivery {
    color: ${({ theme }) => theme.colors.primaryBurgundy};
  }

  .firstHeroLine {
    @media screen and (min-width: 768px) {
      padding-left: ${({ theme }) => theme.spacing(17)};
    }

    @media screen and (min-width: 1440px) {
      padding-left: ${({ theme }) => theme.spacing(26)};
    }
  }

  .thirdHeroLine {
    @media screen and (min-width: 768px) {
      padding-left: ${({ theme }) => theme.spacing(26)};
    }
  }
`;

export const HeroPictureWrapper = styled.div`
  position: relative;

  > div {
    position: absolute;
    display: flex;
    flex-direction: row;
    right: ${({ theme }) => theme.spacing(6)};

    @media screen and (min-width: 768px) {
      right: ${({ theme }) => theme.spacing(10)};
      gap: 2px;
    }

    @media screen and (min-width: 1440px) {
      right: ${({ theme }) => theme.spacing(20)};
    }
  }
`;

export const SvgTopLine = styled.div`
  top: ${({ theme }) => theme.spacing(-8)};

  @media screen and (min-width: 768px) {
    top: ${({ theme }) => theme.spacing(-12)};
  }

  @media screen and (min-width: 1440px) {
    top: ${({ theme }) => theme.spacing(-16)};
  }

  svg {
    fill: ${({ theme }) => theme.colors.primaryBlack};
  }

  svg:nth-of-type(2) {
    margin-right: ${({ theme }) => theme.spacing(3)};

    @media screen and (min-width: 768px) {
      margin-right: ${({ theme }) => theme.spacing(4)};
    }
  }

  svg:nth-of-type(6) {
    margin-right: ${({ theme }) => theme.spacing(3)};

    @media screen and (min-width: 768px) {
      margin-right: ${({ theme }) => theme.spacing(4)};
    }
  }

  animation: slideFromLeft 3s ease forwards;
  @keyframes slideFromLeft {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const SvgBottomLine = styled.div`
  top: ${({ theme }) => theme.spacing(2)};

  @media screen and (min-width: 768px) {
    top: ${({ theme }) => theme.spacing(3)};
  }

  @media screen and (min-width: 1440px) {
    top: ${({ theme }) => theme.spacing(6)};
  }

  svg {
    fill: ${({ theme }) => theme.colors.primaryWhite};
  }

  svg:nth-of-type(3) {
    margin-right: ${({ theme }) => theme.spacing(3)};

    @media screen and (min-width: 768px) {
      margin-right: ${({ theme }) => theme.spacing(4)};
    }
  }

  animation: slideFromRight 3s ease forwards;
  @keyframes slideFromRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
