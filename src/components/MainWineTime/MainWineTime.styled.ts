import styled from '@emotion/styled';

export const MainWineTimeStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBlack};
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

export const WineTimePictureWrapper = styled.div`
  position: relative;

  h2 {
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontFamily.otherFontFamily};
    font-size: 40px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media screen and (min-width: 1440px) {
      font-size: 83px;
    }
  }
`;

export const MainWineTimeBg = styled.img`
  @media screen and (min-width: 1440px) {
    width: 720px;
    height: 598px;
  }
`;

export const WineTimeText = styled.h2`
  position: absolute;
  top: ${({ theme }) => theme.spacing(32)};
  left: ${({ theme }) => theme.spacing(10)};

  @media screen and (min-width: 1440px) {
    top: ${({ theme }) => theme.spacing(45)};
    left: ${({ theme }) => theme.spacing(20)};
  }
`;

export const EveryHourText = styled.h2`
  position: absolute;
  right: ${({ theme }) => theme.spacing(10)};
  bottom: ${({ theme }) => theme.spacing(32)};

  @media screen and (min-width: 1440px) {
    bottom: ${({ theme }) => theme.spacing(45)};
    right: ${({ theme }) => theme.spacing(20)};
  }
`;

export const MainWineTimeDescription = styled.div`
  width: 375px;
  padding: ${({ theme }) => theme.spacing(6)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 373px;
    padding-right: ${({ theme }) => theme.spacing(10)};
    padding-left: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 606px;
    align-items: start;
    gap: ${({ theme }) => theme.spacing(7)};
    padding-right: ${({ theme }) => theme.spacing(20)};
  }

  h2 {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media screen and (min-width: 1440px) {
      font-size: 32px;
    }
  }

  p {
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    text-align: justify;

    @media screen and (min-width: 1440px) {
      font-size: 20px;
      margin-bottom: ${({ theme }) => theme.spacing(7)};
    }
  }

  button {
    @media screen and (min-width: 768px) {
      width: 158px;
      height: 40px;
    }
    @media screen and (min-width: 1440px) {
      width: 275px;
      height: 60px;
      font-size: 16px;
    }
  }
`;
