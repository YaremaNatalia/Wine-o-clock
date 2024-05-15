import styled from '@emotion/styled';

export const AboutUsInstStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: center;

  @media screen and (min-width: 1440px) {
    gap: ${({ theme }) => theme.spacing(7.5)};
  }

  p {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.secondaryGrey};
  }

  a {
    font-size: 32px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: inherit;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryBurgundy};
    }

    @media screen and (min-width: 768px) and (max-width: 1439px) {
      font-size: 20px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: ${({ theme }) => theme.spacing(5)};
    }
  }
`;

export const PictureList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  gap: ${({ theme }) => theme.spacing(5)};

  .thirdPicture,
  .fourthPicture {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
