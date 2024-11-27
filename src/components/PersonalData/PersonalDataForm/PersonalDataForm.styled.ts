import styled from 'styled-components';

export const TitlePersonalData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const FormContainer = styled.div`
  margin-top: 20px;
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  span {
    color: red;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
