import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 1000;
  overflow: hidden;
  padding-top: ${({ theme }) => theme.spacing(20)};
  padding-bottom: ${({ theme }) => theme.spacing(20)};

`;

export const Container = styled.div`
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
`;
