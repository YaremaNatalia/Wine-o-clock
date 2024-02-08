import styled from '@emotion/styled';

export const MainHeroStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  color: ${({ theme }) => theme.colors.primaryBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(5)};
  }

  @media screen and (min-width: 1440px) {
    gap: ${({ theme }) => theme.spacing(28)};
  } */
`;
export const HeroTextWrapper = styled.div`
  h1 {
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontFamily.otherFontFamily};
    font-size: 32px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
export const HeroPictureWrapper = styled.div``;
export const HeroBg = styled.img``;
export const SvgWrapper = styled.div``;
