import { PagePaths } from '@/constants';
import styled from '@emotion/styled';
import { IStyledProps } from './PrivateLinks.types';

export const LinksList = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 30px;
  }
`;

export const ListItem = styled.li<IStyledProps>`
  order: ${({ href }) => (href === PagePaths.favoritesPath ? 2 : 1)};

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
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
      gap: 10px;
      padding: ${({ theme }) => theme.spacing(8)};
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const Title = styled.span``;
