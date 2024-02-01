import styled from '@emotion/styled';
import { IStyledProps } from './Button.types';

export const StyledButton = styled.button<IStyledProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding-left: ${({ sidePadding }) => sidePadding}px;
  padding-right: ${({ sidePadding }) => sidePadding}px;
  border: 1px solid;
  border-color: ${({ theme, transparentBody }) =>
    transparentBody ? theme.colors.primaryBurgundy : 'transparent'};
  border-radius: ${({ height }) => height / 2}px;
  background-color: ${({ theme, transparentBody }) =>
    transparentBody ? 'transparent' : theme.colors.primaryBurgundy};
  color: ${({ theme, transparentBody }) =>
    transparentBody ? theme.colors.primaryBurgundy : theme.colors.primaryWhite};
  font-family: Montserrat;
  font-size: ${({ fontSize }) => fontSize}px;
  /* font-weight: 400 or 500; */
  /* transition: background-color ${({ theme }) =>
    theme.transitionDurationAndFunc}; */
  &:is(:hover, :focus) {
    /* background-color: ${({ theme }) => theme.colors.accentColor}; */
  }
`;
