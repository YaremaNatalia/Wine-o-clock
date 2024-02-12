import styled from '@emotion/styled';
import { IStyledProps } from './Input.types';
import {
  setInputBorder,
  setInputHeight,
  setInputPadding,
  setInputWidth,
} from '@/utils';
import { FormTypes, theme } from '@/constants';
import setLabelLeftDistance from '@/utils/setLabelLeftDistance';

export const Label = styled.label`
  display: block;
`;

export const Title = styled.span<IStyledProps>`
  display: inline-block;
  margin-left: ${({ formType }) => setLabelLeftDistance({ formType })};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 14px;
  line-height: 1.29;
  color: ${({ theme }) => theme.colors.decorativeColor};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    margin-left: ${({ formType }) =>
      setLabelLeftDistance({
        formType,
        breakpoint: theme.breakpoints.tablet,
      })};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    margin-left: ${({ formType }) =>
      setLabelLeftDistance({
        formType,
        breakpoint: theme.breakpoints.desktop,
      })};
  }
`;

export const StyledInput = styled.input<IStyledProps>`
  display: block;
  width: ${({ formType }) => setInputWidth({ formType })};
  height: ${({ formType }) => setInputHeight({ formType })}px;
  padding: ${({ formType }) => setInputPadding({ formType })};
  border: ${({ formType }) => setInputBorder(formType)};
  border-radius: ${({ formType }) => setInputHeight({ formType }) / 2}px;
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ formType }) =>
    formType === FormTypes.subscribe ? 16 : 14}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primaryBlack};
  line-height: 1.29;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
  &::placeholder {
    color: ${({ theme }) => theme.colors.decorativeColor};
  }
  &:is(:hover, :focus) {
    border-color: ${({ theme }) => theme.colors.primaryBurgundy};
    outline: none;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    width: ${({ formType, theme }) =>
      setInputWidth({ formType, breakpoint: theme.breakpoints.tablet })};
    height: ${({ formType, theme }) =>
      setInputHeight({ formType, breakpoint: theme.breakpoints.tablet })}px;
    padding: ${({ formType, theme }) =>
      setInputPadding({ formType, breakpoint: theme.breakpoints.tablet })};
    border-radius: ${({ formType, theme }) =>
      setInputHeight({ formType, breakpoint: theme.breakpoints.tablet }) / 2}px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    width: ${({ formType, theme }) =>
      setInputWidth({ formType, breakpoint: theme.breakpoints.desktop })};
    height: ${({ formType, theme }) =>
      setInputHeight({ formType, breakpoint: theme.breakpoints.desktop })}px;
    padding: ${({ formType, theme }) =>
      setInputPadding({ formType, breakpoint: theme.breakpoints.desktop })};
    border-radius: ${({ formType, theme }) =>
      setInputHeight({ formType, breakpoint: theme.breakpoints.desktop }) /
      2}px;
  }
`;
