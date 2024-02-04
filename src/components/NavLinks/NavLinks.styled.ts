import styled from '@emotion/styled';

export const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const LinksList = styled.ul``;

export const ListItem = styled.li`
  & a {
    display: inline-block;
    color: rgb(20, 20, 20);
    font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 1.25;
    text-align: center;

    &:is(:hover, :focus, .active) {
      color: ${({ theme }) => theme.colors.primaryBurgundy};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
`;
