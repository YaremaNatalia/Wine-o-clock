import styled from '@emotion/styled';
import { IStyledProps } from './IconButton.types';

export const Button = styled.button<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ btnSize }) => btnSize}px;
  height: ${({ btnSize }) => btnSize}px;
  border-color: transparent;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryBurgundy};
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};
  & svg {
    color: ${({ theme }) => theme.colors.primaryWhite};
  }
  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.primaryAccentColor};
  }
`;
