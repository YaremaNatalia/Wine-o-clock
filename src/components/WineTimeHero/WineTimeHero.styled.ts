import styled from '@emotion/styled';

export const WineTimeHeroStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  color: ${({ theme }) => theme.colors.primaryWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(5)};
  }

  @media screen and (min-width: 1440px) {
    gap: ${({ theme }) => theme.spacing(28)};
  }
`;

export const WineTimeHeroPictureWrapper = styled.div`
  position: relative;

  > div {
    position: absolute;
    display: flex;
    flex-direction: row;

    svg {
      fill: ${({ theme }) => theme.colors.primaryWhite};
    }

    @media screen and (min-width: 768px) {
      gap: 2px;
    }
  }
`;

export const SvgTopLine = styled.div`
  /* top: ${({ theme }) => theme.spacing(18)};
  left: ${({ theme }) => theme.spacing(27)};

  @media screen and (min-width: 768px) {
    top: ${({ theme }) => theme.spacing(18)};
  } */

  @media screen and (min-width: 1440px) {
    top: ${({ theme }) => theme.spacing(18)};
    left: ${({ theme }) => theme.spacing(27)};
  }

  svg:nth-of-type(4) {
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
  /* bottom: ${({ theme }) => theme.spacing(34)};
  right: ${({ theme }) => theme.spacing(130)};

  @media screen and (min-width: 768px) {
    bottom: ${({ theme }) => theme.spacing(34)};
  } */

  @media screen and (min-width: 1440px) {
    bottom: ${({ theme }) => theme.spacing(34)};
    right: ${({ theme }) => theme.spacing(130)};
  }

  svg:nth-of-type(5) {
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

export const WineTimeBg = styled.img``;
