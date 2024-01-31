import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: ${({ theme }) => theme.deskContainerWidth}px;
  padding-left: ${({ theme }) => theme.padding.containerPadding}px;
  padding-right: ${({ theme }) => theme.padding.containerPadding}px;
  margin-left: auto;
  margin-right: auto;
`;
