import styled from '@emotion/styled';
import { IStyledProps } from './Button.types';
import {
  setBtnBgColor,
  setBtnBgColorHover,
  setBtnBorderColor,
  setBtnBorderColorHover,
  setBtnFontColor,
  setBtnFontColorHover,
  setButtonHeight,
} from '@/utils';

import { ButtonForms, theme } from '@/constants';

export const StyledButton = styled.button<IStyledProps>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ buttonForm }) => setButtonHeight({ buttonForm })}px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid;
  border-color: ${({ buttonDesign }) => setBtnBorderColor(buttonDesign)};
  border-radius: 47px;
  background-color: ${({ buttonDesign }) => setBtnBgColor(buttonDesign)};
  color: ${({ buttonDesign }) => setBtnFontColor(buttonDesign)};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ buttonForm }) =>
    buttonForm === ButtonForms.other ? 16 : 14}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  transition: ${({ theme: { transitionDurationAndFunc } }) =>
    `background-color ${transitionDurationAndFunc}, border-color ${transitionDurationAndFunc}, color ${transitionDurationAndFunc}`};
  &:is(:hover, :focus) {
    background-color: ${({ buttonDesign }) => setBtnBgColorHover(buttonDesign)};
    border-color: ${({ buttonDesign }) => setBtnBorderColorHover(buttonDesign)};
    color: ${({ buttonDesign }) => setBtnFontColorHover(buttonDesign)};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondaryGrey};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    height: ${({ buttonForm, theme }) =>
      setButtonHeight({ buttonForm, breakpoint: theme.breakpoints.desktop })}px;
    font-size: 16px;
  }
`;

export const ChildrenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)};

  svg {
    @media screen and (min-width: 1440px) {
      width: 42px;
      height: 42px;
    }
  }
`;

export const PriceWrapper = styled.div`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-left: auto;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
