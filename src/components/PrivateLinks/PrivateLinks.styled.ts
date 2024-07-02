import { PagePaths } from '@/constants';
import styled from '@emotion/styled';
import { IStyledProps } from './PrivateLinks.types';

export const LinksList = styled.ul<{ basket?: boolean }>`
  display: ${({ basket }) => (basket ? 'flex' : 'none')};

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
    color: ${({ theme, basket }) =>
      basket ? theme.colors.secondaryGrey : theme.colors.primaryBlack};

    font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 1.25;
    text-align: center;

    &:is(:hover, :focus, .active) {
      color: ${({ theme }) => theme.colors.primaryBurgundy};
    }

    @media screen and (max-width: 767px) {
      gap: ${({ theme, basket }) =>
        basket ? theme.spacing(1) : theme.spacing(10)};
      padding: ${({ theme, basket }) =>
        basket ? theme.spacing(0) : theme.spacing(8)};
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      flex-direction: ${({ basket }) => (basket ? 'row' : 'column')};
      gap: ${({ theme, basket }) =>
        basket ? theme.spacing(1) : theme.spacing(0)};
    }
  }
`;

export const Title = styled.span``;
