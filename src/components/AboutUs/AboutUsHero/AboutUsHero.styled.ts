import styled from '@emotion/styled';

export const AboutUsHeroStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  color: ${({ theme }) => theme.colors.primaryBlack};
  display: grid;
  place-items: center;
  grid-row-gap: ${({ theme }) => theme.spacing(6)};
  grid-template-areas:
    'title'
    'firstParagraph'
    'wineTimeImgWrap'
    'middleParagraph'
    'everyHourImgWrap'
    'lastParagraph';

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-column-gap: ${({ theme }) => theme.spacing(5)};
    align-items: start;
    grid-template-areas:
      'title title'
      'wineTimeImgWrap firstParagraph'
      'middleParagraph middleParagraph'
      'lastParagraph everyHourImgWrap ';
  }

  .aboutUsTitle {
    grid-area: title;
    margin-top: ${({ theme }) => theme.spacing(6)};
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primaryBurgundy};
  }

  & > p {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};

    /* @media screen and (min-width: 1440px) {
      margin-bottom: ${({ theme }) => theme.spacing(15)};
      margin-right: auto;
      width: ${({ theme }) => theme.spacing(157)};
    }  */
  }

  .firstParagraph {
    grid-area: firstParagraph;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }

  .lastParagraph {
    grid-area: lastParagraph;
    margin-top: ${({ theme }) => theme.spacing(4)};
    text-align: center;
  }

  .wineTimeImgWrap {
    grid-area: wineTimeImgWrap;
  }

  .everyHourImgWrap {
    grid-area: everyHourImgWrap;
  }
`;

export const HeroPictureWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    margin: 0 auto;
  }

  .topSvg {
    top: ${({ theme }) => theme.spacing(-5)};

    /* @media screen and (min-width: 1440px) {
      top: ${({ theme }) => theme.spacing(-16)};
      right: ${({ theme }) => theme.spacing(20)};
    } */
  }

  .bottomSvg {
    bottom: ${({ theme }) => theme.spacing(-5)};

    /* @media screen and (min-width: 1440px) {
      top: ${({ theme }) => theme.spacing(4)};
      right: ${({ theme }) => theme.spacing(20)};
    } */
  }
`;
