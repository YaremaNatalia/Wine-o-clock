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
  padding: 0;
  background-color: ${({ theme }) => theme.colors.primaryBurgundy};
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  &[disabled] {
    background-color: transparent;
    cursor: default;
  }

  & svg {
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.decorativeColor : theme.colors.primaryWhite};
  }

  svg[disabled] {
    color: ${({ theme }) => theme.colors.secondaryGreen};
  }

  &:is(:hover:not(:disabled), :focus:not(:disabled)) {
    background-color: ${({ theme }) => theme.colors.primaryAccentColor};
    transform: scale(1.1);
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25);
  }
`;
