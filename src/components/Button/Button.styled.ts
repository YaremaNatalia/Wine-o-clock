import styled from '@emotion/styled';
import { IStyledProps } from './Button.types';
import {
  setBtnBgColor,
  setBtnBgColorHover,
  setBtnBorderColor,
  setBtnBorderColorHover,
  setBtnFontColor,
  setBtnFontColorHover,
} from '@/utils';

export const StyledButton = styled.button<IStyledProps>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => height}px;
  padding-left: ${({ sidePadding }) => sidePadding}px;
  padding-right: ${({ sidePadding }) => sidePadding}px;
  border: 1px solid;
  border-color: ${({ buttonDesign }) => setBtnBorderColor(buttonDesign)};
  border-radius: ${({ height }) => height / 2}px;
  background-color: ${({ buttonDesign }) => setBtnBgColor(buttonDesign)};
  color: ${({ buttonDesign }) => setBtnFontColor(buttonDesign)};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ fontSize }) => fontSize}px;
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
`;
