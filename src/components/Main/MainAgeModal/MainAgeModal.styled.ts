import { theme } from '@/constants';
import styled from '@emotion/styled';

export const Overlay = styled.div`
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
`;

export const MainAgeModalStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80vw;
  height: 350px;
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primaryWhite};
  -webkit-overflow-scrolling: touch;

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    width: 620px;
    height: 430px;
    padding: ${({ theme }) => theme.spacing(10)};
  }
`;

export const NumbStyled = styled.p`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primaryBurgundy};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    font-size: 70px;
  }
`;

export const ModalTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2.5)};
  text-align: center;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    font-size: 16px;
  }
`;
export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      width: 275px;
    }
  }
`;
export const InputContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(5)} 0;

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(3)};
    padding: ${({ theme }) => theme.spacing(7)} 0;
  }
`;

export const Input = styled.input`
  width: 44px;
  height: 61px;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.modalInputColor};
  text-align: center;
  font-size: 35px;
  color: ${({ theme }) => theme.colors.modalInputColor};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    width: 65px;
    height: 81px;
    font-size: 46px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholderColor};
  }
`;
