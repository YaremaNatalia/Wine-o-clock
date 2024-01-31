import styled from '@emotion/styled';
import { IStyledProps } from './Button.types';

export const StyledButton = styled.button<IStyledProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding-left: ${({ padding }) => padding}px;
  padding-right: ${({ padding }) => padding}px;
  border: 1px solid;
  border-color: ${({ theme, transparentBody }) =>
    transparentBody ? theme.colors.primeryBergundy : 'transparent'};
  border-radius: ${({ height }) => height / 2}px;
  background-color: ${({ theme, transparentBody }) =>
    transparentBody ? 'transparent' : theme.colors.primeryBergundy};
  color: ${({ theme, transparentBody }) =>
    transparentBody ? theme.colors.primeryBergundy : theme.colors.primeryWhite};
  font-family: Montserrat;
  font-size: 16px;
  /* font-weight: 400 or 500; */
  /* transition: background-color ${({ theme }) =>
    theme.transitionDurationAndFunc}; */
  &:is(:hover, :focus) {
    /* background-color: ${({ theme }) => theme.colors.accentColor}; */
  }
`;
