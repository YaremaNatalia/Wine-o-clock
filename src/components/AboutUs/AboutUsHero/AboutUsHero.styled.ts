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
    grid-row-gap: 0;
    align-items: start;
    grid-template-areas:
      'title title'
      'wineTimeImgWrap firstParagraph'
      'wineTimeImgWrap middleParagraph'
      'wineTimeImgWrap everyHourImgWrap'
      'lastParagraph everyHourImgWrap '
      '.  everyHourImgWrap ';
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 411px auto;
    grid-column-gap: 0;
    justify-content: space-between;
    grid-template-areas:
      'title everyHourImgWrap'
      'firstParagraph everyHourImgWrap'
      'middleParagraph everyHourImgWrap'
      '. everyHourImgWrap'
      'wineTimeImgWrap everyHourImgWrap'
      'lastParagraph lastParagraph';
  }

  .aboutUsTitle {
    grid-area: title;
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primaryBurgundy};

    @media screen and (min-width: 768px) {
      text-transform: uppercase;
      font-size: 32px;
      margin-bottom: ${({ theme }) => theme.spacing(11)};
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: ${({ theme }) => theme.spacing(7.5)};
    }
  }

  & > p {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  .firstParagraph {
    grid-area: firstParagraph;
    margin-bottom: ${({ theme }) => theme.spacing(4)};

    @media screen and (min-width: 768px) {
      margin-top: ${({ theme }) => theme.spacing(-6)};
      margin-bottom: 0;
    }

    @media screen and (min-width: 1440px) {
      margin-top: 0;
    }
  }

  .middleParagraph {
    @media screen and (min-width: 768px) {
      margin-bottom: ${({ theme }) => theme.spacing(6)};
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: ${({ theme }) => theme.spacing(25)};
    }
  }

  .lastParagraph {
    grid-area: lastParagraph;
    margin-top: ${({ theme }) => theme.spacing(4)};
    text-align: center;

    @media screen and (min-width: 768px) {
      margin-top: ${({ theme }) => theme.spacing(6)};
      text-align: start;
      align-self: start;
    }

    @media screen and (min-width: 1440px) {
      margin: ${({ theme }) => theme.spacing(12.5)} 0;
      width: 522px;
      text-align: center;
    }
  }

  .wineTimeImgWrap {
    grid-area: wineTimeImgWrap;

    @media screen and (min-width: 1440px) {
      float: left;
    }
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

    @media screen and (min-width: 1440px) {
      top: ${({ theme }) => theme.spacing(-10)};
    }
  }

  .bottomSvg {
    bottom: ${({ theme }) => theme.spacing(-5)};

    @media screen and (min-width: 1440px) {
      bottom: ${({ theme }) => theme.spacing(-21)};
    }
  }
`;
