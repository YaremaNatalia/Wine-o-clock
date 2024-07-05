import { theme } from '@/constants';
import styled from '@emotion/styled';

export const FooterNewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) and (max-width: ${theme.breakpoints.desktop - 0.2}px) {
    margin: ${({ theme }) => theme.spacing(8)} 0;
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    align-items: flex-start;
  }

  .newsTitle {
    width: 196px;

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      width: auto;
    }
  }
`;

export const NetworksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    align-items: flex-start;
  }
`;

export const NetworkLogoWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};

  li {
    transition: all ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }

  svg {
    display: block;
    color: ${({ theme }) => theme.colors.primaryWhite};
    transition: all ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.primaryBurgundy};
    }
  }
`;
