import styled from '@emotion/styled';

export const MainWineTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const WineTimeWrapper = styled.div`
  position: relative;

  p {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primaryWhite};
  }
`;

export const MainWineTimeBg = styled.img`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 375px;
  height: 357px;
`;

export const WineTimeText = styled.p`
  position: absolute;
  top: 126px;
  left: 0;
`;

export const EveryHourText = styled.p`
  position: absolute;
  bottom: 126px;
  right: 0;
`;

export const MainWineTimeDescription = styled.div`
  padding-top: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.primaryWhite};
  background-color: ${({ theme }) => theme.colors.primaryBlack};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 334px;
    padding-top: 0;
    padding-left: ${({ theme }) => theme.spacing(6)};
  }

  @media screen and (min-width: 1440px) {
    width: 517px;
    align-items: start;
    gap: ${({ theme }) => theme.spacing(7)};
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
