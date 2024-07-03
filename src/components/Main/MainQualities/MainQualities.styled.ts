import { theme } from '@/constants';
import styled from '@emotion/styled';

export const MainQualitiesStyled = styled.div`
  color: ${({ theme }) => theme.colors.primaryWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const QualitiesPictureWrapper = styled.div`
  position: relative;
`;
export const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  .textWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing(7)};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: ${({ theme }) => theme.spacing(3)};
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      gap: ${({ theme }) => theme.spacing(37)};
    }
  }
`;

export const QualitiesTitle = styled.h2`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamily.otherFontFamily};
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    font-size: 40px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    font-size: 76px;
  }
`;

export const QualitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    width: 334px;
    gap: ${({ theme }) => theme.spacing(3.5)};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    width: 405px;
    gap: ${({ theme }) => theme.spacing(6)};
  }

  h3 {
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-bottom: ${({ theme }) => theme.spacing(3)};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      margin-bottom: ${({ theme }) => theme.spacing(1.5)};
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      font-size: 24px;
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      margin-bottom: ${({ theme }) => theme.spacing(5)};
    }
  }

  p {
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      font-size: 20px;
    }
  }
`;
