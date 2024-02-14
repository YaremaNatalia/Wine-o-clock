import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  overflow-y: scroll;
`;

export const Container = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  border: 0;
  background-color: transparent;

  &:is(:hover, :focus) svg {
    color: ${({ theme }) => theme.colors.primaryAccentColor};
  }

  & svg {
    display: block;
    color: ${({ theme }) => theme.colors.primaryBlack};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;
