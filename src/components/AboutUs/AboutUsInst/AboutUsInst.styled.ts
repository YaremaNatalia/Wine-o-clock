import { theme } from '@/constants';
import styled from '@emotion/styled';

export const AboutUsInstStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
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

    @media screen and (min-width: ${theme.breakpoints.tablet}px) and (max-width: ${theme.breakpoints.desktop - 1}px) {
      font-size: 20px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
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
    @media screen and (max-width: ${theme.breakpoints.tablet - 1}px) {
      display: none;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
