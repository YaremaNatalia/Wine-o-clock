import styled from '@emotion/styled';

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.1);
  padding: ${({ theme }) => `${theme.spacing(10)} ${theme.spacing(2)}`};
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
`;

export const Container = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
`;

