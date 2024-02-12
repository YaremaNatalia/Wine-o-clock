import styled from '@emotion/styled';

export const WineListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 50px;
  margin-bottom: 20px;
  margin-top: 20px;
  list-style: none;
  padding: 20px;
  @media screen and (max-width: 424px) {
    padding: 3px;
    margin-bottom: 30px;
    grid-row-gap: 25px;
  }
`;
