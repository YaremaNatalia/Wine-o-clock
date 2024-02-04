import { ClassNames } from '@/constants';
import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: relative;
  & > div {
    display: flex;
    justify-content: space-between;

    & a[class=${ClassNames.logo}] {
      display: inline-block;
      & svg {
        display: block;
        width: 86px;
        height: 32px;
      }
    }

    & a[class=${ClassNames.basket}] {
      display: inline-block;
      padding: 6px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primaryBurgundy};
      transition: background-color
        ${({ theme }) => theme.transitionDurationAndFunc};
      &:is(:hover, :focus) {
        background-color: ${({ theme }) => theme.colors.primaryAccentColor};
      }
      & svg {
        display: block;
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.colors.primaryWhite};
      }
    }
  }
`;

export const MobileMenuBtn = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  border-radius: 4px;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  & svg {
    display: block;
    color: #000000;
  }

  &:is(:hover, :focus) {
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Navigation = styled.div`
  position: fixed;
  top: 32px;
  left: 0;
  width: 100%;
  overflow: scroll;
  background-color: #ffffff;

  & li {
    border-bottom: 1px solid rgb(234, 233, 233);
  }

  & a {
    gap: 10px;
    padding: 32px;
    width: 100%;
  }

  & > ul {
    display: block;
  }

  & > nav {
    display: block;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
