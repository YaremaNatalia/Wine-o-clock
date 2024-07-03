import { theme } from '@/constants';
import styled from '@emotion/styled';

export const HeroStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  color: ${({ theme }) => theme.colors.primaryWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(5)};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(28)};
  }
`;

export const HeroPictureWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
  }

  .topText {
    top: ${({ theme }) => theme.spacing(19)};
    left: ${({ theme }) => theme.spacing(6)};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      top: ${({ theme }) => theme.spacing(24)};
      left: ${({ theme }) => theme.spacing(10)};
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      top: ${({ theme }) => theme.spacing(18)};
      left: ${({ theme }) => theme.spacing(21)};
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
    bottom: ${({ theme }) => theme.spacing(19)};
    left: ${({ theme }) => theme.spacing(6)};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      bottom: ${({ theme }) => theme.spacing(24)};
      left: ${({ theme }) => theme.spacing(32)};
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      bottom: ${({ theme }) => theme.spacing(34)};
      left: ${({ theme }) => theme.spacing(93)};
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

export const Bg = styled.img``;
