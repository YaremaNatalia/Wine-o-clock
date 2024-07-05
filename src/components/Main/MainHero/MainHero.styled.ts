import { theme } from '@/constants';
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

      @media screen and (min-width: ${theme.breakpoints.tablet}px) {
        font-size: 20px;
      }

      @media screen and (min-width: ${theme.breakpoints.desktop}px) {
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

        @media screen and (min-width: ${theme.breakpoints.tablet}px) {
          margin-bottom: ${({ theme }) => theme.spacing(7)};
          width: 245px;
        }
        @media screen and (min-width: ${theme.breakpoints.desktop}px) {
          margin-bottom: ${({ theme }) => theme.spacing(12)};
          width: 275px;
        }
      }
    }
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
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

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    align-self: start;
    font-size: 48px;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    font-size: 76px;
    margin-bottom: ${({ theme }) => theme.spacing(12)};
  }

  .freeDelivery {
    color: ${({ theme }) => theme.colors.primaryBurgundy};
  }

  .firstHeroLine {
    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      padding-left: ${({ theme }) => theme.spacing(17)};
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      padding-left: ${({ theme }) => theme.spacing(26)};
    }
  }

  .thirdHeroLine {
    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      padding-left: ${({ theme }) => theme.spacing(26)};
    }
  }
`;

export const HeroPictureWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
  }

  .topText {
    top: ${({ theme }) => theme.spacing(-8)};
    right: ${({ theme }) => theme.spacing(6)};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      top: ${({ theme }) => theme.spacing(-13)};
      right: ${({ theme }) => theme.spacing(10)};
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      top: ${({ theme }) => theme.spacing(-16)};
      right: ${({ theme }) => theme.spacing(20)};
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
  }

  .bottomText {
    top: ${({ theme }) => theme.spacing(2)};
    right: ${({ theme }) => theme.spacing(6)};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      top: ${({ theme }) => theme.spacing(4)};
      right: ${({ theme }) => theme.spacing(10)};
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      top: ${({ theme }) => theme.spacing(4)};
      right: ${({ theme }) => theme.spacing(20)};
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
  }
`;
