import styled from '@emotion/styled';

export const CustomToastStyled = styled.div`

  background-color: ${({ theme }) => theme.colors.primaryWhite};
  color: ${({ theme }) => theme.colors.primaryBurgundy};
  padding: 10px 20px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  z-index: 9999;
`;
