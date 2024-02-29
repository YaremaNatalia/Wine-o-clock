import styled from '@emotion/styled';

export const MainAgeModalStyled = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 350px;
  padding: ${({ theme }) => theme.spacing(6)};

  @media screen and (min-width: 768px) {
    width: 620px;
    height: 430px;
    padding: ${({ theme }) => theme.spacing(10)};
  }
`;

export const NumbStyled = styled.p`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primaryBurgundy};

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    max-width: 275px;

    @media screen and (min-width: 768px) {
      width: 275px;
      height: 60px;
      font-size: 16px;
    }
  }
`;
export const InputContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(5)} 0;

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
    width: 65px;
    height: 81px;
    font-size: 46px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholderColor};
  }
`;
