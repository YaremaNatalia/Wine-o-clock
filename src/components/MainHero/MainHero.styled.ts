import styled from '@emotion/styled';

export const MainHeroStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  color: ${({ theme }) => theme.colors.primaryBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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

      & > button {
        margin-bottom: ${({ theme }) => theme.spacing(15)};

        @media screen and (min-width: 768px) {
          margin-bottom: ${({ theme }) => theme.spacing(7)};
          width: 245px;
          height: 48px;
        }
        @media screen and (min-width: 1440px) {
          margin-bottom: ${({ theme }) => theme.spacing(12)};
        }
      }
    }
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  padding-left: ${({ theme }) => theme.spacing(9)};

  @media screen and (min-width: 768px) {
    margin-right: auto;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    padding-left: 0;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: ${({ theme }) => theme.spacing(12)};
  }

  & > h1 {
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontFamily.otherFontFamily};
    font-size: 32px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media screen and (min-width: 768px) {
      font-size: 48px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 76px;
    }

    & > span {
      color: ${({ theme }) => theme.colors.primaryBurgundy};
    }
  }

  & > .firstHeroLine {
    @media screen and (min-width: 768px) {
      padding-left: ${({ theme }) => theme.spacing(17)};
    }

    @media screen and (min-width: 1440px) {
      padding-left: ${({ theme }) => theme.spacing(26)};
    }
  }

  & > .thirdHeroLine {
    @media screen and (min-width: 768px) {
      padding-left: ${({ theme }) => theme.spacing(26)};
    }
  }
`;

export const HeroPictureWrapper = styled.div`
  position: relative;

  svg {
    @media screen and (min-width: 768px) {
      width: 56px;
      height: 37px;
    }

    @media screen and (min-width: 1440px) {
      width: 72px;
      height: 47px;
    }
  }

  > div {
    position: absolute;
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(3)};
    right: ${({ theme }) => theme.spacing(6)};

    @media screen and (min-width: 768px) {
      right: ${({ theme }) => theme.spacing(10)};
      gap: ${({ theme }) => theme.spacing(4)};
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
