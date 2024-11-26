import { theme } from '@/constants';
import styled from '@emotion/styled';

export const LinksList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(6)};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      width: 20px;
      height: 20px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      width: 24px;
      height: 24px;
    }
  }

  a {
    display: flex;
    color: ${({ theme }) => theme.colors.primaryWhite};
    font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};

    &:is(:hover, :focus, .active) {
      color: ${({ theme }) => theme.colors.primaryAccentColor};
    }

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      font-size: 16px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      font-size: 20px;
    }
  }
`;
export const Title = styled.span``;
