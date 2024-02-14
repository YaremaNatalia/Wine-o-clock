import styled from '@emotion/styled';

export const WineListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 19px;

  @media screen and (max-width: 768px) {
    grid-column-gap: 32px;
    grid-row-gap: 20px;
  }

  @media screen and (max-width: 1440px) {
    grid-column-gap: 82px;
  }
`;
