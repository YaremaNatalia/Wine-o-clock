import { ClassNames, theme } from '@/constants';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: inline-block;
  min-width: 100%;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  & > div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(4)};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      gap: ${({ theme }) => theme.spacing(2)};
    }
  }

  .headerWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    & a.${ClassNames.logo} {
      display: inline-block;

      & svg {
        display: block;
        width: 86px;
        height: 32px;
        transition: ${({ theme }) => theme.transitionDurationAndFunc};

        &:hover,
        &:focus {
          transform: scale(1.1);
        }

        @media screen and (min-width: ${theme.breakpoints.tablet}px) {
          width: 122px;
          height: 45px;
        }

        @media screen and (min-width: ${theme.breakpoints.desktop}px) {
          width: 163px;
          height: 60.49px;
        }
      }
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      flex-wrap: nowrap;
    }
  }

  @media screen and (max-width: ${theme.breakpoints.desktop - 1}px) {
    padding-top: ${({ theme }) => theme.spacing(4)};
    padding-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

export const StyledBasketLink = styled(Link)`
  display: inline-block;
  position: relative;
  padding: 6px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryBurgundy};
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primaryAccentColor};
  }

  & svg {
    display: block;
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.primaryWhite};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      width: 24px;
      height: 24px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 9px;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondaryGreen};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      width: 10px;
      height: 10px;
      top: 17px;
      left: 12px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      width: 12px;
      height: 12px;
      top: 25px;
      left: 20px;
    }
  }

  &[data-has-wines='true']::before {
    opacity: 1;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    padding: 10px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    padding: 18px;
  }
`;
