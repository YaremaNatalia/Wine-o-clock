import styled from '@emotion/styled';

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  padding-top: ${({ theme }) => theme.spacing(20)};
  padding-bottom: ${({ theme }) => theme.spacing(20)};
`;

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
`;
