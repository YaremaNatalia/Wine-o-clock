import styled from '@emotion/styled';

export const WineListStyled = styled.ul`
  height: 377px;

  .filterName {
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  .listNavWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing(6)};
  }

  .arrowWrapper {
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(4)};

    svg {
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.decorativeLightGrey};
      padding: 6px;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
    grid-column-gap: ${({ theme }) => theme.spacing(4.75)};
    grid-row-gap: ${({ theme }) => theme.spacing(5)};

    @media screen and (min-width: 768px) {
      grid-column-gap: ${({ theme }) => theme.spacing(5)};
      grid-row-gap: ${({ theme }) => theme.spacing(8)};
    }

    @media screen and (min-width: 1440px) {
      grid-row-gap: ${({ theme }) => theme.spacing(12.5)};
    }
  }
`;
