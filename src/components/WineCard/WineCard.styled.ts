import styled from '@emotion/styled';

export const WineCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 154px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    width: 157px;
  }

  @media screen and (max-width: 1440px) {
    width: 305px;
  }
`;
