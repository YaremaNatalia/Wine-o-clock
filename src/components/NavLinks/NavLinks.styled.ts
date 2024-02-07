import { PagePaths } from '@/constants';
import styled from '@emotion/styled';
import { IStyledProps } from './NavLinks.types';

export const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const LinksList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const ListItem = styled.li<IStyledProps>`
  order: ${({ href }) => (href === PagePaths.aboutUsPath ? 2 : 1)};
  & a {
    display: inline-block;
    color: ${({ theme }) => theme.colors.primaryBlack};
    font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 1.25;
    text-align: center;

    &:is(:hover, :focus, .active) {
      color: ${({ theme }) => theme.colors.primaryBurgundy};
    }

    @media screen and (max-width: 767px) {
      padding: ${({ theme }) => theme.spacing(8)};
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(3)}`};
    }

    @media screen and (min-width: 1440px) {
      padding: 50px 30px;
    }
  }
`;
