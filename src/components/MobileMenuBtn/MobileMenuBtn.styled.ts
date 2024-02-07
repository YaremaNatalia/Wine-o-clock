import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  border-radius: 4px;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  & svg {
    display: block;
    color: #000000;
  }

  &:is(:hover, :focus) {
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
