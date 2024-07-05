import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.1);
  z-index: 1000;
`;

export const ModalStyled = styled.div`
  position: relative;
  width: 100%;
  max-width: 316px;
  height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 24px 16px 24px 16px;
  display: flex;
  flex-direction: column;
  background: #ffffff;

  animation: slideFromLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideFromLeft {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .titleWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    margin-bottom: 24px;
    font-weight: 700;

    button {
      font-size: 40px;
      font-weight: 400;
      border: none;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      color: #141414;

      &:hover,
      &:focus {
        color: #7c0021;
      }
    }
  }
`;
