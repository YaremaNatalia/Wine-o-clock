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

  h2 {
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontFamily.otherFontFamily};
    font-size: 32px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media screen and (min-width: 768px) {
      font-size: 34px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 83px;
    }
  }
`;

export const WineTimeBg = styled.img`
  
`;

export const WineTimeHeroText = styled.h2`
  position: absolute;
  top: ${({ theme }) => theme.spacing(32)};
  left: ${({ theme }) => theme.spacing(10)};

  @media screen and (min-width: 1440px) {
    top: ${({ theme }) => theme.spacing(45)};
    left: ${({ theme }) => theme.spacing(20)};
  }
`;

export const EveryHourHeroText = styled.h2`
  position: absolute;
  right: ${({ theme }) => theme.spacing(10)};
  bottom: ${({ theme }) => theme.spacing(32)};

  @media screen and (min-width: 1440px) {
    bottom: ${({ theme }) => theme.spacing(45)};
    right: ${({ theme }) => theme.spacing(20)};
  }
`;


