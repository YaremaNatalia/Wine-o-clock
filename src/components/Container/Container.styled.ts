import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: ${({ theme }) =>
    theme.containerWidth.mobile + theme.padding.containerPadding * 2}px;
  padding-left: ${({ theme }) => theme.padding.containerPadding}px;
  padding-right: ${({ theme }) => theme.padding.containerPadding}px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: ${({ theme }) =>
      theme.containerWidth.tablet + theme.padding.containerPadding * 2}px;
  }

  @media screen and (min-width: 1440px) {
    width: ${({ theme }) =>
      theme.containerWidth.desktop + theme.padding.containerPadding * 2}px;
  }
`;
