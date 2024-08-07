import styled from '@emotion/styled';
import { IStyledProps } from './Section.types';
import { theme } from '@/constants';

export const StyledSection = styled.section<IStyledProps>`
  padding-top: ${({ paddingTopMobile, theme }) =>
    paddingTopMobile || theme.padding.sectionPadding.mobile}px;
  padding-bottom: ${({ paddingBottomMobile, theme }) =>
    paddingBottomMobile || theme.padding.sectionPadding.mobile}px;

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    padding-top: ${({ paddingTopTablet, theme }) =>
      paddingTopTablet || theme.padding.sectionPadding.tablet}px;
    padding-bottom: ${({ paddingBottomTablet, theme }) =>
      paddingBottomTablet || theme.padding.sectionPadding.tablet}px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    padding-top: ${({ paddingTopDesktop, theme }) =>
      paddingTopDesktop || theme.padding.sectionPadding.desktop}px;
    padding-bottom: ${({ paddingBottomDesktop, theme }) =>
      paddingBottomDesktop || theme.padding.sectionPadding.desktop}px;
  }
`;
