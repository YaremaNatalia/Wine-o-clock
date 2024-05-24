import styled from '@emotion/styled';

export const WineListStyled = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-column-gap: ${({ theme }) => theme.spacing(1)};
  grid-row-gap: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: 768px) {
    grid-column-gap: ${({ theme }) => theme.spacing(3)};
    grid-row-gap: ${({ theme }) => theme.spacing(8)};
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(auto-fill, minmax(305px, 1fr));
    grid-row-gap: ${({ theme }) => theme.spacing(12.5)};
  }
`;
