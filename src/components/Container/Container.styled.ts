import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: ${({ theme }) => theme.containerWidth.mobile}px;
  padding-left: ${({ theme }) => theme.padding.containerPadding}px;
  padding-right: ${({ theme }) => theme.padding.containerPadding}px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.containerWidth.tablet}px;
  }

  @media screen and (min-width: 1440px) {
    width: ${({ theme }) => theme.containerWidth.desktop}px;
  }
`;
